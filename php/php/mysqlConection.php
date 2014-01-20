<?php
	include 'mysqlConfig.php';

	function getConnet(){
		$link = mysqli_connect(SERVIDOR,USUARIO,PASSWORD,MYBBDD) or die ("Error".mysqli_error($link));
		return $link;
	}
?>