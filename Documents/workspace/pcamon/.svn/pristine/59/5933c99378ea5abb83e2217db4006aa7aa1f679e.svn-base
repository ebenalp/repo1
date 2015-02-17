<?php


header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

require '../rb.php';
require_once ('../../dbconfig.php');
require_once("../../userfrosting/models/config.php");

if (!isUserLoggedIn()) {

    echo '{"status":"-2"}';

} else {

    try {
        R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB",$DATADBUSER,$DATADBPW);

        echo '{"status":"0","user":"' . $loggedInUser->displayname . '"}';
    } catch (Exception $e ) {

        echo '{"status":"-2","user":"'.$e->getMessage().'"}';
    }


}


?>
