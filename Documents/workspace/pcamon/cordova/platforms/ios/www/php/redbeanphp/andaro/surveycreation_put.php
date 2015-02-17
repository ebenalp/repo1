<?php
require_once("../../userfrosting/models/config.php");
require_once('../../dbconfig.php');
require_once('../rb.php');


R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB", $DATADBUSER, $DATADBPW);

$data = [];


$result = array(
    "status" => 0  //OK
);


if (!is_null($loggedInUser)) {
// Check parameter
    if (isset($_POST["json"]))
    {

        $json = json_decode(stripslashes($_POST["json"]), true);
        $output = $json['data'];


        $eventid = $output[0]['eventid'];


        $sql = " DELETE FROM  survey WHERE userid = " . $loggedInUser->user_id . " AND eventid = " . $eventid;
        $data = R::exec($sql);


        $sql = " INSERT INTO  survey ( userid, question , sortorder, eventid) select $loggedInUser->user_id, question, sortorder, " . $eventid . " from surveytemplate ";
        $data = R::exec($sql);

        if ($data < 0 ) {
            $result = array(
                "status" => -4,    // DB Error
                "data" => $data
            );
        }
        else {
            // INSERT OK

            $data = R::getAll('SELECT * FROM survey where eventid = ' . $eventid . ' and userid = ' . $loggedInUser->user_id . ' order by id desc ');

            if ($data < 0)
                $result = array(
                    "status" => -4,    // DB Error
                    "data" => $data
                );
            else {
                $result = array(
                    "status" => 0,    // OK
                    "data" => $data
                );
            }
        }



    } else {
        $result = [
            "error" => "Y",
            "message" => "Unbekannter Request:" . $_SERVER['REQUEST_METHOD'],
        ];


    }

}
else
{
    $result = array(
        "status" => -2,    // Not logged in
        "data" => $data
    );
}
echo json_encode($result);

?>