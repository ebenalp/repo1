<?php

require_once ("../../userfrosting/models/config.php");
require_once ('../../dbconfig.php');

require_once ('event_documents_create.php');



$data = [];


$result = array(
    "status" => 0  //OK
);


if ( !is_null($loggedInUser)) {

// Check parameter
    if (isset($_POST["json"])) {

        $json = json_decode(stripslashes($_POST["json"]), true);
        $output = $json['data'];

        $event = R::dispense('event');


        $event->userid = $loggedInUser->user_id;

        $event->id = $output[0]['eventid'];
        $event->title = $output[0]['title'];
        $event->description = $output[0]['description'];

        //$event->datecreated =  STR_TO_DATE( $output[0]['datetime'],'%d.%m.%Y  %H:%i');
        $event->date = $output[0]['datetime'];
        $event->timestamp = strtotime($output[0]['datetime']);
        $event->type = $output[0]['eventtype'];
        $event->survey = $output[0]['survey'];
        $event->karriereanker = $output[0]['karriereanker'];
        $event->anamnese = $output[0]['anamnese'];
        $event->generalinformation = $output[0]['generalinformation'];
        $event->others = $output[0]['others'];


        $id = R::store($event);

        if ($id > 0) {
            $event->id = $id;
            $event->url = '#newEventDialog?id=' . $id;
            //echo 'SELECT * FROM event where userid = ' . $loggedInUser->user_id;
            R::store($event);

            create_event_documents($event);

            $data = R::getAll('SELECT * FROM event where userid = ' . $loggedInUser->user_id . " order by timestamp asc ");
            if ($data < 0)
                $result = array(
                    "status" => -4,    // DB Error
                    "data"  => $data,
                    "message" => "Termin konnten nicht gespeichert werden."
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
                "message" => "Termin konnten nicht gespeichert werden."
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