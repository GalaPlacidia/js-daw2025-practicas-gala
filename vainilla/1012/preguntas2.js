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

function pantalla3() {
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
    Number.isNaN(puntuacion)
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

  setCookie('preguntaUsuario', pregunta);
  if (verdad.disabled == false) {
    setCookie('verdaderoFalso', verdad.value);
  } else {
    setCookie('verdaderoFalso', falso.value);
  }

  setCookie('puntuacionUsuario', puntuacion);
}

function mostrarSoluciones() {
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
document.getElementById('grabar').addEventListener('click', function () {
  pantalla3();
  mostrarSoluciones();
});

document.getElementById('atras').addEventListener('click', function () {
  window.location.href = 'preguntas.html';
});

//pantalla3();
//mostrarSoluciones();
