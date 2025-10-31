let usuarioCorrecto = false;
let contraseñaCorrecta = false;
//he tenido que crear esto o entraba en bucle la alerta
let alertUsuario = 0;
let alertContraseña = 0;

document.getElementById('usuario').onblur = function () {
  let usuario = document.getElementById('usuario').value;
  let posicionArroba = -1;
  let posicionPunto = -1;

  for (let i = 0; i < usuario.length; i++) {
    if (usuario[i] == '@') {
      posicionArroba = i;
      break;
    } else {
      posicionArroba = -1;
    }
  }

  for (let i = 0; i < usuario.length; i++) {
    if (usuario[i] == '.') {
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
    usuarioCorrecto = true;
  } else {
    if (alertUsuario < 1) {
      alertaUsuario();
      alertUsuario++;
      //ojo necesito indicarle false o se queda con el valor anterior, no me sirve que esté declarada inicialmente, pues cada intento es una "vuelta"
      usuarioCorrecto = false;
    }
  }
  reiniciarBoton();
};

document.getElementById('contraseña').onblur = function () {
  let contraseña = document.getElementById('contraseña').value;

  if (contraseña.length >= 8 && contraseña.length <= 10) {
    contraseñaCorrecta = true;
  }
  if (alertContraseña < 1) {
    alertaContraseña();
    alertContraseña++;
    contraseñaCorrecta = false;
  }
  reiniciarBoton();
};

function alertaUsuario() {
  alert('El usuario no es correcto');
}

function alertaContraseña() {
  alert('La contraseña no es correcta');
}

//HE TENIDO QUE METER BOTÓN EN FUNCIÓN O NO FUNCIONABA
function reiniciarBoton() {
  if (usuarioCorrecto == false || contraseñaCorrecta == false) {
    document.getElementById('boton').disabled = true;
  } else {
    //OJO!!! HAY QUE HABILITARLO!!!
    document.getElementById('boton').disabled = false;
  }
}
