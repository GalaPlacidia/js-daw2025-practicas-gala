
function fecha(){


    var inicio=document.getElementById("año").value;
    
    var fecha=[];

    //console.log(fecha);
    fecha=inicio.split('/');

    if(fecha.length<3){
        alert("Formato de fecha incorrecta, usa /");
        return;
    }
  //OJO EL VALOR FORMATEADO DE DATE VIENE CON GUIÓN NO CON / y cambia el orden de escritura
  //console.log(fecha);
    var año=fecha[0];
    var mes=fecha[1];
    var dia=fecha[2];
    alert(año.length);
    if(año.length!=2 && año.length!=4){
        alert("Formato de fecha incorrecta. El año no tiene 2 ó 4 caracteres");
        return;
    }

    if(mes.length==0 || mes.length>2|| dia.length==0 || dia.length>2){
        alert("Formato de fecha incorrecta. El día o el mes tienen 0 o más de dos caracteres");
        return;
    }

    
  

    alert("Gracias por introducir la fecha");
    
}

document.getElementById("boton").addEventListener("click",fecha)