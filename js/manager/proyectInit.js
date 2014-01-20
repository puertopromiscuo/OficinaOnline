(function (){
	var root = this;

	$(document).ready(function(){
		//CREACION DE PROYECTOS
	   $('input#new-proyect')
	   	.on('keypress',PRO_APP.addProyectDOM);	
	   //DRAG AND DROP
	   $( "#list-proyects" ).sortable();
       $( "#list-proyects" ).disableSelection();   
	});  

	function addProyectDOM(){
		var text = $.trim($(this).val()); 
	    if(event.keyCode===13 && text!=''){    	
	    	proyect = PRO_APP.addProyect(text);
	    	var $item = PRO_APP.createItem(proyect);
	    	$('div#list-proyects').append($item);
	    	PRO_APP.renderItem($item);	    	
	    	$(this).val('');
	    }
	};
	function modProyectDOM($item){
		var $div = $item.find('div[name="proyect"]');
		var $input = $item.find('input[name="mod-proyect"]');
		var $span = $item.find('span[name="name-proyect"]');

		var text = $.trim($input.val());
		if(event.keyCode===13 && text!=''){ 
			var idProyect = $div.attr('id').substring(8);
			console.log(idProyect);
			var proyect = PRO_APP.modProyect(idProyect,text);
			$span.text(proyect.getTitle());
			$div.data('mode','read');
			PRO_APP.renderItem($item);
		}
	}

	function delProyectDOM($item){
		var $div = $item.find('div[name="proyect"]');
		var idProyect = $div.attr('id').substring(8);
		PRO_APP.delProyect(idProyect);
		$item.remove();
	}

	function renderContext(){
		$items = $('div#list-proyects a');
		$items.removeClass('active','slow')
			.data('mode','read');
		/*$items.each(function() {
			console.log($(this));
  			PRO_APP.renderItem($(this));
		});	*/

		var pattern = "#/proyect-";
    	var pos = window.location.hash.indexOf(pattern);
    	var proyectId = window.location.hash.substring(pos + pattern.length);
    	//console.log(filter);
	}	
	 

	 if (!root.PRO_APP) {
        root.PRO_APP = {};
    }
    root.PRO_APP.addProyectDOM = addProyectDOM;
    root.PRO_APP.modProyectDOM = modProyectDOM;    
    root.PRO_APP.delProyectDOM = delProyectDOM;    
    root.PRO_APP.renderContext = renderContext;    
    
}).call(this);
