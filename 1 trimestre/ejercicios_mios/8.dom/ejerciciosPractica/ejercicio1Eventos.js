function crearAleatorio() {
  var nuevoLi = document.createElement('ul');

  var numAleatorio = parseInt(Math.random() * 100);

  nuevoLi.textContent = numAleatorio;

  document.getElementById('lista').appendChild(nuevoLi);
}

document.getElementById('boton').addEventListener('click', crearAleatorio);
