<?php

function isloggedin()
{

    require '../rb.php';
    require_once("../../dbconfig.php");
    require_once("../../userfrosting/models/config.php");


    if (!isUserLoggedIn()) {


        return -1;

    } else {

        try {

            R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB", $DATADBUSER, $DATADBPW);
            return 0;

        } catch (Exception $e) {

            return -1;
        }


    }
}
?>
 