//let nom = document.getElementById('nombre').value;
//OJO PONERLO AQUÍ HACE QUE SE EJECUTE LO PRIMERO ANTES DE ESCRIBIT NADA, EL VALOR QUEDARÁ VACÍO
function setCookie(nombre, nom, exdays = 7) {
  var dia = new Date();
  dia.setTime(dia.getTime() + exdays * 24 * 60 * 60 * 1000);

  var expira = 'expires=' + dia.toUTCString();

  document.cookie = nombre + '=' + nom + ';' + expira + ';path=/';
} //OJO EL PATH VA CON =

function getCookie(nombre) {
  // El nombre debe acabar en '=' no ':'
  var name = nombre + '='; //ojo sin espacios
  var cookieCompleta = document.cookie.split(';');

  for (var i = 0; i < cookieCompleta.length; i++) {
    var galleta = cookieCompleta[i];

    while (galleta.charAt(0) == ' ') {
      galleta = galleta.substring(1);
      //OJO ES galleta.substring
    }

    if (galleta.indexOf(name) == 0) {
      return galleta.substring(name.length, galleta.length);
    }
  }

  return ''; // Mejor devolver cadena vacía, no mensaje de error
}

function comprobarCookie() {
  var usuario = getCookie('nombre');
  var conozco = document.getElementById('teConozco');
  // var contenido = document.getElementById('contenido');
  if (usuario != '') {
    //let contenedor = document.getElementById('contenido');
    conozco.innerHTML = 'Hola ' + usuario;
  }
}
document.getElementById('boton').addEventListener('click', function () {
  event.preventDefault();
  let nom = document.getElementById('nombre').value;
  setCookie('nombre', nom, 7);
  comprobarCookie();
});

comprobarCookie();
