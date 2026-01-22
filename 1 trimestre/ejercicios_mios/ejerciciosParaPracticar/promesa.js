function descargaSimulada() {
  var promesa = new Promise((resolver, rechazar) => {
    setTimeout(() => {
      resolver('descarga completada');
    }, 3000);
  });

  return promesa;
}

let promesa2 = descargaSimulada();
promesa2
  .then((respuesta) => {
    console.log(respuesta);
  })

  .catch((error) => {
    console.log(error.message);
  });

async function realizarDescarga() {
  let mensaje1 = await promesa2;
  console.log(mensaje1);
}

realizarDescarga();
