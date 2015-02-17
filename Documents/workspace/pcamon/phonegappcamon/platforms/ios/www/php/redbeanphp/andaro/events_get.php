<?php

require_once ("../../userfrosting/models/config.php");
require_once ('../../dbconfig.php');
require_once ('../rb.php');


R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB",$DATADBUSER,$DATADBPW);

$data = [];


$result = array(
    "status" => 0  //OK
);

// echo var_dump($loggedInUser);

if ( !is_null($loggedInUser)) {

    $group = fetchUserPrimaryGroup($loggedInUser->user_id);

    if ($group < 0 )
        $result = array(
            "status" => -4,    // DB Error
            "data"  => $data
        );


    if ($group["name"] == 'coach') {
        $data = R::getAll('SELECT * FROM event ' . ' order by timestamp ');
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

    } else {
        $data = R::getAll('SELECT * FROM event WHERE userid = :userid ' . ' order by timestamp ',
            [':userid' => $loggedInUser->user_id]
        );

        if ($data < 0 )
            $result = array(
                "status" => -4,   // DB Error
                "data"  => $data
            );
        else
            $result = array(
                "status" => 0,    // OK
                "data"  => $data
            );


    }

}
else
{
    $result = array(
        "status" => -2,    // Not logged in
        "data"  => $data
    );
}

//echo "1" . var_dump($result);
//echo json_encode(R::getAll( "SELECT * FROM event "));//where userid = " . $loggedInUser ));
echo json_encode($result);//where userid = " . $loggedInUser ));

?>