



function numeroMayor(){

    var nume1=document.getElementById("numero1").value;
    var nume2=document.getElementById("numero2").value;
    var nume3=document.getElementById("numero3").value;


if(nume1=="" || nume2=="" ||nume3==""){
    alert("Tienes campos sin rellenar");
    return;
}

var num1=parseInt(nume1);
var num2=parseInt(nume2);
var num3=parseInt(nume3);

if(isNaN(num1)!=false|| isNaN(num2)!=false || isNaN(num3)!=false){
    alert("Tienes campos no numéricos");
    return;
}




  if(num1>num2 && num1>num3){
   alert("El mayor numero es"+num1);
  }

   if(num2>num3 && num2>num1){
    alert("El mayor numero es"+num2);
  }

  if(num3>num2 && num3>num1){
    alert("El mayor numero es"+num3);
  }

  if(num1==num2 && num1==num3){
     alert("Los números son iguales");
  }
}

document.getElementById("boton").addEventListener("click",numeroMayor);


