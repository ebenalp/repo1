<?php


require_once("../../userfrosting/models/config.php");
require_once('../../dbconfig.php');
require_once('../rb.php');
require_once('classes/userdevice.php');

R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB", $DATADBUSER, $DATADBPW);

$data = [];


$result = array(
    "status" => 0  //OK
);


if (!is_null($loggedInUser)) {
// Check parameter
    if (isset($_POST["json"])) {

        $json = json_decode(stripslashes($_POST["json"]), true);
        $output = $json['data'];


        //echo var_dump($output);


        //$eintraege = $output[data];

        // Loop through json values and write to db, Only if data was send

        $data = create_userdevice($loggedInUser->user_id, $output[0]['devicetoken']);

        $result = [
            "status" => 0,
            "data" => $data,
            "message" => "Saved " .$output[0]['devicetoken']
        ];
    } else {
        $result = [
            "status" => -6,
            "data" => $data,
            "message" => "Unbekannter Request:" . $_SERVER['REQUEST_METHOD']
        ];


    }
} else {
    $result = array(
        "status" => -2,    // Not logged in
        "data" => $data
    );
}
echo json_encode($result);



?>