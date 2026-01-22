function Ordenador(marca, modelo, ram, capacidad, pulgadas) {
  this.marca = marca;
  this.modelo = modelo;
  if (this.ram == '') {
    this.ram = 4;
  } else {
    this.ram = ram;
  }

  if (this.capacidad == '') {
    this.capacidad = 512;
  } else {
    this.capacidad = capacidad;
  }

  if (this.pulgadas == '') {
    this.pulgadas = 17;
  } else {
    this.pulgadas = pulgadas;
  }

  this.toString = () => {
    console.log(
      'marca: ' +
        this.marca +
        ' modelo: ' +
        this.modelo +
        ' memoria ram: ' +
        this.ram +
        ' capacidad ' +
        this.capacidad +
        ' GB. Pulgadas: ' +
        this.pulgadas +
        ' pulgadas.'
    );
  };
}

function Portatil(marca, modelo, ram, capacidad, pulgadas, autonomia) {
  Ordenador.call(this, marca, modelo, ram, capacidad, pulgadas);

  if ((this.autonomia = '')) {
    this.autonomia == 4;
  } else {
    this.autonomia = autonomia;
  }

  if (this.pulgadas == '') {
    this.pulgadas = 12;
  } else {
    this.pulgadas = pulgadas;
  }

  this.toString = () => {
    console.log('autonomia: ' + autonomia);
  };
}
