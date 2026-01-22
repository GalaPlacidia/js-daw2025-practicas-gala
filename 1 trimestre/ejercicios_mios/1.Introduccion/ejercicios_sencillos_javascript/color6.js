


function cambiarColor(){

 
    
   
        color="red";
        document.body.style.backgroundColor=color;
    
    

}

function cambiarColor2(){

 
    
   
        color="white";
        document.body.style.backgroundColor=color;
    
    

}




document.getElementById("entra").addEventListener("mouseover",function(event){
    cambiarColor();
});

document.getElementById("entra").addEventListener("mouseout",function(event){
    cambiarColor2();
});



