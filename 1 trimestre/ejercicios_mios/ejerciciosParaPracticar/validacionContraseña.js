/*Validación de contraseña con habilitación de botones
Enunciado:
Programa un formulario con un campo password y un botón enviar.

El botón solo debe habilitarse si la contraseña es entre 8 y 10 caracteres (inclusivos).

Si el usuario corrige el campo (por ejemplo borra y escribe otra vez), el botón debe deshabilitarse o habilitarse según la nueva longitud, no quedar activado erróneamente.
*/

let boton = document.getElementById('boton');
let contraseña = document.getElementById('contraseña');

//OJO AQUÍ NO PUEDO USAR BOTON PORQUE NO QUIERO VALIDAR LA CADENA AL ENVIAR
//SINO MIENTRAS ESCRIBE
//CHANGE ES AL PERDER EL FOCO, INPUT MIENTRAS ESCRIBES
contraseña.addEventListener('input', function () {
  let contra = contraseña.value;
  if (contra.length < 8 || contra.length > 10) {
    boton.disabled = true;
  } else {
    boton.disabled = false;
  }
});
