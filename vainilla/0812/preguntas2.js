function getCookie(cname) {
  var name = cname + '=';
  var nombre = document.cookie.split(';');
  for (var i = 0; i < nombre.length; i++) {
    var c = nombre[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length);
  }
  return 'no hay usuario';
}

function mostrarSoluciones() {
  let pregunta = getCookie('preguntaUsuario') || 'Sin pregunta';
  let respuesta = getCookie('verdaderoFalso') || 'Sin respuesta';
  let puntuacion = getCookie('puntuacionUsuario') || 'Sin puntuación';

  document.getElementById('pregunta2').textContent = pregunta;
  document.getElementById('respuesta2').textContent = respuesta;
  document.getElementById('puntuacion2').textContent = puntuacion;
  document.getElementById('estado').textContent = 'Guardado ✓';
}

mostrarSoluciones();
