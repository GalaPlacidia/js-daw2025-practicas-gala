var cadena = document.getElementById("cadenaInicial").value;


function inversa(){
    //si dejo esto fuera de la función no lee la cadena
    var cadena = document.getElementById("cadenaInicial").value;

    var cadena_array=cadena.split('');
    //si no declaro el array vacío no sabe que es un array
    var cadena_nueva=[];
    var conteo=0;
//for(i=cadena_array.length; i>0;i--) SE COME LA G DE GANDIA{
    for(i=cadena_array.length-1; i>=0;i--){
        cadena_nueva[conteo]=cadena_array[i];
        conteo++;
    }

    document.getElementById("inversa").value=cadena_nueva.join('');
}

function mayusculas(){
    //si dejo esto fuera de la función no lee la cadena
    var cadena = document.getElementById("cadenaInicial").value;

    var cadena_mayus=cadena.toUpperCase();

    

    document.getElementById("mayus").value=cadena_mayus;
}

function repetida(){
    //si dejo esto fuera de la función no lee la cadena
    var cadena = document.getElementById("cadenaInicial").value;

    var cadena_repetida=[];
    var cadena_repetida2=[];
    var conteo=3;

    if(conteo!=0){
        for(i=0; i<cadena.length;i++){
            cadena_repetida[i]=cadena[i];
            
            conteo--;
            
        }

        cadena_repetida2+=cadena_repetida;
        
    }

    document.getElementById("repe").value=cadena_repetida2;
    
}


function inversaMayus(){

    var cadena = document.getElementById("cadenaInicial").value;

    var cadena_array=cadena.split('');
   
    var cadena_nueva=[];
    var conteo=0;

    for(i=cadena_array.length-1; i>=0;i--){
        cadena_nueva[conteo]=cadena_array[i];
        conteo++;
    }

     var cadena_mayus=cadena_nueva.join('').toString().toUpperCase();

    document.getElementById("inverMayus").value=cadena_mayus;
}

document.getElementById("boton").addEventListener("click",inversa);
document.getElementById("boton").addEventListener("click",mayusculas);
document.getElementById("boton").addEventListener("click",repetida);
document.getElementById("boton").addEventListener("click",inversaMayus);