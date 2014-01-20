<?php
	//conexion como global
	require("mysqlConection.php");
	require("phpmailer.php");

	$db = getConnet();

	function getUserName($id){
		global $db;
		$query = "SELECT name FROM users WHERE id='$id'";
		$result = mysqli_query($db,$query);

		$row = mysqli_fetch_array($result);
		return $row['name'];

	}

	function insertUser($name,$email,$password){
		global $db;
		$query = "INSERT into users (name,email,password) values('$name','$email','$password')";
		$result = mysqli_query($db,$query);
		sendMail($email);
		return "Te has registrado correctamente, recibiras un email de confirmación";
	}

	function logUser($email,$password){
		global $db;
		$query = "SELECT name FROM users WHERE email='$email' and password='$password'";
		$result = mysqli_query($db,$query);
		$row = mysqli_fetch_array($result);
		return "Bienvenido, ".$row['name'];
	}
	//insertUser('test','test','test');
/*
	function deleteUser($id){
		global $db;
		$query = "DELETE from users WHERE id=$id";
		$result = mysqli_query($db,$query);
		//if($result) echo "Usuario borrado"; else echo "Error ".mysqli_error($db);//error al devolver false
		return mysqli_affected_rows($db);
	}
*/
	
?>