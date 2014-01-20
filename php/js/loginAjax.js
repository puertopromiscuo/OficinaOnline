$(function() {
    var register = $('#regLog');
     $('#log-send').click(function() {
      logSend();
     });
  	
    $('#reg-send').click(function() {
        regSend();
    });

    








    
    function regSend(){
      $.ajax({
        type: 'POST',
        url: 'php/maptoro/insertUser',
        dataType: 'text',
        data: { 
                name: register.find('input[name = name]').val(), 
                email: register.find('input[name = email]').val(), 
                password: register.find('input[name = password]').val() }
      }).done(function(data) {
        $('#result').html(data);
      }).fail(function() {
        console.log("error", arguments);
      });
    }

    function logSend(){
      $.ajax({
        type: 'POST',
        url: 'php/maptoro/logUser',
        dataType: 'text',
        data: { 
                email: register.find('input[name = email]').val(),
                password: register.find('input[name = password]').val() }
      }).done(function(data) {
        $('#result').html(data);
      }).fail(function() {
        console.log("error", arguments);
      });
    }
   
  });