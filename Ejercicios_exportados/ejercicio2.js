

let nombre;

function pedirNombre(){

    nombre=prompt("Por favor, introduce tu nombre");

    if(nombre.length>0){
        myCallback(nombre);
        
    }else{
        prompt("No has introducido un nombre válido");
    }}

function myCallback(nombre){
    pedirNombre();
    document.getElementById("colorFavorito").innerHTML="Hola "+nombre+" Este es tu color favorito";
}

function negrita(){


document.getElementById("colorFavorito").innerHTML="<strong> Hola "+nombre+" Este es tu color favorito </strong>";
}

document.getElementById("boton").addEventListener("click",pedirNombre);
document.getElementById("negrita").addEventListener("click",negrita);

