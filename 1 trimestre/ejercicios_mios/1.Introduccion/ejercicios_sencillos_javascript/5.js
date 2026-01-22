


function cambiarColor(colorEscogido){

 
    
    if(colorEscogido=='ROJO'){
        color="red";
        document.body.style.backgroundColor=color;
    
    }

    if(colorEscogido=='VERDE'){
        color="green";
        document.body.style.backgroundColor=color;
        
    }

    if(colorEscogido=='AZUL'){
        color="blue";
        document.body.style.backgroundColor=color;
    
    }

}

document.getElementById("botonR").addEventListener("click",function(event){
    cambiarColor('ROJO');
});

document.getElementById("botonV").addEventListener("click",function(event){
    cambiarColor('VERDE');
});

document.getElementById("botonA").addEventListener("click",function(event){
    cambiarColor('AZUL');
});

