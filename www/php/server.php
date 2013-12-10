<?php
	include("02_config.php");
	$name = !empty($_REQUEST['name'])?$_REQUEST['name']:'';
	$email = !empty($_REQUEST['email'])?$_REQUEST['email']:'';
	$password = !empty($_REQUEST['password'])?$_REQUEST['password']:'';
	$confirm_password = !empty($_REQUEST['confirm_password'])?$_REQUEST['confirm_password']:'';

	if(!$name){
		echo "nombre no definido";
	}elseif (!$email) {
		echo "email no definido";
	}elseif (!$password) {
		echo "contraseña no definida";
	}elseif (!$confirm_password) {
		echo "repetir contraseña no definida";
	}elseif ($confirm_password !== $password) {
		echo "las contraseñas no coinciden";
	}else{
		//conectar
		mysql_connect(DDBB_HOST,DDBB_USER,DDBB_PASS) or die("Error de conexcion");
		//seleccionar base de datos
		mysql_select_db(DDBB_NAME);
		//insert
		mysql_query("INSERT INTO users(name,email,password,profile) values('$name','$name','$password','admin')");
		
		//contar modificaciones
		$registered = mysql_affected_rows();
		echo "$registered was inserted";
	}
	
	
?>