let productos = [
  { nombre: 'Portátil', precio: 900, stock: 5 },
  { nombre: 'Ratón', precio: 20, stock: 50 },
  { nombre: 'Teclado', precio: 50, stock: 0 },
  { nombre: 'Monitor', precio: 200, stock: 10 },
];

var lista = document.getElementById('listaProductos');

productos.forEach((producto) => {
  var lis = document.createElement('li');

  lis.innerHTML =
    'Producto ' + producto.nombre + ', Precio: ' + producto.precio + ' euros';
  lista.appendChild(lis);
});

document.getElementById('boton').addEventListener('click', function () {
  var elementoEliminado = lista.shift();
});
