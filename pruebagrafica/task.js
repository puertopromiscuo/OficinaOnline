(function() {
  
  var root = this;
  var list = {};
  var nTasks = 0;
  var id = 0;
  
  function reset(){
      list = {};
      nTasks = 0;
      id = 0;
  }

  function addTask(text){
    var status = true;
    var task = {
      getId:(function(myId){
        return function(){
          return myId;
        };
      }(id)),
      getText: function(){
            return text;
      },
      setText: function(myText){
          text = myText;
      },
      getStatus: function(){
        return status;
      },
      setStatus: function(myStatus){
        if(myStatus !== true && myStatus !== false){
          throw "Invalid Status value";
        }else{
          status = myStatus;
        }
      },
        order:id
    };
    
    list[id]=task;
    id++;
    nTasks++;

    return task;
  }
  
  function getId(){
    return root.id;
  }
  
  function getTask(id){
    return list[id];
  }

  function getNtask(){
    return nTasks;
  }
 
  function delTask(id) {
    var deleted = list[id];
    delete list[id];
    nTasks--;
    return deleted;
  }

  function updateTask(id,text){
   list[id].text = text;
  return list[id];
   }
  
  function completeTask(id){
    list[id].setStatus(!list[id].setStatus);
    return list[id];
  }

  function completeAll(){
    var prop;
    for(prop in list){
      completeTask(prop);
    }
  }

  function reorderTask(id,order){
    list[id].order = order;
    if(id >= order){ 
      var i = id-1;
      for(i;i>=0;i--){
        list[i].order = i+1;
      }
    }else{
      var j = order+1;
      for(j;j<list.length;j++){
        list[j].order = order-1;
      }
    }
      return list[id];
  }
    
  root.APP_TASK = {
    addTask:addTask,
    getId:getId,
    getTask:getTask,
    getNtask:getNtask,
    delTask:delTask,
    updateTask:updateTask,
    completeTask:completeTask,
    completeAll:completeAll,
    reorderTask:reorderTask,
    reset:reset
  };
  
}).call(this);


