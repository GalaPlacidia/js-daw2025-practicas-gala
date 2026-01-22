var patrol = /serpi/i
var patro2 = /serpi/
var cad="Curso de JavaScript en el Serpis";
console.log(patrol.test(cad)); //true 
console.log(patro2.test(cad)); //false
var res = cad.match(patrol);
console.log(res.length); //1, una sola ocurrencia 
console.log(res[0]); //Serpi