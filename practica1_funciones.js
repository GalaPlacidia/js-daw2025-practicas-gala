function ordenarPalabras() {
  let palabras = new Set();
  let palabraSinComa;
  let palabra;

  do {
    palabra = prompt(
      'Introduce palabras, separa con , y finalizará cuando canceles o dejes de esribir'
    );
    //SI NO LO VALIDO AQUÍ NO ME MUESTRA NADA!!!
    if (palabra != null && palabra !== '') {
      palabraSinComa = palabra.split(',');

      //ASÍ TENGO LAS PALABRAS SEPARADAS ANTES DE AÑADIRLAS AL SET
      //SI LO HAGO LUEGO NO HACE NADA :(
      for (let i = 0; i < palabraSinComa.length; i++) {
        palabras.add(palabraSinComa[i]);
      }
    }
  } while (palabra != null && palabra !== '');

  let arrayPalabra = [...palabras];

  //OJO SORT ES PARA ARRAYS Y JOIN ES PARA STRING
  arrayPalabra.sort((a, b) => a.localeCompare(b, 'es'));

  //VUELVO A UNIR LAS COMAS PARA MOSTRAR RESULTADO
  let stringPalabra = arrayPalabra.join(',');

  document.getElementById('textoResultado').innerHTML = stringPalabra;
}

ordenarPalabras();
