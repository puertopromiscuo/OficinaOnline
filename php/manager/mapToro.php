<?php

require("../../lib/toro/toro.php");
require("mysqlFunctions.php");

header('Content-Type: application/json; charset=utf-8');

class InsertUser {
	function post(){
            insertUser($_POST['name'],$_POST['email'],$_POST['password']);
            echo "Usuario insertado";
	}
}

class LogUser{
  function post(){
    echo logUser($_POST['email'],$_POST['password']);
  }
}

Toro::serve(array(
    "/insertUser" => "InsertUser",
    "/logUser" => "LogUser"
));

?>
