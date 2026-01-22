function dragStart(event) {
  event.dataTransfer.setData('text', event.target.id);
  //Guardamos el id del elemento cargado para usarlo después en drop
}

function dragging(event) {
  var uno = document.getElementById('uno');
  uno.style.opacity = '0.5';
  //PARA CAMBIAR OPACIDAD ES CON ELEMENT.STYLE
}

function allowDrop(event) {
  event.preventDefault();
  document.getElementById('uno').style.backgroundColor = 'red';
}

function drop(event) {
  event.preventDefault();
  // Recuperamos el dato del elemento arrastrado
  const data = event.dataTransfer.getData('text');

  // Insertamos el elemento dentro del destino
  event.target.appendChild(document.getElementById(data));
  // Ocultamos el elemento arrastrado (ya está dentro del destino)
  document.getElementById('uno').hidden = true;
  // Cambiamos el texto del destino
  document.getElementById('dos').innerHTML = 'Lo has conseguido';
}
