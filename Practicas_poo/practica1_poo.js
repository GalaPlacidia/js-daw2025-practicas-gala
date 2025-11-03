function Punto(x, y) {
  if (typeof x !== 'number') {
    this.x = 0;
  }
  if (typeof y !== 'number') {
    this.y = 0;
  } else {
    this.x = x;
    this.y = y;
  }

  this.cambiar = (nx, ny) => {
    this.x = nx;
    this.y = ny;
  };

  this.suma = (punto2) => {
    let x3 = this.x + punto2.x;
    let y3 = this.y + punto2.y;
    let punto3 = new Punto(x3, y3);
    return punto3;
  };

  this.copia = () => {
    let copiaP = new Punto(this.x, this.y);
    return copiaP;
  };

  this.imprimir = () => `(${this.x},${this.y})`;
}

let p1 = new Punto(2, 3);

console.log(p1.imprimir());

p1.cambiar(5, 6);

console.log(p1.imprimir());

let p2 = new Punto(8, -5);

let p3 = p1.suma(p2);

console.log(p3.imprimir());

let copia = p1.copia();

console.log(copia.imprimir());
