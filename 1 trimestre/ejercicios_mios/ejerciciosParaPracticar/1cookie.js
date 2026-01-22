document.getElementById('boton').addEventListener('click', function (event) {
  event.preventDefault();
  var cvalor = document.getElementById('nombre').value;
  var cvaluef = document.getElementById('fecha').value;

  setCookie('cnombre', 'cvalor', 30);
  setCookie('cfecha', 'cvaluef', 30);

  //SI LO PONGO AL FINAL DEL TODO, SI LA COOKIE NO EXISTÍA PREVIAMENTE Y SE CREA CON EL CLICK HASTA QUE NO RECARGUES NO LA VES
  vueltaUsuario();
});

function setCookie(cname, cvalue, exdays = 30) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function vueltaUsuario() {
  var usuario = getCookie('cnombre');
  if (usuario != '') {
    alert('Hola ' + usuario);
  }
}

vueltaUsuario();
