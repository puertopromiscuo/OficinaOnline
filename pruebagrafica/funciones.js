
window.onload = function(){
    
    document.getElementById('new-task').onkeypress = function(event){
        if(event.keyCode === 13){
            addTask(event.target.value);
            event.target.value = "";
         }
    };
};

function addTask(text){
    var task = APP_TASK.addTask(text);
    
    var li = document.createElement('li');
    li.id = task.getId();
    
    console.log(task.getId());
    
    var status = document.createElement('input');
    status.type = 'checkbox';
    status.onclick = function(){
        APP_TASK.completeTask(task.getId());
        console.log(task.getStatus());
    };
    if(task.getStatus() === false){
        console.log(task.getStatus());
    }else{
        console.log("Funciona");
    }
    li.appendChild(status);
    
    
    var text = document.createElement('input');
    text.type = 'text';
    text.value = task.getText();
    li.appendChild(text);
    
    var button = document.createElement('input');
    button.type = 'button';
    button.value = 'Delete';
    button.onclick = function(){
        task.delTask(task.getId());
    };
    li.appendChild(button);
    
    document.getElementById('task').appendChild(li);
}

/*function completeTask(id){
    APP_TASK.completeTask(id);
    var task = document.getElementById('task');
    var li = task.children[id];
}*/

