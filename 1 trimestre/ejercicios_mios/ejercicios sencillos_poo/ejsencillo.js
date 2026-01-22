function cuadrado(num) {
  return num * num;
}

console.log(cuadrado(5));

let contador = 0;

//FUNCIÓN ANÓNIMA AUTOINVOCADA CON EL PARÁMETRO FUERA
let contando = (function () {
  contador++;
  return contador;
})();

//console.log(contador);
console.log(contando);

let contandoDentroVariable = (function () {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
})();
