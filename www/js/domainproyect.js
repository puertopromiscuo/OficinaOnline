(function() {

        var root = this;
        var proyects = {};
        var id = 0;

        function addProyect(title/*,value*/,date) {
                var myId = id;
                var proyect = {
                        getId: function() {
                                return myId;
                            },
                        getTitle: function() {
                                return title;
                        },
                        setTitle: function(myTitle) {
                                title = myTitle;
                        },
                        getDateEnd: function(date){
                            if(!date){
                                date = "Sin asignar";
                            }
                            return date;
                        }
                };
                
                proyects[myId] = proyect;
                id++;

                return proyect;

        }

        function getProyect(id) {
                return proyects[id];
        }

        function delProyect(id) {
                var deleted = proyects[id];
                /*deleted.isDeleted = function() {
                        return true;
                };*/
                delete proyects[id];
                return deleted;
        }

        function modProyect(id, title) {
                proyects[id].setTitle(title);
                return proyects[id];
        }
        
        function getProyects() {
                return proyects;
        }
        

        if (!root.PRO_APP) {
                root.PRO_APP = {};
        }

        root.PRO_APP.addProyect = addProyect;
        root.PRO_APP.getProyect = getProyect;
        root.PRO_APP.delProyect = delProyect;
        root.PRO_APP.modProyect = modProyect;
        root.PRO_APP.getProyects = getProyects;
        
}).call(this);