var dragSrcEl = null;
var cols = document.querySelectorAll('#drap .col-lg-2');

//guardamos el contenido que queremos cambiar para la transferencia al dejar de arrastrar
function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';  //efecto al mover

  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');//agregamos borde rojo en el estilo css
}

function handleDragLeave(e) {
  this.classList.remove('over'); //eliminamos borde rojo en el estilo css
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation(); //evitamos abrir contenido en otra pagina al soltar
  }
	//hacemos el intercambio de contenido html de el elemento origne y destino 
	if (dragSrcEl != this) {
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
		this.classList.remove('over');
	}

  return false;
}

function handleDragEnd(e) {
  [].forEach.call(cols, function (col) {
    col.classList.remove('over');//eliminamos el borde rojo de todas las columnas
  });
}

//agregamos todos los eventos anteriores a cada columna mediante un ciclo
[].forEach.call(cols, function(col) {
   col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


