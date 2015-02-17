<?php


require 'isloggedin.php';


// Check parameter
if (isset($_POST["json"]))
{

    $json = json_decode(stripslashes($_POST["json"]), true);
    $output = $json['data'];





    $eventid      =  $output[0]['eventid'];


    $sql = " DELETE FROM  anker WHERE userid = " . $loggedInUser->user_id . " AND eventid = " . $eventid  ;
    $result = R::exec( $sql );


    $sql = " INSERT INTO  anker ( userid, question , sortorder, eventid) select $loggedInUser->user_id, question, sortorder, " . $eventid . " from ankertemplate ";

    $result = R::exec( $sql );

    if ($result > 0)
        echo json_encode(R::getAll( 'SELECT * FROM survey where eventid = ' . $eventid .' and userid = ' . $loggedInUser->user_id . ' order by id desc '));



}else {
    $result = [
        "error" => "Y",
        "message" => "Unbekannter Request:" . $_SERVER['REQUEST_METHOD'],
    ];


    echo json_encode($result);
}



?>