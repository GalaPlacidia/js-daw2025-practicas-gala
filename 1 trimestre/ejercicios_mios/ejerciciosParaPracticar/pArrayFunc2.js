function mayorNumero(array) {
  let maximo = 0;

  //array.filter(function (num) {
  array.forEach(function (num) {
    if (num > maximo) {
      maximo = num;
    }
  });
  return maximo;
}

function contar(array, maximo) {
  return array.filter(function (num) {
    return num == maximo;
  }).length;
  //OJO SON DOS RETURNS, SI NO DEVUELVO FILTER NO HAGO NADA
}
/* let contador=0   array.forEach(function (num) {
    if (num == maximo) {
      contador++;
    }
  });

  return contador;*/

document.getElementById('boton').addEventListener('click', function () {
  //SI ESTAS CONVERSIONES NO LAS HAGO CON EL BOTÓN SE GENERAN AL CARGAR LA PÁGINA NO AL METER VALORES
  let a = document.getElementById('texto').value;
  let arrayNum = a.split(',').map(Number);
  // Convierte texto en array de números
  let parrafo = document.getElementById('media');
  let numMaximo = mayorNumero(arrayNum);
  parrafo.textContent += numMaximo;

  let parrafo2 = document.getElementById('contador');
  let numContador = contar(arrayNum, numMaximo);
  parrafo2.textContent += numContador;
});
