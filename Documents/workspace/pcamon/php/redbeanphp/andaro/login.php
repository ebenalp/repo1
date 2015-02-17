<?php


header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

require '../rb.php';
require_once('../../dbconfig.php');
require_once("../../userfrosting/models/config.php");

$result = array(
    "status" => 0  //OK
);
$data = [];

if (!isUserLoggedIn()) {

    $result = [
        "status" => -2,
        "data" => $data,
        "message" => "NOLOGIN"
    ];

} else {


        try {
            R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB", $DATADBUSER, $DATADBPW);



            $result = [
                "status" => 0,
                "data" => $data,
                "user" => $loggedInUser->displayname,
                "message" => "LOGIN"
            ];

        } catch (Exception $e) {


            $result = [
                "status" => -3,
                "data" => $data,
                "message" => "NOLOGIN, " . $e->getMessage()
            ];
        }

}
echo json_encode($result);

?>
