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
        $output = $json['data'];

        $anamnese = R::dispense('anamnese');


        $anamnese->userid = $loggedInUser->user_id;

       // $anamnese->id= $output[0]['id'];
        $anamnese->id= $output[0]['id'];
        $anamnese->a1= $output[0]['a1'];

        $anamnese->a2= $output[0]['a2'];
        $anamnese->a3= $output[0]['a3'];
        $anamnese->a4= $output[0]['a4'];
        $anamnese->a6= $output[0]['a6'];
        $anamnese->a5= $output[0]['a5'];
        $anamnese->a7= $output[0]['a7'];
        $anamnese->a8= $output[0]['a8'];
        $anamnese->a9= $output[0]['a9'];
        $anamnese->a10= $output[0]['a10'];
        $anamnese->a11= $output[0]['a11'];
        $anamnese->a12= $output[0]['a12'];
        $anamnese->a13= $output[0]['a13'];
        $anamnese->a14= $output[0]['a14'];
        $anamnese->a15= $output[0]['a15'];
        $anamnese->a16= $output[0]['a16'];
        $anamnese->a17= $output[0]['a17'];
        $anamnese->a18= $output[0]['a18'];
        $anamnese->a19= $output[0]['a19'];
        $anamnese->a20= $output[0]['a20'];
        $anamnese->a21= $output[0]['a21'];
        $anamnese->a22= $output[0]['a22'];
        $anamnese->a23= $output[0]['a23'];
        $anamnese->a24= $output[0]['a24'];
        $anamnese->a25= $output[0]['a25'];
        $anamnese->a26= $output[0]['a26'];
        $anamnese->a27= $output[0]['a27'];
        $anamnese->a28= $output[0]['a28'];
        $anamnese->a29= $output[0]['a29'];
        $anamnese->a30= $output[0]['a30'];
        $anamnese->a31= $output[0]['a31'];
        $anamnese->a32= $output[0]['a32'];
        $anamnese->a33= $output[0]['a33'];
        $anamnese->a34= $output[0]['a34'];
        $anamnese->a35= $output[0]['a35'];
        $anamnese->a36= $output[0]['a36'];
        $anamnese->a37= $output[0]['a37'];
        $anamnese->a38= $output[0]['a38'];
        $anamnese->a39= $output[0]['a39'];
        $anamnese->a40= $output[0]['a40'];
        $anamnese->a41= $output[0]['a41'];
        $anamnese->a42= $output[0]['a42'];
        $anamnese->a43= $output[0]['a43'];
        $anamnese->a44= $output[0]['a44'];
        $anamnese->a45= $output[0]['a45'];
        $anamnese->a46= $output[0]['a46'];
        $anamnese->a47= $output[0]['a47'];
        $anamnese->a48= $output[0]['a48'];
        $anamnese->a49= $output[0]['a49'];
        $anamnese->a50= $output[0]['a50'];
        $anamnese->a51= $output[0]['a51'];
        $anamnese->a52= $output[0]['a52'];
        $anamnese->a53= $output[0]['a53'];
        $anamnese->a54= $output[0]['a54'];
        $anamnese->a55= $output[0]['a55'];
        $anamnese->a56= $output[0]['a56'];
        $anamnese->a57= $output[0]['a57'];
        $anamnese->a58= $output[0]['a58'];
        $anamnese->a59= $output[0]['a59'];
        $anamnese->a60= $output[0]['a60'];
        $anamnese->a61= $output[0]['a61'];
        $anamnese->a62= $output[0]['a62'];
        $anamnese->a63= $output[0]['a63'];
        $anamnese->a64= $output[0]['a64'];
        $anamnese->a65= $output[0]['a65'];
        $anamnese->a66= $output[0]['a66'];
        $anamnese->a67= $output[0]['a67'];
        $anamnese->a68= $output[0]['a68'];
        $anamnese->a69= $output[0]['a69'];
        $anamnese->a70= $output[0]['a70'];
        $anamnese->a71= $output[0]['a71'];
        $anamnese->a72= $output[0]['a72'];
        $anamnese->a73= $output[0]['a73'];
        $anamnese->a74= $output[0]['a74'];
        $anamnese->a75= $output[0]['a75'];
        $anamnese->a76= $output[0]['a76'];
        $anamnese->a77= $output[0]['a77'];
        $anamnese->a78= $output[0]['a78'];
        $anamnese->a79= $output[0]['a79'];
        $anamnese->a80= $output[0]['a80'];
        $anamnese->a81= $output[0]['a81'];
        $anamnese->a82= $output[0]['a82'];
        $anamnese->a83= $output[0]['a83'];
        $anamnese->a84= $output[0]['a84'];
        $anamnese->a85= $output[0]['a85'];
        $anamnese->datemodified =  R::isoDateTime();
        $anamnese->releasedate = $output[0]['releasedate'];



        $id = R::store($anamnese);


        if ($id > 0) {




            $data = R::getAll('SELECT * FROM anamnese  where id = ' . $id . ' and userid = ' . $loggedInUser->user_id  );

            if ($data < 0)
                $result = array(
                    "status" => -4,    // DB Error
                    "data"  => $data,
                    "message" => "Anamnese konnte nicht gespeichert werden."
                );
            else
                $result = array(
                    "status" => 0,    // DB Error
                    "data"  => $data
                );


        } else {
            $result = array(
                "status" => -4,    // DB Error
                "data"  => $data,
                "message" => "Anamnese konnte nicht gespeichert werden."
            );




        }

    } else {
        $result = [
            "status" => -1,
            "data"  => $data,
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