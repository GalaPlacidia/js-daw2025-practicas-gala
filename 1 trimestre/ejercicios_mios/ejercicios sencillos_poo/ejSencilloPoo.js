let persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Ingeniero',

  presentarse: function () {
    return `("Nombre: "${persona.nombre},"Profesión :"${persona.profesion})`;
  },

  cumplirAños: function () {
    this.edad += 1;
  },

  mostrarPropiedades: function () {
    for (let propietat in persona) {
      console.log(
        `(Nombre: ${this.nombre}, profesión :${this.profesion}, edad:${this.edad})`
      );
    }
  },
};

//persona.cumplirAños();
//console.log(persona.edad);

persona.mostrarPropiedades();
