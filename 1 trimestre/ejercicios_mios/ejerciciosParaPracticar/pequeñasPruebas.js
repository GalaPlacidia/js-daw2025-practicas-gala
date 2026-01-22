let y = prompt('Pon algo');

if (typeof y === String && y != '') {
  console.log = 'Es string';
}

if (typeof y === Boolean && y != '') {
  console.log = 'Es buleano';
}

if (typeof y === Number && y != '') {
  console.log = 'Es num';
}

function comprobarArray(array, valor) {
  if (array.includes(valor)) {
    return true;
  } else {
    return false;
  }
}

function Coche(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;

  this.mostrarInfo = function () {
    console.log('Marca: ' + this.marca + ' Modelo: ' + this.modelo);
  };
}

Coche.prototype.mostrarInfo = function () {
  console.log('Marca: ' + this.marca + ' Modelo: ' + this.modelo);
};

document.getElementById('boton').addEventListener('click', function () {});
let lis = document.createElement('li');
lis.innerHTML = textito;

document.getElementById('lista').appendChild(lis);
