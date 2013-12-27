(function() {

        var root = this;
        var tasks = {};
        var id = 0;
        var ntask = 0;

        function addTask(text) {
                var myId = id;
                var state = false;
                var task = {
                        getId: function() {
                                return myId;
                        },
                        getText: function() {
                                return text;
                        },
                        setText: function(mytext) {
                                text = mytext;
                        },
                        getCheck: function (){
                            return state;
                        },
                        setCheck: function() {
                            state = !state;
                        }
                };
                
                tasks[myId] = task;
                id++;
                ntask++;

                return task;
        }

        function getTask(id) {
                return tasks[id];
        }

        function delTask(id) {
                var deleted = tasks[id];
                delete tasks[id];
                ntask--;
                return deleted;
        }

        function modTask(id, text) {
                tasks[id].setText(text);
                return tasks[id];
        }
        
        function getTasks() {
                return tasks;
        }
        
        function numTasks() {
                return ntask;
        }
        
        function checkTask() {
                setCheck();
        }
        
        if (!root.TASKS_APP) {
                root.TASKS_APP = {};
        }

        root.TASKS_APP.addTask = addTask;
        root.TASKS_APP.getTask = getTask;
        root.TASKS_APP.delTask = delTask;
        root.TASKS_APP.modTask = modTask;
        root.TASKS_APP.getTasks = getTasks;
        root.TASKS_APP.numTasks = numTasks;
        root.TASKS_APP.checkTask = checkTask;
        
}).call(this);