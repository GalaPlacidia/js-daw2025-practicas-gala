/*

Usa forEach para mostrar en consola el nombre y stock de cada producto.

Crea un nuevo array con los precios aumentados un 10% usando map.

Crea otro array que contenga solo los productos disponibles (stock > 0) usando filter
*/

let productos = [
  { nombre: 'Portátil', precio: 900, stock: 5 },
  { nombre: 'Ratón', precio: 20, stock: 50 },
  { nombre: 'Teclado', precio: 50, stock: 0 },
  { nombre: 'Monitor', precio: 200, stock: 10 },
];

array.forEach((productos) => {
  console.log('nombre' + producto.nombre + ' stock' + producto.stock);
});

//EN SINGULAR REPRESENTA UN OBJETO

var map = new Map();

array.forEach((productos) => {
  map.set(producto.nombre, producto.stock * 2);
});

var array2 = productos.filter((producto) => producto.stock > 0);
//El callback de filter recibe cada elemento (objeto) del array, por lo que para filtrar por la propiedad stock se debe acceder con producto.stock
