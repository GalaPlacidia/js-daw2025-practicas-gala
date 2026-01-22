
var colorCorrecto=false;

do{
var color=prompt("Qué color quieres (R: rojo, V:verde, A:azul?");


if(color=='R'){
    color="red";
    document.body.style.backgroundColor=color;
    colorCorrecto=true;
}

if(color=='V'){
    color="green";
    document.body.style.backgroundColor=color;
     colorCorrecto=true;
}

if(color=='A'){
    color="blue";
    document.body.style.backgroundColor=color;
     colorCorrecto=true;
}
}while(colorCorrecto!=true);

