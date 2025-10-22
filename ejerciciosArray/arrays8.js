const conteo = new Map();

for (let i = 0; i < 10000; i++) {
  let numero = parseInt(Math.random() * (10 - 1 + 1) + 1);
  if (conteo.has(numero)) {
    //el contador es la clave, la llamo y le doy uno más
    conteo.set(numero, conteo.get(numero) + 1);
    //OJO si no añado el else el sistema no hace nada, no guarda nada!!!
    //lo necesito para crear el 1 número
  } else {
    conteo.set(numero, 1);
  }
}

for (let [clave, valor] of conteo) {
  console.log('Frecuencias. Número', clave, ': ', valor);
}

//¿Ordenar al convertir en array?
