<?php

function create_anamnese( $userid)
{

    $sql = " DELETE FROM  anamnese WHERE userid = " . $userid   ;
    $result = R::exec( $sql );


    $sql = " INSERT INTO  anamnese ( userid ) values (" . $userid ." )";

    $result = R::exec( $sql );

}

function delete_anamnese( $userid)
{

    $sql = " DELETE FROM  anamnese WHERE userid = " . $userid   ;
    $result = R::exec( $sql );



}
?>