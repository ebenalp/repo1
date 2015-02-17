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
// Check parameter
    if (isset($_POST["json"])) {

        $json = json_decode(stripslashes($_POST["json"]), true);

        $output = $json['metadata'];

        $obj = $output[0]['object'];

        $method = $output[0]['method'];
        $id = $output[0]['eventid'];

        $event = R::dispense('event');

        $event->id = $id;

        $rc = R::trash($event);

        if ($rc < 0 )
            $result = array(
                "status" => -4,    // DB Error
                "data"  => $data
            );
        else
            $result = array(
                "status" => 0,    // OK
                "data"  => $data
            );


        $data = R::getAll('SELECT * FROM event where userid = ' . $loggedInUser->user_id . ' order by timestamp ');

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
        $result = [
            "status" => -2,
            "data"   => [],
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