<?php
    if(empty($_SESSION['name_user'])){
        $name = !empty($_REQUEST['user'])?$_REQUEST['user']: "user";
        $email = !empty($_REQUEST['email'])?$_REQUEST['email']:'';
        $password = !empty($_REQUEST['password'])?$_REQUEST['password']:'';
        $confirm_password = !empty($_REQUEST['confirm_password'])?$_REQUEST['confirm_password']:'';
        $_SESSION['name_user'] = $name;
    }
?>