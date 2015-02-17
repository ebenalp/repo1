
<?php

require_once ("../../userfrosting/models/config.php");
require_once ('../../dbconfig.php');
require_once ('../rb.php');
$data = [];


$result = array(
    "status" => 0  //OK
);


if ( !is_null($loggedInUser)) {

    if (isset($_POST["json"])) {
        R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB",$DATADBUSER,$DATADBPW);
        $json = json_decode(stripslashes($_POST["json"]), true);
        $output = $json['data'];


        $msg = $output[0]['msg'];
        // Set parameters:
        $apnsHost = 'gateway.sandbox.push.apple.com';
        $apnsPort = 2195;
        $apnsCert = './apns-dev.pem';

// Create the payload:
        $message = $msg;
// If message is too long, truncate it to stay within the max payload of 256 bytes.
        if (strlen($message) > 125) {
            $message = substr($message, 0, 125) . '...';
        }

        $payload['aps'] = array('alert' => $message, 'badge' => 1, 'sound' => 'default');
        $payload = json_encode($payload);

        $devices = R::getCol('select devicetoken from userdevices where userid = ' . $loggedInUser->user_id . ' AND devicetoken <> "Unbekannt"');

        error_log ('select devicetoken from userdevices where userid = ' . $loggedInUser->user_id );

error_log("devices: " . sizeof($devices));
        for ($i=0;$i<sizeof($devices);$i++) {

            error_log($loggedInUser->user_id . ", Sending msg to: " . $devices[$i]);


// Setup stream:
            $streamContext = stream_context_create();
            stream_context_set_option($streamContext, 'ssl', 'local_cert', $apnsCert);

// Open connection:
            $apns = stream_socket_client(
                'tls://' . $apnsHost . ':' . $apnsPort,
                $error,
                $errorString,
                2,
                STREAM_CLIENT_CONNECT,
                $streamContext
            );

            error_log("ERROR: " . $errorString);
// Get the device token (fetch from a database for example):
            $deviceToken = $devices[$i];


            $apnsMessage
                = chr(0) . chr(0) . chr(32) . pack('H*', str_replace(' ', '', $deviceToken)) . chr(0) . chr(strlen($payload))
                . $payload;


// Send the message:

            fwrite($apns, $apnsMessage);

// Close connection:
            @socket_close($apns);
            fclose($apns);

            $result = array(
                "status" => 0,    // OK
                "data"  => $data
            );
        }


    }
}
echo json_encode($result);
?>
