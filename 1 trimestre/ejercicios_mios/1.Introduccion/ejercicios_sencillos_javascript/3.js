let nombre = window.prompt("Introduce una cadena de texto");

let numero=0;

for(i=0; i<nombre.length;i++){
    if(nombre[i]=='a'){
        numero++;
    }
    else if(nombre[i]=='A'){
        numero++;
    }
}

alert("La cadena tiene un total de "+numero+" letras 'a'");