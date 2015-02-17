<?php


require_once("../../userfrosting/models/config.php");
require_once('../../dbconfig.php');
require_once('../rb.php');
require_once('classes/anker.php');

R::setup("mysql:host=$DATADBSERVER;dbname=$DATADB", $DATADBUSER, $DATADBPW);

$data = [];


$result = array(
    "status" => 0  //OK
);


if (!is_null($loggedInUser)) {
// Check parameter
    if (isset($_POST["json"])) {

        $json = json_decode(stripslashes($_POST["json"]), true);
        $eintraege = $json['data'];

        //echo var_dump($output);

        $bestfit =  json_encode($json['bestfit']);


        //$eintraege = $output[data];

        // Loop through json values and write to db, Only if data was send

        foreach ($eintraege as $key => $value) {


            // Write eintrage


            // echo $value[$key][eintrag];
            $rating = trim($eintraege[$key][rating]);
            $id = trim($eintraege[$key][id]);


            // sql query for INSERT INTO users
            $sql = "update anker set rating = " . $rating . " where id  = " . $id . " and  userid = " . $loggedInUser->user_id ;

            $data = R::exec($sql);

            if ($data < 0 )
                $result = array(
                    "status" => -4,    // DB Error
                    "data"  => $data
                );
            else {



                    $result = array(
                        "status"  => 0,    // OK
                        "data"    => get_anker($loggedInUser->user_id)

                    );

            }
        }



    } else {
        $result = [
            "status" => -6,
            "data" => $data,
            "message" => "Unbekannter Request:" . $_SERVER['REQUEST_METHOD'],
        ];


    }
} else {
    $result = array(
        "status" => -2,    // Not logged in
        "data" => $data
    );
}

// If everything ok - udate bestfit
if ($result["status"] == 0) {

    $sql = "update ankerbestfit set topratings = '" . $bestfit . "' where   userid = " . $loggedInUser->user_id;

    $data = R::exec($sql);

    if ($data < 0)
        $result = array(
            "status" => -4,    // DB Error
            "data" => $data
        );
    else {


        $result["bestfit"] = get_ankerbestfit($loggedInUser->user_id);


    }
}

echo json_encode($result);



?>