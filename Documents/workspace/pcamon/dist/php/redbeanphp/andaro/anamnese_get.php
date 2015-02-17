<?php

require_once ("../../userfrosting/models/config.php");
require_once ('../../dbconfig.php');
require_once ('../rb.php');


R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB",$DATADBUSER,$DATADBPW);

$data = [];


$result = array(
    "status" => 0  //OK
);


if ( !is_null($loggedInUser)) {
// Check parameter
    if (isset($_POST["json"])) {


        $userid = $loggedInUser->user_id;





            $data = R::getAll('SELECT * FROM anamnese where userid = ' . $userid );

             if ($data < 0)
                $result = array(
                    "status" => -4,    // DB Error
                    "data"  => $data,
                    "message" => "Anamnese konnten nicht gelesen werden."
                );
            else
                $result = array(
                    "status" => 0,    // DB Error
                    "data"  => $data
                );









    } else {
        $result = [
            "status" => -1,
            "data"  => $data,
            "message" => "Unbekannter Request:" . $_SERVER['REQUEST_METHOD'],
        ];


    }
}
else
{
    $result = array(
        "status" => -2,    // Not logged in
        "data"  => $data
    );
}
echo json_encode($result);

?>