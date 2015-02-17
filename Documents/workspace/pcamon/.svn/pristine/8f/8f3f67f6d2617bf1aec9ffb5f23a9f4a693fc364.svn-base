<?php
require_once ("../../userfrosting/models/config.php");
require_once ('../../dbconfig.php');
require_once ('../rb.php');


R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB",$DATADBUSER,$DATADBPW);

$result = [];
if ( !is_null($loggedInUser)) {


    $data = R::getAll('SELECT * FROM event WHERE userid = :userid and id IN (SELECT eventid FROM survey where userid = :userid ); ',
        [':userid' => $loggedInUser->user_id]
    );
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

//echo json_encode(R::getAll( "SELECT * FROM event "));//where userid = " . $loggedInUser ));
    //where userid = " . $loggedInUser ));
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