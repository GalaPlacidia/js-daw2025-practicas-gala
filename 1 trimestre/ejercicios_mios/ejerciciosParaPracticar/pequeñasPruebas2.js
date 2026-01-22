/*

Ejercicio: Validar formato de número de teléfono
Enunciado:
Escribe una función validarTelefono(tel) que reciba una cadena y devuelva true si sigue este formato, o false en caso contrario:

Formato esperado: XXX-XXX-XXXX o XX-XXX-XXXX donde X es un dígito (0-9).

El primer bloque puede tener 2 o 3 dígitos (código área),

El segundo bloque siempre 3 dígitos,

El tercer bloque siempre 4 dígitos.

Los bloques están separados por guiones -.

La validación debe comprobar:

Que los guiones están en las posiciones correctas.

Que cada bloque contiene solo dígitos.

Que las longitudes de cada bloque son las correctas.

*/

function validarTelefono(telefono) {
  // 01 2 34 5 6789
  let primerSeparador = 0;
  let segundoSeparador = 0;

  //UTILIZO BUCLE PARA LOCALIZAR EL SEPARADOR. PODRÍA USAR INDEXOF
  for (let i = 0; i < telefono.length; i++) {
    if (telefono[i] == '-') {
      primerSeparador = i;
      break;
    }
  }
  //UTILIZO BUCLE PARA LOCALIZAR EL  2 SEPARADOR.¡NO BUCLE DENTRO DE BUCLE! PODRÍA USAR TYPEOF
  for (let i = primerSeparador + 1; i < telefono.length; i++) {
    if (telefono[i] == '-') {
      segundoSeparador = i;
      break; //SI NO PONES BREAK SE SOBRESCRIBE CON EL ÚLTIMO SIEMPRE
    }
  }

  //realizo las comprobaciones
  if (primerSeparador != 3 && primerSeparador != 2)
    console.log('separador incorrecto');

  if (segundoSeparador != 7 && segundoSeparador != 6) {
    console.log('separador incorrecto');
  }

  //compruebo que los bloques sean números y que tienen el tamaño adecuado

  let bloque1 = telefono.substring(0, primerSeparador);
  let bloque1Num = parseInt(bloque1);

  //si fuera un string sí compararíamos así, pero los números se comparan con NAN
  //PODRÍA USAR TYPEOF
  //ISNAN ES IS NOT A NUMBER POR LO QUE TRUE ES QUE NO ES UN NÚMERO
  if (isNaN(bloque1Num) || (bloque1.length != 2 && bloque1.length != 3)) {
    console.log('bloque1 incorrecto');
  }

  let bloque2 = telefono.substring(primerSeparador + 1, segundoSeparador);
  let bloque2Num = parseInt(bloque2);

  if (isNaN(bloque2Num) || (bloque2.length != 2 && bloque2.length != 3)) {
    console.log('bloque2 incorrecto');
  }

  let bloque3 = telefono.substring(segundoSeparador + 1, telefono.length);
  let bloque3Num = parseInt(bloque3);

  if (isNaN(bloque3Num) || (bloque3.length != 2 && bloque3.length != 3)) {
    console.log('bloque3 incorrecto');
  }
}

let telefono1 = '03/09/2025';
validarTelefono(telefono1);

let telefono2 = '963-410-310';
validarTelefono(telefono2);

let telefono3 = '963-410-3100';
validarTelefono(telefono3);
