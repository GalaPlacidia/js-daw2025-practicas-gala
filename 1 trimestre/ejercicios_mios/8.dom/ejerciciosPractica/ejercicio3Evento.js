var eliminado1 = false;
var eliminado2 = false;
var eliminado3 = false;

var oculto1 = false;
var oculto2 = false;
var oculto3 = false;

document.getElementById('boton').addEventListener('click', function (event) {
  if (eliminado1 == false && oculto1 == true) {
    document.getElementById('parrafo1').style.display = 'block';
  }
  if (eliminado2 == false && oculto1 == true) {
    document.getElementById('parrafo2').style.display = 'block';
  }
  if (eliminado3 == false && oculto1 == true) {
    document.getElementById('parrafo3').style.display = 'block';
  }
});

//OCULTAR ELEMENTOS
document.getElementById('parrafo1').addEventListener('click', function (event) {
  document.getElementById('parrafo1').style.display = 'none';
  oculto1 = true;
});

document.getElementById('parrafo2').addEventListener('click', function (event) {
  document.getElementById('parrafo2').style.display = 'none';
  oculto2 = true;
});

document.getElementById('parrafo3').addEventListener('click', function (event) {
  document.getElementById('parrafo3').style.display = 'none';
  oculto3 = true;
});

//ELIMINAR ELEMENTOS

document
  .getElementById('parrafo1')
  .addEventListener('contextmenu', function (event) {
    event.preventDefault();
    document.body.removeChild(document.getElementById('parrafo1'));
    eliminado1 = true;
  });

document
  .getElementById('parrafo2')
  .addEventListener('contextmenu', function (event) {
    event.preventDefault();
    document.body.removeChild(document.getElementById('parrafo2'));
    eliminado2 = true;
  });

document
  .getElementById('parrafo3')
  .addEventListener('contextmenu', function (event) {
    event.preventDefault();
    document.body.removeChild(document.getElementById('parrafo3'));
    eliminado3 = true;
  });
