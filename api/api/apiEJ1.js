var ms=5000;


function temporizador(ms){
    setTimeout(()=>{
       
        if (Notification.permission === 'granted') {
            var notificacion=new Notification("Mira este vídeo",{
                body:"Pincha para ir al vídeo"
        
            });
        
            notificacion.addEventListener("click", function(){
                window.open("apiEj1.video.html");
            });
        }
    },ms);
 
}


Notification.requestPermission().then(resp => {
  console.log("PERMISO:", resp); 
    if (resp === 'granted') {
       
        if(document.getElementById("contador")){
             var cuentaAtras=5;

             function haciaAtras(){

                 document.getElementById("contador").innerHTML=cuentaAtras;
                 //así sabe js que estoy en apiEj1.html
                 cuentaAtras--;

                 if(cuentaAtras>0){
                    setTimeout(haciaAtras,1000);
                 } else{
                    //salimos ya del bucle
                     temporizador(ms); 
                     
                 }

             }
           
             haciaAtras(); //para iniciarlo
             
        
        } // Solo ejecuta si da permiso
    }else{
        console.log("Usuario no da permiso");
    }
});

var video=document.getElementById("video");
if(video){

   video.addEventListener("contextmenu", function (event){
   event.preventDefault();
    }); //sin esto sale el menú izquierdo de opciones de vídeo

   video.addEventListener("click",function(event){
     

        switch(event.button){
            case 0:
                if(video.paused){
                    video.play();
                    
                }else{
                    video.pause();
                    //video.paused=true;
                    
                }
                break;
            case 2:
                var lugar=document.getElementById("duracion");
                //así js sabe que estoy en apiEj1video.html
                lugar.innerHTML=video.duration;
                break;
        }
  
})
}