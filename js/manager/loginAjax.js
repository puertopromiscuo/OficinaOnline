$(function() {
    var register = $('#register-content');
     $('#login-submit').click(function() {
      logSend();
     });
  	
    $('#register-submit').click(function() {
        regSend();
    });


    /*FUNCIONES*/
    function regSend(){
      $.ajax({
        type: 'POST',
        url: 'php/manager/mapToro/insertUser',
        dataType: 'text',
        data: { 
                name: register.find('input[name = user-name]').val(), 
                email: register.find('input[name = user-email]').val(), 
                password: register.find('input[name = user-password]').val() }
      }).done(function(data) {
        $('#error-form').html(data);
      }).fail(function() {
        console.log("error", arguments);
      });
    }

    function logSend(){
      $.ajax({
        type: 'POST',
        url: 'php/manager/maptoro/logUser',
        dataType: 'text',
        data: { 
                email: register.find('input[name = user-email]').val(),
                password: register.find('input[name = user-password]').val() }
      }).done(function(data) {
        $('#error-form').html(data);
      }).fail(function() {
        console.log("error", arguments);
      });
    }
   
  });