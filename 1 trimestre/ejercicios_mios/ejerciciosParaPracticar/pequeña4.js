Array.prototype.media = function () {
  //let arrayString = this.toString();
  //let arrayNum = parseInt(arrayString);
  let suma = 0;
  let contador = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i] != '' && !isNaN(this[i]) && this[i] != null) {
      suma += Number(this[i]);
      //NUMBER CONVIERTE A NÚMERO
      //IS NAN COMPRUEBA QUE SEA NÚMERO PERO UN STRING=123 TAMBIÉN LO DA POR BUENO.;
    }
  }

  for (let i = 0; i < this.length; i++) {
    if (isNaN(this[i])) {
      contador++;
    }
  }
  if (contador == this.length) {
    return 0;
  }

  return suma / this.length;
};

let arr = [1, 2, 33];
let arr2 = [1, '', 33];
let arr3 = [1, 2, 'c'];
let arr4 = ['b', '2a', 'c'];

console.log(arr.media());
console.log(arr2.media());
console.log(arr3.media());
console.log(arr4.media());
