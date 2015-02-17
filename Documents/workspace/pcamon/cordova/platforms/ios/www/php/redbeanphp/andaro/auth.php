<?php

header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

require_once ("../../userfrosting/models/config.php");
require_once ('../../dbconfig.php');
require_once ('../rb.php');


R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB",$DATADBUSER,$DATADBPW);

$result = [];

if ( !is_null($loggedInUser)) {

//echo "Call islo";
    if (!is_null($loggedInUser)) {

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