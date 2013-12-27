var that = this;

var proyect1;
var proyect2;

QUnit.testStart(function() {
        that.PRO_APP.resetProyects();        
        proyect1 = that.PRO_APP.addProyect("proyecto1",new Date());
        proyect2 = that.PRO_APP.addProyect("proyecto2",new Date());
});

test("addProyect", function() {
		/*INCREMENTO ID*/        
        ok(proyect1.getId()===0, "ok");
        ok(proyect2.getId()===1, "ok");        
        /*ASIGNACION DE TITULO*/
        ok(proyect1.getTitle()==="proyecto1", "ok");
        /*CAMBIO DE TITULO*/
        proyect1.setTitle("modificado");        
        ok(proyect1.getTitle()==="modificado", "ok");
});

test("getProyect", function() {
		var proyecto = that.PRO_APP.getProyect(0);
		ok(proyecto.getTitle()==="proyecto1", "ok");
});

test("delProyect", function() {
		var borrado = that.PRO_APP.delProyect(0);
		ok(borrado.getTitle()==="proyecto1", "ok");
		ok(!that.PRO_APP.getProyect(0), "ok");
});

test("modProyect", function() {
		var borrado = that.PRO_APP.delProyect(0);
		ok(borrado.getTitle()==="proyecto1", "ok");
		ok(!that.PRO_APP.getProyect(0), "ok");
});
