



function mayor(){
    var numeroLetra=document.querySelectorAll('input');
    //OJO ESTO SON ELEMENTOS INPUT TODOS JUNTOS
    //se pueden recorrer con un for
    var numeroL=[];
    var numero=[];

     for(i=0; i<numeroLetra.length;i++){
           numeroL[i]=numeroLetra[i].value;
           //AQUÍ GUARDO CADA VALOR que leo CON VALUE (INPUT FORMULARIO) EN EL ARRAY NUMEROL
           //EL FIN ES GUARDAR EN NUMEROL LOS VALORES "INPUT"
    }

    for(i=0; i<numeroL.length;i++){
           
           numero[i]=parseInt(numeroL[i]);
           //AQUÍ CONVIERTO EN NÚMEROS EL LISTADO de strings (por usar value)
     }    
    

    var mayor=0;
    
    for(i=0; i<numero.length;i++){
           if(numero[i]>mayor){
            mayor=numero[i];
           }
    }

    alert("El número mayor es "+mayor);
    
}



document.getElementById("boton").addEventListener("click",mayor)

