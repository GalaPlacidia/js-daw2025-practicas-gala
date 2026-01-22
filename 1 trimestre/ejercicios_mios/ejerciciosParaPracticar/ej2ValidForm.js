function Usuario(nombre, edad) {
  this.nombre = nombre;
  try {
    if (typeof edad != Number || edad < 1) {
      throw new Error(error);
    } else {
      this.edad = edad;
    }
  } catch (error) {
    console.log('La edad tiene que ser un número mayor a 1');
  }
}

document.getElementById('boton').addEventListener('click', function () {
  var objeto = new Usuario();
  objeto.nombre = document.getElementById('nombre').value;
  objeto.edad = document.getElementById('edad').value;
  var array = [];
  array.push(objeto);

  console.log(objeto);
});
