function raizCuadrada(x) {
  if (x < 0) {
    throw new Error('El número es negativo');
  }

  return (x * 1) ^ -2;
}

try {
  raizCuadrada(8);
} catch (e) {
  console.log('Error capturado');
}

function obtenerPrimerCaracter(cadena) {
  if (cadena.length < 1) {
    throw new Error('la cadena está vacía');
  } else {
    var letra = '';
    for (let i = 0; i < cadena.length; i++) {
      letra = cadena[0];
    }
    return letra;
  }
}

try {
  obtenerPrimerCaracter('perro');
} catch (e) {
  console.log('capturado error');
}
