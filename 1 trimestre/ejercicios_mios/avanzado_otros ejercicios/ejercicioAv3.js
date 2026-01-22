const personas = [
  { nombre: 'Juan', edad: 17 },
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Pedro', edad: 19 },
  { nombre: 'Laura', edad: 16 },
];

function mayores() {
  let arrayMayores = personas.filter((persona) => persona.edad > 18);
  return arrayMayores;
}

function dobleEdad() {
  let doble = personas.map((persona) => persona.edad * 2);
  return doble;
}

function sumaEdad() {
  let suma = personas.reduce((suma, persona) => suma + persona.edad);
  return suma;
}
