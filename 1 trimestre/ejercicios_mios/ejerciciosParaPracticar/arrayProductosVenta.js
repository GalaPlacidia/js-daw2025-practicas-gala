function Ventas(producto, cantidad, precioUnitario) {
  this.producto = producto;
  this.cantidad = cantidad;
  this.precioUnitario = precioUnitario;
}

function ventasEfectivas(array) {
  return array.filter(function (ventas) {
    return ventas.cantidad > 0;
  });
}

function totalVentas(array) {
  return array.map(function (venta) {
    return venta.cantidad * venta.precioUnitario;
  });
}

function sumaVentas(array) {
  return array.reduce(function (total, venta) {
    return total + venta.cantidad * venta.precioUnitario;
  }, 0);
}

const ventas = [
  { producto: 'Teclado', cantidad: 2, precioUnitario: 25 },
  { producto: 'Ratón', cantidad: 0, precioUnitario: 15 },
  { producto: 'Monitor', cantidad: 1, precioUnitario: 150 },
  { producto: 'Cable USB', cantidad: 3, precioUnitario: 8 },
];

console.log(sumaVentas(ventas));
console.log(totalVentas(ventas));
console.log(ventasEfectivas(ventas));
