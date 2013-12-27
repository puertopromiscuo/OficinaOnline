(function() {
    var root = this;
    var listProyects = {};
    var id = 0;                

    function resetProyects(){
        listProyects ={};
        id=0;  
    }    

    function addProyect(title,limitDate) {
        var myId = id;   
        var members = [];
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
            getLimitDate: function(){                                                        
                return limitDate;
            }
        };                
        listProyects[myId] = proyect;
        id++;
        return proyect;
    }

    function getProyect(id) {
        return listProyects[id];
    }

    function delProyect(id) {
        var deleted = listProyects[id];                
        delete listProyects[id];
        return deleted;
    }
    
    function getProyects() {
        return listProyects;
    }
    

    if (!root.PRO_APP) {
        root.PRO_APP = {};
    }

    root.PRO_APP.resetProyects = resetProyects;
    root.PRO_APP.addProyect = addProyect;
    root.PRO_APP.getProyect = getProyect;
    root.PRO_APP.delProyect = delProyect;
    root.PRO_APP.modProyect = modProyect;
    root.PRO_APP.getProyects = getProyects;
    
}).call(this);
