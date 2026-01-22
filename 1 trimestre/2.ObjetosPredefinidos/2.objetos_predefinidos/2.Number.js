console.log(0b1010)
console.log(0xFF)


var num = 76;
console.log(num.toString(16) + " en hexadecimal");
console.log(num.toString(8) + " en octal"); 
console.log(num.toString(2) + " en binari"); 
console.log(typeof(num.toString(2))); //string


console.log(5/0); // devuelve infinity


console.log(3*"a"); //NaN. Recordad que 3+"a" devuelve "3a"
console.log(isNaN(3*4)); //false
console.log(isNaN(3*"a")); //true


var x = 25; //tipus primitiu
var y = new Number(25); //objecte 
console.log(typeof x); //number 
console.log(typeof y); //object
console.log(x == y); //true 
console.log(x === y); //false