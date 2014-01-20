$(document).ready(function(){		
    $('button#login-submit').on('click',function(){
       var result = invalidForm($(this));
       if(result){
           $('#error-form').removeClass('hidden').text(result);
       }else{
           $('#error-form').addClass('hidden');
       }
    });
    $('button#register-submit').on('click',function(){
      var result = invalidForm($(this));
       if(result){
           $('#error-form').removeClass('hidden').text(result);
       }else{
           $('#error-form').addClass('hidden');
       }
    });
});  
function invalidForm(button){    
    var $name = button.parent().find('input[name="user-name"]');
    var $email = button.parent().find('input[name="user-email"]');
    var $password = button.parent().find('input[name="user-password"]');
    
    
    var nameRegex = /^[a-z0-9_-]{5,20}$/;
    var emailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
    var passwordRegex = /^[a-zA-Z0-9_-]{5,20}$/;
    
    //NOMBRE
    if($name.length){
        if(isEmpty($name)){
            return "Nombre obligatorio";
        }else if(!$name.val().match(nameRegex)){
            return "Nombre invalido (5-20) caracteres";
        }        
    }   
    //EMAIL
    if(isEmpty($email)){
        return "Email obligatorio";
    }else if(!$email.val().match(emailRegex)){
        return "Email invalido";
    }
    //CONTRASEÑA
    if(isEmpty($password)){
        return "Constraseña obligatoria";
    }else if(!$password.val().match(passwordRegex)){
        return "Contraseña invalida (5-20) caracteres";
    }    
    
    return false;
}
function isEmpty($fld){
    if(!$fld.val()){
        return true;
    }
    return false;
}

