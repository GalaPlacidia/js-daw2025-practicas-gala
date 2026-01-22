
function revisarDatos(){

if ( document.getElementById("nombre").value.length!=0
&& document.getElementById("edad").value.length!=0
&& document.querySelector("input[name='género']:checked").value!=null

) 

  {
    var nombre=  document.getElementById("nombre").value;
    var edad= document.getElementById("edad").value;
    var genero=document.querySelector("input[name='género']:checked").value;

    document.getElementById("bienvenidaUsuario").innerHTML="Hola "+nombre+" tienes "+edad+ " años y te identificas como "+genero;
  }else{
    
    document.getElementById("bienvenidaUsuario").innerHTML="Por favor, rellena todos los campos correctamente";
  }

}

document.getElementById("boton").addEventListener("click",revisarDatos);