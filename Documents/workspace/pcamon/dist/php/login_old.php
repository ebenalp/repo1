<?php
function sql_conn(){
    $sql_host = "127.0.0.1";
    $sql_user = "web87-coach";
    $sql_pass = "falter22";
    $sql_name = "web87-coach";
    $sql_conn = new mysqli($sql_host, $sql_user, $sql_pass, $sql_name);
    if ($sql_conn->connect_errno) error_log ("Failed to connect to MySQL: (" . $sql_conn->connect_errno . ") " . $sql_conn->connect_error);
	$sql_conn -> query("set names utf8");
    return $sql_conn;
}
?>