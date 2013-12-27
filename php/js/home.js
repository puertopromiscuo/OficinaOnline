(function() {
    
        var btndes = false;
        var btndes2 = false;

        window.addEventListener('load', function() {
           /**********************************DESPLEGAR SUBMENU*********************************************/
            document.getElementById('btn-des').onclick = function(event) {
                  desButton();
            };
            /********************************DESPLEGAR REGISTRO****************************************************/
            /*document.getElementById('register').onclick = function(event) {
                document.getElementById('desRegister2').className = "";
                document.getElementById('desRegister').className = "";
            }*/
            document.getElementById('drager').onclick = function(event) {
                  desContent();
            };
    });
        
        function desButton(){
            btndes = !btndes;
            if(btndes){
                document.getElementById('btn-des').className = "dropdown open";
            }else{
                document.getElementById('btn-des').className = "dropdown";
            }
        }
        
        function desContent(){
            btndes2 = !btndes2;
            if(btndes2){
            document.getElementById('content-icon').className = "col-xs-10 col-sm-6 col-lg-6 col-lg-offset-0 col-sm-offset-0 col-xs-offset-1 blackmiddle radius";
            document.getElementById('form').className = "col-xs-10 col-sm-4 col-lg-4 col-lg-offset-2 col-sm-offset-2 col-xs-offset-1 blackmiddle radius";
            }else{
            document.getElementById('content-icon').className = "hide";
            document.getElementById('form').className = "col-xs-10 col-sm-5 col-lg-4 col-lg-offset-8 col-sm-offset-8 col-xs-offset-1 blackmiddle radius";
                
            }
        }
              
})();