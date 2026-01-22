function getCookie(cname) {
  var name = cname + '=';
  var nombre = document.cookie.split(';');

  for (var i = 0; i < nombre.length; i++) {
    var c = nombre[i].trim();
    //OJO EN PONER TRIM PARA LOS ESPACIOS
    if (c.indexOf(name) == 0) {
      return c.substring(name.length);
      //Si no pongo el substring no devuelve todo el valor después del =
    }
  }
  return 'no hay usuario';
}

/* function getCookie2(cname) {
    var d = cvalue;
    var fecha = d.toUTCString();
    return fecha;
  }*/

function setCookie(cname, cvalue, exdays = 7) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();

  document.cookie = cname + '=' + cvalue + ';' + expires + '; path=/';
}
let id;

function pantallaBienvenida(evento) {
  document.getElementById('pantalla2').style.display = 'none';
  document.getElementById('pantalla12').style.display = 'inline';

  function primerTemporizador() {
    // Programa de 5 segundos
    id = setTimeout(() => {
      document.getElementById('pantalla1').style.display = 'none';
      document.getElementById('pantalla2').style.display = 'none';
      document.getElementById('pantalla12').style.display = 'inline';
      emailCorrecto();
    }, 5000);
  }
  primerTemporizador(); //OJO CON NO LLAMARLO!!!

  document.addEventListener('keydown', function (evento) {
    if (
      evento.type == 'keydown' &&
      evento.ctrlKey == true &&
      //ALTKEY TIENE QUE IR BOOLEAN, NO CON EVENTO.KEY
      //Y Key no altkey
      evento.key == 'F10'
    ) {
      clearTimeout(id);

      document.getElementById('pantalla1').style.display = 'none';
      document.getElementById('pantalla2').style.display = 'none';
      document.getElementById('pantalla12').style.display = 'inline';
      emailCorrecto();
    }
    //OJO INNERHTML TIENE QUE IR CON COMILLAS, SIN ESO DA ERROR
    //UNCAUGHT ERROR
  });
  /*document.getElementById('pantalla12').style.display = 'none';
  document.getElementById('pantalla2').style.display = 'none';
  document.addEventListener('keydown', pantallaBienvenida);
*/
  function emailCorrecto(evento) {
    let emailCorrecto = false;
    let posicionArroba = -1;
    let posicionPunto = -1;
    document.getElementById('email').onblur = function () {
      let email = document.getElementById('email').value;

      for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
          posicionArroba = i;
          break;
        } else {
          posicionArroba = -1;
        }
      }

      for (let i = 0; i < email.length; i++) {
        if (email[i] == '.') {
          posicionPunto = i;
          break;
        } else {
          posicionPunto = -1;
        }
      }

      if (
        posicionArroba < posicionPunto &&
        posicionArroba != -1 &&
        posicionPunto != -1
      ) {
        emailCorrecto = true;
        document.getElementById('pantalla2').style.display = 'block';
        guardarCookie();
      } else {
        alertaEmail();

        //ojo necesito indicarle false o se queda con el valor anterior, no me sirve que esté declarada inicialmente, pues cada intento es una "vuelta"
        emailCorrecto = false;
      }
    };
  }
}
/*
document.getElementById('email').addEventListener('keydown', function (event) {
  if (event.key == 'Enter') {
    emailCorrecto();
  }
});*/

function alertaEmail() {
  alert('El email no es correcto');
}

function guardarCookie() {
  /*function setCookie2(cname, cvalue, exdays = 30) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();

    document.cookie = cname + '=' + cvalue + ';' + expires + '; path=/';
  }*/

  let email = document.getElementById('email').value;
  let fechaString = new Date().toLocaleString();

  setCookie('correoUsuario', email);
  setCookie('fechaUsuario', fechaString);

  let correo = getCookie('correoUsuario');
  let fecha = getCookie('fechaUsuario');

  document.getElementById('saludo').innerHTML +=
    'Hola ' + correo + '.La última vez que entraste fue el ' + fecha;
}

pantallaBienvenida();
//PANTALLA 3
function cargarPantalla3() {
  document.getElementById('boton').addEventListener('click', function () {
    window.location.href = 'preguntas2.html';
  });
}

cargarPantalla3();

/*
function mostrarSoluciones() {
  //guardarCookie();
  let pregunta = getCookie('preguntaUsuario');
  let respuesta = getCookie('verdaderoFalso');
  let puntuacion = getCookie('puntuacionUsuario');

  document.getElementById('pregunta2').textContent = pregunta;
  document.getElementById('respuesta2').textContent = respuesta;
  document.getElementById('puntuacion2').textContent = puntuacion;
  document.getElementById('estado').textContent = 'Guardado';
}

mostrarSoluciones();
*/
