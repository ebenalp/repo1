<?php

function create_userdevice($userid, $devicetoken)
{

    $sql = " DELETE FROM  userdevices WHERE  userid = " . $userid . " AND devicetoken = '" . $devicetoken . "'"  ;
    $result = R::exec( $sql );



    $sql = " INSERT INTO  userdevices ( userid, devicetoken, datecreated   ) values ( " . $userid . ", '" . $devicetoken . "', sysdate() )";

    $result = R::exec( $sql );

    return $result;


}

function delete_userdevice( $userid, $devicetoken)
{

    $sql = " DELETE FROM  userdevices WHERE userid = " . $userid  . " and devicetoken = '" . $devicetoken . "'" ;
    $result = R::exec( $sql );



}

function get_userdevices($userid)
{

    $sql = " SELECT * FROM  userdevices WHERE userid = " . $userid   ;

    $result = R::exec( $sql );

    return $result;


}

?>