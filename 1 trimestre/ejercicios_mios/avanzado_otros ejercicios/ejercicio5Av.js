async function primeraTarea() {
  return 10;
}

async function segundaTarea() {
  let valor1 = primeraTarea();
  return valor1 * 2;
}

async function terceraTarea() {
  let valor2 = segundaTarea();
  return valor2 + 5;
}

primeraTarea()
  //(parámetros) => { cuerpo de la función }
  .then((resultado1) => segundaTarea(resultado1))
  .then((resultado2) => terceraTarea(resultado2))
  .then((resultado3) => console.log(resultado3))
  .catch((error) => console.log('error'));
