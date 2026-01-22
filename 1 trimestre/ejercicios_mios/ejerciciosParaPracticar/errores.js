function conversor(array) {
  let numero;

  try {
    numero = parseInt(array);

    if (isNaN(numero)) {
      throw new Error('No es un número');
    }

    if (numero == null || numero == '') {
      throw new Error('La cadena está vacía o es nula');
    }
  } catch (e) {
    console.log(e.message);
  }

  return numero;
}
