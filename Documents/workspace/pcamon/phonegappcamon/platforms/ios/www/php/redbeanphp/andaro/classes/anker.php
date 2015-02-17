<?php

function create_anker($eventid,$userid)
{

$sql = " DELETE FROM  anker WHERE userid = " . $userid   ;
$result = R::exec( $sql );


$sql = " INSERT INTO  anker ( userid, question , sortorder  ) select $userid, question, sortorder  from ankertemplate ";

$result = R::exec( $sql );

    $sql = " DELETE FROM  ankerbestfit WHERE userid = " . $userid   ;
    $result = R::exec( $sql );


    $sql = " INSERT INTO  ankerbestfit ( userid, topratings   ) values ( ". $userid .", null  )";

    $result = R::exec( $sql );

}

function delete_anker($eventid,$userid)
{

    $sql = " DELETE FROM  anker WHERE userid = " . $userid   ;
    $result = R::exec( $sql );



}


function get_anker($userid)
{

    $sql = " SELECT * FROM  anker WHERE userid = " . $userid . " order by sortorder asc";

    $result = R::getAll( $sql );

    return $result;


}
function get_ankerbestfit($userid)
{

    $sql = " SELECT * FROM  ankerbestfit WHERE userid = " . $userid;

    $result = R::getAll( $sql );

    return $result;


}

?>