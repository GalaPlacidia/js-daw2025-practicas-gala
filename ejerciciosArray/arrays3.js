let data = [
  { name: 'Nacho', telephone: '966112233', age: 40 },
  { name: 'Ana', telephone: '911223344', age: 35 },
  { name: 'Mario', phone: '611998877', age: 15 },
  { name: 'Laura', telephone: '633663366', age: 17 },
];

data.push({ name: 'Pedro', telephone: '611944444', age: 25 });
data.push({ name: 'Julia', phone: '633232323', age: 37 });

console.log('b: ', data);

data.sort(function (persona1, persona2) {
  return persona1.age - persona2.age;
});

console.log('c: ', data);

data.sort(function (persona1, persona2) {
  return persona1.name - persona2.name;
});

console.log(data);

/*data.sort(function (persona) {
  return persona.name;
}); FALLA FALTA UNA VARIABLE PARA COMPARAR*/

console.log('d :', data);

let data31 = data.filter(function (persona) {
  if (persona.age >= 30) {
    return persona.age;
  }
});

console.log('e : ', data31);
