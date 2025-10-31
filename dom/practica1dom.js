function mostrarImagen(evento) {
  if (
    evento.type == 'keydown' &&
    evento.altKey == true &&
    //ALTKEY TIENE QUE IR BOOLEAN, NO CON EVENTO.KEY
    //Y Key no altkey
    evento.key == 'F12'
  ) {
    document.getElementById('imagen').src = '1.jpg';
  }
  //OJO INNERHTML TIENE QUE IR CON COMILLAS, SIN ESO DA ERROR
  //UNCAUGHT ERROR
}

document.addEventListener('keydown', mostrarImagen);
//ONKEYPRESS NO SIRVE
