let palabras = new Map();
let palabraSinComa;
let palabra;
let conteo = 0;

function contarPalabras() {
  do {
    palabra = prompt(
      'Introduce palabras, separa con , y finalizará cuando canceles o dejes de esribir'
    );

    if (palabra != null && palabra !== '') {
      palabraSinComa = palabra.split(',');

      for (let i = 0; i < palabraSinComa.length; i++) {
        if (palabras.has(palabraSinComa[i])) {
          conteo = palabras.get(palabraSinComa[i]);
          palabras.set(palabraSinComa[i], conteo++);
        } else {
          palabras.set(palabraSinComa[i], 1);
        }
      }
    }
  } while (palabra != null && palabra !== '');

  let arrayMapa = [...palabras];
  let stringPalabra = '';

  for (let [clave, valor] of arrayMapa) {
    stringPalabra += `${clave}: ${valor}`;
  }

  document.getElementById('textoResultado').innerHTML = stringPalabra;
}

contarPalabras();
