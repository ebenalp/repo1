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

    $json = stripslashes($_POST["json"]);

    $output = json_decode($json, true);
// Which object to work with
    $obj = $output['metadata'][0]['object'];
// Persistence Method, one of put, get, delete
    $method = $output['metadata'][0]['method'];
    $eventid = $output['metadata'][0]['eventid'];


//echo 'SELECT * FROM survey WHERE userid = ' .$loggedInUser->user_id . ' and eventid = ' . $id ;

    $data = R::getAll('SELECT * FROM survey WHERE userid = :userid and eventid = :eventid order by sortorder asc ',
        [':userid' => $loggedInUser->user_id,
            ':eventid' => $eventid
        ]
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