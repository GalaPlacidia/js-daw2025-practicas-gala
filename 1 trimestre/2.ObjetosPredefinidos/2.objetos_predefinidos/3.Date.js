var data = new Date(); //fecha del sistema
console.log(data);
var data = new Date(34885453664); //genera una fecha que representa los milisegundos que han pasado desde el 1 de enero de 1970
console.log(data);
data = new Date('2016/05/23');
console.log(data);
data = new Date(2016, 5, 23, 12, 15, 24, 220); //año, mes, dia, hora, minutos, segundos, milisegundos
console.log(data);

var d = new Date(); //Dia del Trabajo
d.setDate(1);
d.setMonth(4); //Representa el mes de mayo
d.setFullYear(2016);
console.log(d);
console.log(d.toDateString()); //Sun May 01 2016
console.log(d.toLocaleDateString()); //1/5/2016
//Como toLocaleDateString() devuelve una cadena, ya puedo utilizar las funciones de cadena:
var array_data = d.toLocaleDateString().split('/');
console.log(array_data[0]); //dia
console.log(array_data[1]); //mes
console.log(array_data[2]); //año
