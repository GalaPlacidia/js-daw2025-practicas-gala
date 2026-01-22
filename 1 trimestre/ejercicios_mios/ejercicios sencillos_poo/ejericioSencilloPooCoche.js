function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;

  this.detalles = () => `(${this.marca},${this.modelo},${this.año})`;
}

let coche = new Coche('seat', 'león', 1992);
let coche2 = new Coche('ford', 'mustang', 2015);

console.log(coche.detalles());
console.log(coche2.detalles());

Coche.prototype.encender = function () {
  console.log(`(El coche ${this.marca},${this.modelo} ha sido encendido)`);
};

console.log(coche2.encender());
