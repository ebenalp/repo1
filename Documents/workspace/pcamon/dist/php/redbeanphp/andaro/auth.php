<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

require_once ("../../userfrosting/models/config.php");
require_once ('../../dbconfig.php');
require_once ('../rb.php');

require_once('classes/userdevice.php');
R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB",$DATADBUSER,$DATADBPW);

$result = [];

if ( !is_null($loggedInUser)) {

//echo "Call islo";
    if (!is_null($loggedInUser)) {
        $json = json_decode(stripslashes($_POST["json"]), true);
        $output = $json['data'];


        $data = create_userdevice($loggedInUser->user_id, $output[0]['devicetoken']);

        $json = json_decode(stripslashes($_POST["json"]), true);
        $output = $json['data'];
        $group = fetchUserPrimaryGroup($loggedInUser->user_id);


        if ($group["name"] == 'coach') {
            $result = array(
                "status" => 0,
                "showPutSurvey" => "Y",
                "showPortalSettings" => "Y",
                "showPortalFiles" => "Y"
            );
        } else {
            $result = array(
                "status" => 0
            );
        }

    } else {
        $result = array(
            "status" => -1
        );

    }
}

echo json_encode($result);

?>