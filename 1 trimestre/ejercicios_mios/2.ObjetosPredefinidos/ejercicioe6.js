
function fecha(){
    var fecha= new Date ();

    var dia=fecha.getDay();
    

    switch(dia){
        case 1:
            dia="lunes";
            break;

        case 2:
            dia="martes";
            break;

        case 3:
            dia="miércoles";
            break;

        case 4:
            dia="jueves";
            break;

        case 5:
            dia="viernes";
            break;

        case 6:
            dia="sábado";
            break;

        case 7:
            dia="domingo";
            break;

    }

    var meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    var mes=fecha.getMonth();

    alert("Hoy es "+dia+", "+fecha.getDate()+" de "+meses[mes]+" de "+fecha.getFullYear());

}

document.addEventListener("click",fecha)