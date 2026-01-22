function simularProceso(exito) {
  let promesa = new Promise((resolver, rechazar) => {
    if (exito == true) {
      resolver('cierto');
    } else {
      rechazar(Error('Falso'));
    }
  });
  return promesa;
}

//Hay que llamarla fuera de la función, para guardarla y llamarla

let promesa = simularProceso(true);

promesa.then((exito) => {
  console.log(exito);
});
promesa.catch((error) => {
  console.log(error);
});

let promesa3 = simularProceso(false);

promesa3.then((exito) => {
  console.log(exito);
});
promesa3.catch((error) => {
  console.log(error);
});

async function simularProceso2(exito) {
  try {
    let espera = await simularProceso(exito);
    console.log(espera);
  } catch (error) {
    console.log(error);
  }
}

simularProceso2(true);
simularProceso2(false);
