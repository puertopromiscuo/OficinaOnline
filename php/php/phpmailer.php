<?php
    require ('mailer/PHPMailerAutoload.php'); 
    function sendMail($email){
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = "tsl";
        $mail->Host = " smtp.live.com";
        $mail->Port = 25;//25
        $mail->Username = "jeiker_navajas@hotmail.es";
        $mail->Password = "navajas_jeiker";
        $mail->From = "administracion@oficinaonline.com";
        $mail->FromName = "Contacto";
        $mail->AddAddress("jesusgraficap@gmail.com");
        $mail->IsHTML(true);
        $mail->SMTPDebug = 2;
        $mail->Subject = "Contacto";
        $mail->MsgHTML("<h1>CONTENIDO EMAIL</h1>");
     
        if(!$mail->Send())
        {
            echo 'ERROR'.$mail->ErrorInfo;
        }else{
             echo 'Message has been sent';
        }
    }/*
require 'mailer/PHPMailerAutoload.php';
    function sendMail($email){
    $mail = new PHPMailer;

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.gmail.com';                       // Specify main and backup server
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'puertopromiscuo@gmail.com';        // SMTP username
    $mail->Password = 'jepama13';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

    $mail->From = 'puertopromiscuo@gmail.com';
    $mail->FromName = 'Mailer';
    $mail->addAddress($email, 'Usuario');  // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo('puertopromiscuo@gmail.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');

    $mail->WordWrap = 50;                                 // Set word wrap to 50 characters
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if(!$mail->send()) {
       echo 'Message could not be sent.';
       echo 'Mailer Error: ' . $mail->ErrorInfo;
       exit;
    }

    echo 'Message has been sent';
}*/
?>