let alumnos = new Array('lucía', 'carlos', 'marta');

function mostrarAlumnos(alumnos) {
  for (let alumno of alumnos) {
    document.getElementById('lista').innerHTML += alumno;
  }
}
function añadirAlumno(alumnos) {
  let alumni = prompt('Pon nombre');
  if (typeOf(alumni) === String) {
    alumnos.push(alumni);
    mostrarAlumnos(alumnos);
  } else {
    console.log('error:nombre no es correcto');
  }
}

function buscarAlumno(alumnos, alumno) {
  if (alumnos.includes(alumno)) {
    return true;
  } else {
    return false;
  }
}
