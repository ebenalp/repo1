<?php

function create_survey($eventid,$userid)
{

    $sql = " DELETE FROM  survey WHERE eventid = " . $eventid .  " AND userid = " . $userid   ;
    $result = R::exec( $sql );


    $sql = " INSERT INTO  survey ( userid, eventid, question , sortorder  ) select $userid, $eventid, question, sortorder  from surveytemplate ";

    $result = R::exec( $sql );

}

function delete_survey($eventid,$userid)
{

    $sql = " DELETE FROM  survey WHERE userid = " . $userid  . " and eventid = " . $eventid ;
    $result = R::exec( $sql );



}

function get_survey($eventid,$userid)
{

    $sql = " SELECT * FROM  survey WHERE userid = " . $userid  . " and eventid = " . $eventid ;

    $result = R::exec( $sql );

    return $result;


}

?>