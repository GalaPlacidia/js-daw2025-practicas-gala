let cantidad = 0;

async function obtenerDatos() {
  try {
    const response = await fetch('php/todos_productos.php');

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    data = await response.json();

    console.log('Datos:', data, 'Longitud:', data.length); //prueba

    for (let i = 0; i < data.length; i++) {
      const nuevoDiv = document.createElement('div');
      const nuevoDiv2 = document.createElement('div');

      nuevoDiv.innerHTML =
        data[i].nombre +
        ' <img src="' +
        data[i].foto +
        '">' +
        data[i].precio +
        '€';

      //nuevoDiv2.innerHTML = data[i].cantidad;
      nuevoDiv2.innerHTML = ' <p id="cantidad">"' + i + '"</p>'; //Quiero encontrarlo con el +
      //nuevoDiv2.innerHTML = ' <button id="boton+">"' +i+ '"</button>';
      nuevoDiv2.innerHTML +=
        '<button onclick="añadirCarrito(' + i + ')">+</button>';

      document.getElementById('items').appendChild(nuevoDiv);
      document.getElementById('items').appendChild(nuevoDiv2);
    }

    //document.getElementById('items').addEventListener('click', function () {
    //let encontrado=
    //añadirCarrito(encontrado);
    //cantidad++;
  } catch (error) {
    console.error('Error:', error);
  }
}
obtenerDatos();

function añadirCarrito(i) {
  // lo cojo del onclick
  let productoAñadido = data[i]; //
  cantidad = data[i].cantidad;
  //cómo hago con la cantidad

  let carritoAhora = JSON.parse(localStorage.getItem('carrito'));

  carritoAhora.push(productoAñadido);

  localStorage.setItem('carrito', JSON.stringify(carritoAhora));

  cantidad++; // Mi contador
  let cantidad2 = document.getElementById('cantidad');
  cantidad2.textContent = parseInt(cantidad2);

  actualizarCarrito();
}

function actualizarCarrito() {
  let carrito = JSON.parse(localStorage.getItem('carrito'));
  let suma = 0;

  for (let i = 0; i < carrito.length; i++) {
    suma += carrito[i].precio;

    const nuevoDiv3 = document.createElement('li');

    nuevoDiv3.innerHTML +=
      carrito[i].nombre +
      carrito[i].cantidad +
      carrito[i].precio +
      '€' +
      '<button onclick="borrarProducto(' +
      i +
      ')">X</button>';

    document.getElementById('lista-carrito').appendChild(nuevoDiv3);

    const nuevoDiv4 = document.createElement('p');
    nuevoDiv4.innterHTML = 'Total: ' + suma + '€';
    document.getElementById('lista-carrito').appendChild(nuevoDiv4);
  }

  // document.getElementById('lista-carrito').addEventListener('click', function () {
}

function eliminarDelCarrito(i) {
  let carrito = JSON.parse(localStorage.getItem('carrito'));
  cantidad[i] = 0;
  actualizarCarrito();
}

//al actualizar la página se tiene que mantener el carrito
window.onload = function () {
  obtenerDatos();
  actualizarCarrito();
};

function tramitarPedido() {
  alert('Pedido en trámite');

  fetch('tramitar_pedido.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(carrito),
  })
    .then((response) => {
      if (response.ok) {
        alert('Tu pedido se ha enviado correctamente');

        localStorage.clear();
        return response.json();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log('Respuesta del servidor:', data);
    })
    .catch((error) => {
      console.error('Error en la petición:', error);
    });
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  localStorage.clear();
}

document.getElementById('tramitar').addEventListener('click', tramitarPedido);
document.getElementById('borrar').addEventListener('click', vaciarCarrito);
