//CREAR UN CONSTRUCTOR PUNTO CON DOS PARÁMETROS QUE SI X,Y NO ES NUMERO
//SEA 0. Y UN MÉTODO PARA CAMBIAR CON NX NY PERO SI NO ES NÚMERO
//X,Y SE QUEDA IGUAL

function Punto(x, y) {
  if (isNaN(x)) {
    this.x = 0;
  } else {
    this.x = x;
  }

  if (isNaN(y)) {
    this.y = 0;
  } else {
    this.y = y;
  }
}

Punto.prototype.cambiar = function (nx, ny) {
  if (isNaN(nx)) {
    this.x = this.x;
  } else {
    this.x = nx;
  }

  if (isNaN(ny)) {
    this.y = this.y;
  } else {
    this.y = ny;
  }
};
