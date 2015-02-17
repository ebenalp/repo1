<?php

require_once ("../../userfrosting/models/config.php");
require_once ('../../dbconfig.php');
require_once ('../rb.php');
require_once ('classes/anker.php');
require_once ('classes/survey.php');
require_once ('classes/anamnese.php');
R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB",$DATADBUSER,$DATADBPW);

$data = [];

function create_event_documents($event)
{
    //Kariere Anker;

    if ( $event->karriereanker)
    {
       create_anker($event->id,$event->userid);
    }
    else
    {
        delete_anker($event->id,$event->userid);
    }

    // Survey;

    if ( $event->survey)
    {
        create_survey($event->id,$event->userid);
    }
    else
    {
        delete_survey($event->id,$event->userid);
    }
    //Kariere Survey;

    if ( $event->anamnese)
    {
        create_anamnese($event->userid);
    }
    else
    {
        delete_anamnese($event->userid);
    }

    //echo $event->karriereanker;
    //echo $event->anamnese;
    //echo $event->generalinformation;
    //echo $event->others;
}


?>

