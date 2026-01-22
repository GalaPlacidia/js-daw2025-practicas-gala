
function fecha(){


    var inicio=document.getElementById("añoNacimiento").value;
    //OJO EL ID DEBE IR ¡¡SIEMPRE!! ENTRE COMILLAS SI NO NO LO LEE NULL!!!!
    var fecha=[];
    //console.log(fecha);
    fecha=inicio.split('-');
  //OJO EL VALOR FORMATEADO DE DATE VIENE CON GUIÓN NO CON / y cambia el orden de escritura
  //console.log(fecha);
    var año=fecha[0];
    var mes=fecha[1];
    var dia=fecha[2];

    var fechaActual= new Date();
    var añoActual=fechaActual.getFullYear();
    var mesActual=fechaActual.getMonth()+1;
    var diaActual=fechaActual.getDate();

    var años=((diaActual-dia)+((mesActual-mes)*30)+((añoActual-año)*360))/360;

    if(mesActual<mes || mesActual==mes && diaActual<dia){
        años--;
    }

    alert("Han transcurrido "+años+" años, aproximadamente desde que naciste");

}

document.getElementById("boton").addEventListener("click",fecha)