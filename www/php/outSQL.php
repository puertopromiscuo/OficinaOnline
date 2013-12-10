<?php

include("config.php");
mysql_connect(DDBB_HOST,DDBB_USER,DDBB_PASS) or die("Error de conexcion");
mysql_select_db(DDBB_NAME);
$select = mysql_query("SELECT * FROM users");
if(!$select){
	echo "error en la consulta";
}else{
	while($row = mysql_fetch_array($select)){
		echo $row['name']."<br>";
		echo $row['email']."<br>";
		echo $row['password']."<br>";
		echo $row['profile']."<br>";
		
	}
}

?>