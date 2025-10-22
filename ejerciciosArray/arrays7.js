function crearPrimitiva() {
  let lista = new Set();
  //si la saco fuera acumula las combinaciones en una sola cosa
  let contador = 0;
  let tamaño;
  while (contador < 6) {
    let numero = parseInt(Math.random() * (49 - 1 + 1) + 1);
    //tengo que usar el parseInt o me salen en decimales
    tamaño = lista.size;
    //antes de añadir veo qué tamaño tiene el set
    lista.add(numero);
    //si está repetido NO se va a añadir
    if (lista.size > tamaño) {
      contador++;
    }
  }
}

function imprimir() {
  let contador2 = 0;

  while (contador2 < 50) {
    let primitiva = crearPrimitiva();
    contador2++;

    //OJO console.log tiene que estar dentro sino, sólo me imprime la última boleta
    console.log('Boleto: ' + contador2, primitiva);
  }
}

imprimir();
