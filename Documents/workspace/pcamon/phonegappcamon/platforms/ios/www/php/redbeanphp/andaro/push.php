
<?php

require_once ("../../userfrosting/models/config.php");

$data = [];


$result = array(
    "status" => 0  //OK
);


if ( !is_null($loggedInUser)) {

    if (isset($_POST["json"])) {

        $json = json_decode(stripslashes($_POST["json"]), true);
        $output = $json['data'];


        $msg = $output[0]['msg'];
        // Set parameters:
        $apnsHost = 'gateway.sandbox.push.apple.com';
        $apnsPort = 2195;
        $apnsCert = './apns-dev.pem';

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
        $deviceToken = '74cf3e3c73e4026806ddb77b42f3db2c09e390919db107a641bb99feb90eac19';

// Create the payload:
        $message = $msg;
// If message is too long, truncate it to stay within the max payload of 256 bytes.
        if (strlen($message) > 125) {
            $message = substr($message, 0, 125) . '...';
        }

        $payload['aps'] = array('alert' => $message, 'badge' => 1, 'sound' => 'default');
        $payload = json_encode($payload);

// Send the message:
        $apnsMessage
            = chr(0) . chr(0) . chr(32) . pack('H*', str_replace(' ', '', $deviceToken)) . chr(0) . chr(strlen($payload))
            . $payload;
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
echo json_encode($result);
?>
