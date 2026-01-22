

function crearTabla(){

    var palabra=document.getElementById("cadenaInicial").value;
    var palabra_array=palabra.split('');
    

    for(i=0;i<palabra_array.length;i++){
       
        var nuevaColumna= document.createElement("td");
        //SI NO HAGO ESTO, CREO LA NUEVA COLUMNA PERO NO LA AÑADO A LA FILA EXISTENTE
        fila.appendChild(nuevaColumna);
    }
}

function hola(){
    var palabra=document.getElementById("cadenaInicial").value;
    var palabra_array=palabra.split('');

    for(i=0;i<palabra_array.length;i++){
        
      palabra_array[i];
      document.getElementsByTagName('td')[i].innerText=palabra_array[i];

    }
}


document.getElementById("boton").addEventListener("click",crearTabla)
document.getElementById("boton").addEventListener("click",hola)