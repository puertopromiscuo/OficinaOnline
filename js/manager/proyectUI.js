(function (){
	var root = this;
	
	
	function createItem(proyect){
		/*CREACION*/		
		var $item = $('<a href="#/proyect-'+proyect.getId()+'" name="item" class="list-group-item">');
			$item.on('dblclick',function(){	
				PRO_APP.editItem($item);							
			});			
			$item.on('click',function(){										
				PRO_APP.renderContext();
				$(this).addClass('active');				
			});
		
		var $div = $('<div name="proyect" id="proyect-'+proyect.getId()+'"  data-mode="read" class="row">');
			$item.append($div);

		var $divIcon = $('<div class="col-sm-1">');
		var $icon = $('<span name="icon" class="glyphicon glyphicon-book">')
			$div.append($divIcon)
			$divIcon.append($icon);

		var $divSpan = $('<div class="col-sm-8">');
		var $span = $('<span name="name-proyect">'+proyect.getTitle()+'</span>');
			$div.append($divSpan)
			$divSpan.append($span);

		var $divBadge = $('<div class="col-sm-1">');
		var $badge = $('<span name="count-tasks"class="badge">0<span>');
			$div.append($divBadge)
			$divBadge.append($badge);
			
		var $divInput = $('<div class="col-sm-8">');		
		var $input = $('<input type="text" name="mod-proyect" class="form-control">');			
			$input.on('keypress',function(){
				PRO_APP.modProyectDOM($item);
			});			
			$div.append($divInput)
			$divInput.append($input);		

		var $divButton = $('<div class="col-sm-2">');
		var $button = $('<button name="del-proyect"class="glyphicon glyphicon-remove btn btn-danger"> </button>');
			$button.on('click',function(){
				PRO_APP.delProyectDOM($item);
			});		
			$div.append($divButton)
			$divButton.append($button);

		return $item;				
	};

	function editItem($item){
		var $div = $item.find('div[name="proyect"]');
		var $input = $item.find('input[name="mod-proyect"]');
		var $span = $item.find('span[name="name-proyect"]');

		$div.data('mode','edit');
		$input.val($span.text()); 	
		PRO_APP.renderItem($item);
		$input.focus();	
	}


	function renderItem($item){			
		var $div = $item.find('div[name="proyect"]');
		var $input = $item.find('input[name="mod-proyect"]');
		var $span = $item.find('span[name="name-proyect"]');;
		var $icon = $item.find('span[name="icon"]');;
		var $button = $item.find('button[name="del-proyect"]');
		var $badge = $item.find('span[name="count-tasks"]');;
		
		if($div.data('mode')==='read'){			
			$input.addClass('hidden').removeClass('view');
			$span.addClass('view').removeClass('hidden');
			$icon.addClass('view').removeClass('hidden');
			$button.addClass('hidden').removeClass('view');
			$badge.addClass('view').removeClass('hidden');			
		}else if($div.data('mode')==='edit'){			
			$input.addClass('view').removeClass('hidden');
			$span.addClass('hidden').removeClass('view');
			$icon.addClass('hidden').removeClass('view');
			$button.addClass('view').removeClass('hidden');	
			$badge.addClass('hidden').removeClass('view');

		}		
		return $item;
	}
	 

	 if (!root.PRO_APP) {
        root.PRO_APP = {};
    }
    root.PRO_APP.createItem = createItem;
    root.PRO_APP.editItem = editItem;
    root.PRO_APP.renderItem = renderItem; 
    
}).call(this);
