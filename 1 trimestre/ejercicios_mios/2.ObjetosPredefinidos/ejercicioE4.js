



function conversorNumerico(){
    var num=document.getElementById("cadenaInicial").value;
    //OJO NUM ES STRING, SI NO SE CONVIERTE CON PARSEINT LAS CONVERSIONES NO VAN
    var numero=parseInt(num);
    var numeroBinario=numero.toString(2);
    var numeroOctal=numero.toString(8);
    var numeroHexadecimal=numero.toString(16);

    //TH Y TD NO TIENEN VALUE,EL INPUT DEL FORMULARIO SÍ 
   document.getElementById("binario").innerText=numeroBinario;
   document.getElementById("octal").innerText=numeroOctal;
   document.getElementById("hexadecimal").innerText=numeroHexadecimal;
}



document.getElementById("boton").addEventListener("click",conversorNumerico)

