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

        $json = json_decode(stripslashes($_POST["json"]), true);
        $output = $json['data'];
        $userid = $loggedInUser->user_id;

        $user = R::dispense('user');
        $userexists = R::getRow( 'SELECT * FROM user WHERE userid = ? LIMIT 1',
            [ $userid ]
        );


        if ($userexists <> null)
            $user->id = $userexists[id];

        $user->userid = $loggedInUser->user_id;

        $user->surname = $output[0]['surname'];
        $user->lastname = $output[0]['lastname'];
        $user->phone = $output[0]['phone'];
        $user->birthday = $output[0]['birthday'];
        //$event->datecreated =  STR_TO_DATE( $output[0]['datetime'],'%d.%m.%Y  %H:%i');
        $user->date =  R::isoDateTime();


        $id = R::store($user);

        if ($id > 0) {


            $data = R::getAll('SELECT * FROM user where userid = ' . $loggedInUser->user_id );
            if ($data < 0)
                $result = array(
                    "status" => -4,    // DB Error
                    "data"  => $data,
                    "message" => "Nutzer konnten nicht gespeichert werden."
                );
            else
                $result = array(
                    "status" => 0,    // DB Error
                    "data"  => $data
                );


        } else {
            $result = array(
                "status" => -4,    // DB Error
                "data"  => $data,
                "message" => "Nutzer konnten nicht gespeichert werden."
            );




        }

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