(function() {

        var proyectsUI = [];
        var cont = 1;
        var onoff = false;
        var btndes = false;

        window.addEventListener('load', function() {
            
	    /***************************************AÑADIR******************************************/
            document.getElementById('newproyects').onclick = function(event) {
                if(cont > 3){
                     document.getElementById("alert-maxprojects").className = "alert alert-warning alert-dismissable alert-visible";
                        setTimeout (function () {
                            document.getElementById("alert-maxprojects").className = "alert alert-warning alert-hidden";
                        }, 4000);
                        setTimeout (function () {
                            document.getElementById("alert-maxprojects").className = "alert alert-warning alert-hidden sr-only";
                        }, 8000);
                }
            };
            
            document.getElementById('new').onclick = function(event) {
                    if(document.getElementById('inputProyectName').value){
                        title = document.getElementById('inputProyectName').value;
                    }else{
                        title = "Nuevo proyecto " + cont;
                    }
                    
                  
                    PRO_APP.addProyect(title,document.getElementById('inputProyectDate').value);
                    addProject(title);
                    console.log ("añadido");
            };

            /**************************************ALERT************************************************/
            document.getElementById('closebtn').onclick = function(event) {
                  document.getElementById("alert-maxprojects").className = "alert alert-warning alert-dismissable sr-only";
            };
            
            /************************************FECHA SUBMENU***********************************************/
            document.getElementById('submenu').onclick = function(event) {
                  displayMenu();
                  console.log ("Desplegar/plegar menu movil");
            };
            /*document.getElementById('submenu2').onclick = function(event) {
                  displayMenu();
                  console.log ("Desplegar/plegar menu movil");
            };*/

            /**********************************DESPLEGAR SUBMENU*********************************************/
            document.getElementById('btn-des').onclick = function(event) {
                  desButton();
            };

            /**********************************CERRAR TAB********************************************************/
            /*document.getElementById('close-environment').onclick = function(event) {
                  emptyenvioronment();
                  closetab();
            };*/
            
        
    });
        
        function addProject(title){
           if(cont <= 3){
            var a = document.createElement('a');
            document.getElementById('tab-proyects').getElementsByClassName('active')[0].className = "";
            document.getElementById('list-proyects').getElementsByClassName('active')[0].className = "list-group-item";
            
            a.href= "#";
            
            a.innerHTML = title;
            
            a.className = "list-group-item active";
            document.getElementById('list-proyects').insertBefore(a,document.getElementById('new')+1);
            
            var b = document.createElement('a');
            var li = document.createElement('li');
            b.href= "#";
            
            b.innerHTML = title; 
            
            li.className = "active";
            li.appendChild(b);
            document.getElementById('tab-proyects').insertBefore(li,document.getElementById('tab-proyects').firstChild);
            cont++;
            emptyenvioronment();
            if(cont === 4){
                document.getElementById('newproyects').setAttribute('data-toggle',"null");
            }
           }else{
               document.getElementById("alert-maxprojects").className = "alert alert-warning alert-dismissable";
           }  
        }
        
        function emptyenvioronment(){    
            document.getElementById('environment').innerHTML = "";
            document.getElementById('intoproyects').className = "";
            document.getElementById('dateProyects').innerHTML = "Fin: " + document.getElementById('inputProyectDate').value;
        }
        

        function displayMenu(){
            if(onoff){
                document.getElementById('arrow').className = "glyphicon glyphicon-chevron-right";
            }else{
                document.getElementById('arrow').className = "glyphicon glyphicon-chevron-left";
            }
            onoff = !onoff;
        }
        
        function desButton(){
            btndes = !btndes;
            if(btndes){
                document.getElementById('btn-des').className = "dropdown open";
            }else{
                document.getElementById('btn-des').className = "dropdown";
            }
        }
        
        /*function closetab(){
            if(!APP_PROJECTS.getID){
                //abrir la pestaña siguiente
            }
        }*/

})();