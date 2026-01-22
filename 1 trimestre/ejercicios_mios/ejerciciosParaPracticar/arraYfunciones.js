/*Sí, tu ejemplo sería correcto si usas el botón para añadir números al array uno a uno y luego calculas la media sobre los valores que hay en ese array.​

Debes asegurarte de que el array arrayNum contiene solo números y no cadenas separadas por comas. El usuario introduce valores un solo número cada vez, no una lista en una cadena.*/

let numeros = document.getElementById('texto').value;
let arrayNum = [];
arrayNum.push(numeros);

function mediaArray(array) {
  let arraySinComa = array.split(',');
  arraySinComa.map(num);
  let total = arraySinComa.reduce(function (total, num) {
    return total + num;
  }, 0);

  return total / arraySinComa.length;
}

document.getElementById('media').textContent = mediaArray(arrayNum);
