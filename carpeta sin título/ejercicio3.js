let objeto_JSON=null; //aquí guardaremos la respuesta de la api
//
//FUNCIÓN QUE HACE LA PETICIÓN A LA API

async function buscaAPI(direccion){
    let respuesta_FETCH = await fetch(direccion);  //hacemos petición
    let respuesta_texto=await respuesta_FETCH.text(); //la convertimos
    let objeto2_JSON=JSON.parse(respuesta_texto);

    return objeto2_JSON; //tendrá un array con los datos 
}


async function cargarPersonajes(){


    let direccion = "https://rickandmortyapi.com/api/character";

    objeto_JSON=await buscaAPI(direccion);

  
    let divs;
    for(let i=0; i<objeto_JSON.results.length;i++){
     

       divs+= "<div> <img src="+objeto_JSON.results[i].image+">";
       divs+= "<p>"+objeto_JSON.results[i].name+"</p>";
       divs+= "<p>"+objeto_JSON.results[i].status+"</p>";
       divs+= "<p>"+objeto_JSON.results[i].species+"</p>";
       divs+= "<p>"+objeto_JSON.results[i].created+"</p> </div>";
       

       /*
        document.getElementById("imagen").innerHTML= objeto_JSON.results[i].image;
        document.getElementById("nombre").innerHTML=objeto_JSON.results[i].name;
        document.getElementById("status").innerHTML=objeto_JSON.results[i].status;
        document.getElementById("especies").innerHTML=objeto_JSON.results[i].species;
        document.getElementById("creado").innerHTML=objeto_JSON.results[i].species;
        */

    }


    
   document.getElementById("global").innerHTML+=divs;

}


async function cargarPersonajes2(){
   // cargarPersonajes();

    let direccion = objeto_JSON.info.next;

    objeto_JSON=await buscaAPI(direccion);

  
    let divs;
    for(let i=0; i<objeto_JSON.results.length;i++){
     

       divs+= "<div> <img src="+objeto_JSON.results[i].image+">";
       divs+= "<p>"+objeto_JSON.results[i].name+"</p>";
       divs+= "<p>"+objeto_JSON.results[i].status+"</p>";
       divs+= "<p>"+objeto_JSON.results[i].species+"</p>";
       divs+= "<p>"+objeto_JSON.results[i].created+"</p> </div>";
       

       /*
        document.getElementById("imagen").innerHTML= objeto_JSON.results[i].image;
        document.getElementById("nombre").innerHTML=objeto_JSON.results[i].name;
        document.getElementById("status").innerHTML=objeto_JSON.results[i].status;
        document.getElementById("especies").innerHTML=objeto_JSON.results[i].species;
        document.getElementById("creado").innerHTML=objeto_JSON.results[i].species;
        */

    }


    
   document.getElementById("global").innerHTML+=divs;

}


document.getElementById("boton").addEventListener("click",cargarPersonajes);
document.getElementById("boton2").addEventListener("click",cargarPersonajes2);
        
