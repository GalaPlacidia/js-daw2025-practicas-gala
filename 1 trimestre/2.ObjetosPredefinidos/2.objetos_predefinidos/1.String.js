var cad1 = 'Esto es una cadena de texto';
var cad2 = new String('Esto es una cadena de texto');
console.log(typeof(cad1)); // string 
console.log(typeof(cad2)); // object
console.log(cad1 == cad2); //true 
console.log(cad1 === cad2); //false