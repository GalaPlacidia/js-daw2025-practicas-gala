function divide(a, b) {
  let resultado;
  if (b == 0) {
    throw new Error('No se puede dividir en 0');
  }
  resultado = a / b;
  return resultado;
}

try {
  divide(3, 5);
} catch (e) {
  //catch me sirve para capturar el throw
  console.log('Capturado error');
}
