<?php

require("../librerias/toro/toro.php");
require("mysqlFunctions.php");

header('Content-Type: application/json; charset=utf-8');

class UserSimple {
    function get($name) {
      echo getUser($name);
    }
}

class GetUserName {
    function get($id) {
      echo getUserName($id);
    }
}

class DeleteUser {
    function get($id) {
      echo deleteUser($id);
    }
}

class InsertUser {
	function post(){
    echo insertUser($_POST['name'],$_POST['email'],$_POST['password']);
	}
}

class LogUser{
  function post(){
    echo logUser($_POST['email'],$_POST['password']);
  }
}

Toro::serve(array(
	"/" => "User",   
    "/:number" => "GetUserName",
    "/insertUser" => "InsertUser",
    "/logUser" => "LogUser"
    /*"/deleteUser/:number" => "DeleteUser"*/
    

));

?>
