const alumnos = [
  { nombre: 'Ana', nota: 7 },
  { nombre: 'Luis', nota: 4 },
  { nombre: 'Rita', nota: 9 },
];

console.log(
  alumnos.map(function (alumni) {
    //alumnos.filter(function (nota) {
    //return nota < 5;

    if (alumni.nota < 5) {
      return alumni;
    }
  })
);
