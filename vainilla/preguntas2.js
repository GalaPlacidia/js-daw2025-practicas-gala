function getCookie(cname) {
  var name = cname + '=';
  var nombre = document.cookie.split(';');
  for (var i = 0; i < nombre.length; i++) {
    var c = nombre[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length);
  }
  return 'no hay usuario';
}

function setCookie(cname, cvalue, exdays = 7) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();

  document.cookie = cname + '=' + cvalue + ';' + expires + '; path=/';
}

function pantalla3Comprobaciones() {
  /*
  
  document.getElementById('pantalla1').style.display = 'none';
  document.getElementById('pantalla2').style.display = 'none';
  


  */
  let botonGrabar = document.getElementById('grabar');
  botonGrabar.disabled = true;
  //let pulsado = false;
  let comprobaciones = 0;
  let verdad = document.getElementById('v');
  let falso = document.getElementById('f');
  verdad.addEventListener('click', function (event) {
    //pulsado = true;
    falso.disabled = true;
  });

  falso.addEventListener('click', function (event) {
    //pulsado = true;
    verdad.disabled = true;
  });

  let pregunta = document.getElementById('preguntas').value;
  let puntuacion = document.getElementById('puntuacion').value;
  let puntuacionNumero = parseInt(puntuacion);
  if (
    puntuacionNumero < 0 ||
    puntuacionNumero >= 10 ||
    Number.isNaN(puntuacionNumero)
  ) {
    alert('Pon un número del 1 al 9');
  } else {
    comprobaciones++;
  }

  if (pregunta != '' && pregunta != null) {
    comprobaciones++;
  }

  if (verdad.checked == true || falso.checked == true) {
    comprobaciones++;
  }

  if (comprobaciones == 3) {
    botonGrabar.disabled = false;
  }
}

function crearFila() {
  let nuevaFila = document.createElement('tr');

  let miTabla = document.getElementById('2');
  miTabla.appendChild(nuevaFila);

  let guardadoColumna = document.createElement('td');

  nuevaFila.appendChild(guardadoColumna);
  return guardadoColumna;
}

function pantalla3Guardar() {
  let pregunta = document.getElementById('preguntas').value;
  let puntuacion = document.getElementById('puntuacion').value;
  let verdad = document.getElementById('v');
  let falso = document.getElementById('f');

  setCookie('preguntaUsuario', pregunta);
  if (verdad.disabled == false) {
    setCookie('verdaderoFalso', verdad.value);
  } else {
    setCookie('verdaderoFalso', falso.value);
  }

  setCookie('puntuacionUsuario', puntuacion);
  // mostrarSoluciones(retraso); // aquí usas el retraso
  //lo tengo duplicado aquí y en el botón guardar (lo refresco dos veces y me da problemas!!!)
}

let retrasoString = prompt('¿Quieres retraso: S/N?');
if (retrasoString == 'S' || retrasoString == 's') {
  retraso = true;
} else {
  retraso = false;
}
mostrarSoluciones(retraso); //cargamos el listado al entrar a Pantalla3

function mostrarSoluciones(retraso = false) {
  if (retraso == true) {
    /* let nuevaFila2 = document.createElement('tr');

    let miTabla2 = document.getElementById('2');
    miTabla2.appendChild(nuevaFila2);

    let guardadoColumna2 = document.createElement('td');

    guardadoColumna2.textContent = 'Cargando preguntas...';
    nuevaFila2s.appendChild(guardadoColumna2);
*/

    let guardadoColumna = crearFila();
    guardadoColumna.textContent = 'Cargando preguntas...';

    setTimeout(() => {
      mostrarSoluciones(false);
      let guardadoColumna = crearFila();
      guardadoColumna.textContent = '';
    }, 5000);
    return;
  }

  let pregunta = getCookie('preguntaUsuario') || 'Sin pregunta';
  let respuesta = getCookie('verdaderoFalso') || 'Sin respuesta';
  let puntuacion = getCookie('puntuacionUsuario') || 'Sin puntuación';

  let nuevaFila = document.createElement('tr');

  let miTabla = document.getElementById('2');
  miTabla.appendChild(nuevaFila);

  /*
  document.getElementById('pregunta2').textContent += pregunta;

  document.getElementById('respuesta2').innerHTML += respuesta;

  document.getElementById('puntuacion2').textContent += puntuacion;

  document.getElementById('estado').textContent += 'Guardado ✓';
}*/

  let preguntaColumna = document.createElement('td');
  let respuestaColumna = document.createElement('td');
  let puntuacionColumna = document.createElement('td');
  let guardadoColumna = document.createElement('td');

  preguntaColumna.textContent = pregunta;
  respuestaColumna.innerHTML = respuesta;
  puntuacionColumna.textContent = puntuacion;
  guardadoColumna.textContent = '';

  nuevaFila.appendChild(preguntaColumna);
  nuevaFila.appendChild(respuestaColumna);
  nuevaFila.appendChild(puntuacionColumna);
  nuevaFila.appendChild(guardadoColumna);
}

// Programa de 5 segundos

let botonAtras = document.getElementById('atras');

let guardadoColumna = crearFila();
guardadoColumna.textContent = '';
document.getElementById('grabar').addEventListener('click', function () {
  pantalla3Comprobaciones();
  botonAtras.disabled = true;

  let miPromesa = new Promise((resolve, reject) => {
    let todoCorrecto = true;

    setTimeout(() => {
      pantalla3Guardar();
      mostrarSoluciones(false);
      //OJO NO DEBO PONER RETRASO=FALSE, PORQUE ignoras EL PROMPT que es necesario para la primera vez que lo llamas
      let guardadoColumna = crearFila();
      guardadoColumna.textContent += 'Guardando...';

      botonAtras.disabled = false;
    }, 5000);

    if (todoCorrecto) {
      resolve('OK');
    } else {
      reject('Error');
    }
  });

  miPromesa.then((resultado) => {
    let guardadoColumna = crearFila();
    guardadoColumna.textContent = 'OK';
  });

  miPromesa.catch((error) => {
    let guardadoColumna = crearFila();
    guardadoColumna.textContent = 'No OK';
  });
});

document.getElementById('atras').addEventListener('click', function () {
  window.location.href = 'preguntas.html';
});

//pantalla3();
//mostrarSoluciones();
