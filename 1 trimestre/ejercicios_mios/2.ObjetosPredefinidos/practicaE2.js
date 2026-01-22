
function hola(){
    var palabra="hola";
    var palabra_array=palabra.split('');
    for(i=0;i<palabra.length;i++){
        
      palabra_array[i];
      document.getElementById("columna"+i).innerHTML=palabra_array[i];

    }
}

document.getElementById("boton").addEventListener("click",hola)