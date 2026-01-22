var correo = document.getElementById('email').value;

function comprobarEmail(correo) {
  try {
    if (correo == '') {
      throw new Error('Escribe algo');
    }
    for (let i = 0; i < correo.length; i++) {
      if (correo(i) != '@') {
        throw new Error('No has puesto la arroba');
      }

      if (
        correo(correo.length - 3) != '.' &&
        correo(correo.length - 4) != '.'
      ) {
        throw new Error('No has puesto el punto');
      }
    }

    if (correo.length <= 6) {
      throw new Error('El email es demasiado corto');
    }
  } catch (error) {
    //OJO AQUÍ TIENES QUE CAPTURAR EL ERROR
    //es@.com 6 es@.es  5
    console.error(error.message);
  }
}
