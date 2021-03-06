<?php
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
$deviceToken = '123131123131312313123123';

// Create the payload:
$message = 'Hallo iOS';
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
// fwrite($apns, $apnsMessage);

// Close connection:
@socket_close($apns);
fclose($apns);
?>