function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;

  this.mostrarInfo = function () {
    let cadena =
      'El producto ' +
      this.nombre +
      ' cuesta ' +
      this.precio +
      ' euros y quedan ' +
      this.stock +
      ' unidades en stock';
    return cadena;
  };
}

Producto.prototype.mostrarInfo = function () {
  let cadena =
    'El producto ' +
    this.nombre +
    ' cuesta ' +
    this.precio +
    ' euros y quedan ' +
    this.stock +
    ' unidades en stock.';
  return cadena;
};
