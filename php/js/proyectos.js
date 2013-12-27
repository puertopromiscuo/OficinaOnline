(function() {

        var proyectsUI = [];
        var cont = 1;
        var onoff = false;
        var btndes = false;
        var btndes2 = false;

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
                    
                    if(document.getElementById('inputProyectDate').value){
                        date = document.getElementById('inputProyectDate').value;
                    }else{
                        date = "Sin asignar ";
                    }
                    console.log(date);
                    PRO_APP.addProyect(title,document.getElementById('inputProyectDate').value);
                    addProject(title,date);
                    
            };

            /**************************************ALERT************************************************/
            document.getElementById('closebtn').onclick = function(event) {
                  document.getElementById("alert-maxprojects").className = "alert alert-warning alert-dismissable sr-only";
            };
            
            /************************************FECHA SUBMENU***********************************************/
            document.getElementById('submenu').onclick = function(event) {
                  displayMenu();
            };
            /*document.getElementById('submenu2').onclick = function(event) {
                  displayMenu();
                  console.log ("Desplegar/plegar menu movil");
            };*/

            /**********************************DESPLEGAR SUBMENU*********************************************/
            document.getElementById('btn-des').onclick = function(event) {
                  desButton();
            };
            document.getElementById('btn-des-profile').onclick = function(event) {
                  desButtonProfile();
            };
            /**********************************CERRAR TAB********************************************************/
            /*document.getElementById('close-environment').onclick = function(event) {
                  emptyenvioronment();
                  closetab();
            };*/
            /********************************DESPLEGAR REGISTRO****************************************************/
            /*document.getElementById('register').onclick = function(event) {
                document.getElementById('desRegister2').className = "";
                document.getElementById('desRegister').className = "";
            }*/
            /************************************FECHA SUBMENU***********************************************/
            document.getElementById('tab-proyects-0').onclick = function(event) {
                showTab('tab-proyects-0');
                showPresentation();
            };
            document.getElementById('tab-proyects-1').onclick = function(event) {
                showTab('tab-proyects-1');
                showNoPresentation();
            };
            document.getElementById('tab-proyects-2').onclick = function(event) {
                showTab('tab-proyects-2');
                showNoPresentation();
            };
            document.getElementById('tab-proyects-3').onclick = function(event) {
                showTab('tab-proyects-3');
                showNoPresentation();
            };
            
            /*************************************TASK*******************************************/
             document.getElementById('newtask').onkeypress = function(event) {
                        //var text = event.target.value.trim();
                        if (event.keyCode === 13 /*&& text !== ""*/) {
                                console.log("añadir task");
                                addTask();
                        }
                };
        
    });
        
        function addProject(title,date){
           if(cont <= 3){
            var a = document.createElement('a');
            document.getElementById('tab-proyects').getElementsByClassName('active')[0].className = "";
            document.getElementById('list-proyects').getElementsByClassName('active')[0].className = "list-group-item";
            
            a.href= "#";
            
            a.innerHTML = title;
            
            a.className = "list-group-item active";
            document.getElementById('list-proyects').insertBefore(a,document.getElementById('new')+1);
            
            /*var b = document.createElement('a');
            var li = document.createElement('li');
            */
            var b = document.getElementById('tab-proyects-'+cont).firstChild;
            b.href= "#";
            b.innerHTML = title; 
            
            document.getElementById('tab-proyects-'+cont).className = "active";
            
            document.getElementById('tab-proyects-'+cont).appendChild(b);
            cont++;
            emptyenvioronment(date);
            if(cont === 4){
                document.getElementById('newproyects').setAttribute('data-toggle',"null");
            }
           }else{
               document.getElementById("alert-maxprojects").className = "alert alert-warning alert-dismissable";
           }  
        }
        
        function emptyenvioronment(date){    
            document.getElementById('environment').className = "sr-only";
            document.getElementById('intoproyects').className = "";
            document.getElementById('dateProyects').innerHTML = "Fin: " + date;//Falta enlace para modificar el proycto
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
        
        function desButtonProfile(){
            btndes2 = !btndes2;
            if(btndes2){
                document.getElementById('btn-des-profile').className = "dropdown open";
            }else{
                document.getElementById('btn-des-profile').className = "dropdown";
            }
        }
        /*function closetab(){
            if(!APP_PROJECTS.getID){
                //abrir la pestaña siguiente
            }
        }*/
        function showTab(tab){
                document.getElementById('tab-proyects').getElementsByClassName('active')[0].className = "";
                document.getElementById('tab-proyects').insertBefore(document.getElementById(tab),document.getElementById('tab-proyects').firstChild);
                document.getElementById(tab).className = "active";
        }
        
        function showPresentation(){
            document.getElementById("intoproyects").className = "sr-only";
            document.getElementById("environment").className = "container";
        }
        
        function showNoPresentation(){
            document.getElementById("intoproyects").className = "";
            document.getElementById("environment").className = "sr-only";
        }
        
        function addTask(){
            var text = document.getElementById('newtask').value;
            var task = TASKS_APP.addTask(text);
            var drag = document.createElement('div');
            drag.id = "drager";
            
            var li_task = document.createElement('li');
            li_task.className = "list-group-item";
            li_task.id = "task_"+task.getId();
            
            
            var label_task = document.createElement('label');
            label_task.innerHTML = task.getText();
            label_task.draggable= "true";
            
            var input_check_task = document.createElement('input');
            input_check_task.type = "checkbox";
            input_check_task.id = task.getId();
            input_check_task.className = 'toggle';
            input_check_task.onclick = function() {
                task.setCheck();
                render();
            };
            
            var button_task = document.createElement('button');
            button_task.className = "close";
            button_task.setAttribute("aria-hidden","true");
            button_task.innerHTML = "&times;";
            button_task.onclick = function(){
                
                delTask(task.getId());
                TASKS_APP.delTask(task.getId());
                render();
            };
            
            var input_task = document.createElement('input');
            input_task.className = "sr-only";
            
            label_task.appendChild(button_task);
            label_task.appendChild(input_check_task);
            li_task.appendChild(label_task);
            drag.appendChild(li_task);
            
            document.getElementById('list-tasks').appendChild(drag);
            
            render();
        }
        
        function render(){
            var array_tasks = this.TASKS_APP.getTasks();
            var num_tasks = TASKS_APP.numTasks();
            var i = 0;
            var check_task = 0;
            var uncheck_task = 0;
            
            /*for(i ; i < num_tasks; i++){
                if(TASKS_APP.getTask(i).getCheck()){
                    uncheck_task++;
                }else{
                    check_task++;
                }*/
            for(var ele in array_tasks){
                
                if(this.TASKS_APP.getTask(ele).getCheck()){
                    uncheck_task++;
                }else{
                    check_task++;
                }
            }
            
            
            if(num_tasks === 0){
                var porcentaje = 100;
            }else{
                var porcentaje = (100 * uncheck_task)/num_tasks;//Nan
                porcentaje = Math.round(porcentaje * 100) / 100; 
            }
            
            
            document.getElementById("progress_bar").style.width = porcentaje+"%";
            document.getElementById("completed").innerHTML = porcentaje+"% completado";
            
        }
        
        function delTask(id_task){//Errror
            var tsk = TASKS_APP.getTask(id_task);
            document.getElementById('list-tasks').removeChild(document.getElementById("task_"+tsk.getId()).parentNode);
            render();
        }
        
      
})();