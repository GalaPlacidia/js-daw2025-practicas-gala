let contador = 0;

function getCookie(numVisitas) {
  var name = numVisitas + '=';
  var numeroV = document.cookie.split(';');

  for (var i = 0; i < numeroV.length; i++) {
    var c = numeroV[i];
    if (c.indexOf(name) == 0) {
      return c.substring(name.length);
      //Si no pongo el substring no devuelve todo el valor después del =
    }
  }
}

//convierto el valor de la cookie en número
contador = parseInt(getCookie('numVisitas'));
//ME SALE NAN TODO EL RATO!!!
if (isNaN(contador)) {
  contador = 0;
}
//OJO SI NO PONGO COMILLAS, PARA CONVERTIRLO EN STRING NO HAGO NADA!!!

document.getElementById('boton').addEventListener('click', function () {
  contador++;

  if (contador > 10) {
    contador = 0;
    document.cookie =
      'numVisitas=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
  }

  setCookie('numVisitas', contador);
  document.getElementById('parrafo').textContent = contador;
  //SI NO LLAMO A LA COOKIE NO ACTUALIZO EL CONTADOR
});

function setCookie(numVisitas, contador, exdays = 30) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();

  document.cookie = 'numVisitas=' + contador + ';' + expires + '; path=/';
}

//guardando la cookie actualizada

//document.getElementById('parrafo').textContent = contador;
