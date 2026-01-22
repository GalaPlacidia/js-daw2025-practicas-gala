
function fecha(){


    var inicio=prompt("¿Qué día naciste? YYYY/MM/DD");

    var fecha=[];
    fecha=inicio.split('/');


    var año=fecha[0];
    var mes=fecha[1];
    var dia=fecha[2];

    var fechaActual= new Date();
    var añoActual=fechaActual.getFullYear();
    var mesActual=fechaActual.getMonth();
    var diaActual=fechaActual.getDay()+1;

    var dias=(diaActual-dia)+((mesActual-mes)*30)+((añoActual-año)*360);

    var mensaje=document.getElementById("mensaje").textContent="Han transcurrido "+dias+", aproximadamente desde que naciste";

}

document.addEventListener("click",fecha)
