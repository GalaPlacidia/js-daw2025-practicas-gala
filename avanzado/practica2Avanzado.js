function tempo(numero) {
  var promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Tiempo concluido'), numero);
    //en el temporizador meto lo que quiero que haga tras pasar el tiempo
    //Hay dos temporaizadores uno para el resolver y otro para el reject
    setTimeout(() => reject('El tiempo no va bien'), numero * 2);
  });
  //devuelvo la promesa
  return promesa;
}

tempo(5000)
  // con then pongo en parámetro resultado, valor o lo que sea
  //Y le digo qué hacer con el resolve, reject de la promesa. En este caso
  //que aparezca en p
  .then((mensaje) => {
    document.getElementById('parrafo').textContent = mensaje;
  })
  .catch((error) => {
    document.getElementById('parrafo').textContent = error;
  });
