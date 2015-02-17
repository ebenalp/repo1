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




//echo 'SELECT * FROM survey WHERE userid = ' .$loggedInUser->user_id . ' and eventid = ' . $id ;

    $data = R::getAll('SELECT * FROM user WHERE userid = :userid',
        [':userid' => $loggedInUser->user_id

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
//echo json_encode(R::getAll( "SELECT * FROM event "));//where userid = " . $loggedInUser ));
echo json_encode($result);//where userid = " . $loggedInUser ));

?>