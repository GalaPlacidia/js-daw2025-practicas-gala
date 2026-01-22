/*
Ejercicio 1: Manejo de Arrays y Objetos (similar a 3)
Crea un array llamado users que contenga objetos con las propiedades: nombre, teléfono y edad. Ejemplo:

js
let users = [
  {name: "Carlos", phone: "655123456", age: 28},
  {name: "Marta", phone: "622334455", age: 32},
  {name: "Luis", phone: "699887766", age: 22},
  {name: "Elena", phone: "633221144", age: 45}
];
a) Añade dos usuarios nuevos usando métodos adecuados.

b) Muestra el array completo con console.log.

c) Ordena el array alfabéticamente por nombre y muéstralo.

d) Filtra y genera un nuevo array con solo usuarios menores de 30 años y muéstralo.

*/

let users = [
  { name: 'Carlos', phone: '655123456', age: 28 },
  { name: 'Marta', phone: '622334455', age: 32 },
  { name: 'Luis', phone: '699887766', age: 22 },
  { name: 'Elena', phone: '633221144', age: 45 },
];
//A)
users.push(
  { name: 'Carlo', phone: '655123453', age: 10 },
  { name: 'Mar', phone: '622334489', age: 8 }
);
//b)
for (user of users) {
  console.log(user);
  //ojo no puede ser users o sería redundante
}
//C)
console.log(users.sort());

//D)
let users2 = [];

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    users2.push(users[i]);
  }
}

console.log(users2.toString());

//for (let i=0; i<users.length;i++) {
//if(users.sort(users[i].name,users.name[i+1]){
// console.log(users[i]);
//};
