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

    if (isset($_POST["json"])) {

        $json = json_decode(stripslashes($_POST["json"]), true);
        $output = $json['data'];

        $mail = R::dispense('mail');


        $mail->userid = $loggedInUser->user_id;


        $mail->recepient = $output[0]['recepient'];
        $mail->text = $output[0]['text'];
        $mail->status = "sent";

        //$event->datecreated =  STR_TO_DATE( $output[0]['datetime'],'%d.%m.%Y  %H:%i');

        $mail->timestamp = $_SERVER['REQUEST_TIME'];


        $id = R::store($mail);

        mail('christofmueller@yahoo.de', 'Nachricht vom PCAMonitor', $mail->text);

        if ($id > 0) {
            $mail->id = $id;
            $mail->status = "OK";
            //echo 'SELECT * FROM event where userid = ' . $loggedInUser->user_id;
            R::store($mail);

            $data  = R::getAll('SELECT * FROM mail where userid = ' . $loggedInUser->user_id . ' order by id desc ');
            if ($data < 0 )
                $result = array(
                    "status" => -4,    // DB Error
                    "data"  => $data
                );
            else
                $result = array(
                    "status" => 0,    // OK
                    "data"  => $data
                );

        } else
        {
            $result = array(
                "status" => -5,    // Mail Error
                "data"  => $data
            );
        }

    } else {
        $result = [
            "status" => -6,
            "message" => "Unbekannter Request:" . $_SERVER['REQUEST_METHOD'],
        ];



    }
}
echo json_encode($result);
?>