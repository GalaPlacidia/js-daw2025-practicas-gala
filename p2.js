
document.getElementById("boton").addEventListener("click",()=>{
    console.log("CLICK"); 
let segundos=document.getElementById("segundos").value;

let usuario=document.getElementById("usuario").value;

let segundosInt=parseInt(segundos);

let usuarioInt=parseInt(usuario);

       


let url="https://reqres.in/api/users/"+usuarioInt+"?delay="+segundosInt;



fetch(url) //api de ejemplo 
.then((response) => {
    if (response.ok) {
    return response.json(); // Parsear la respuesta como JSON
    }else{
        
    throw new Error(`HTTP error! status: ${response.status}`); }
    })
    .then((data) => {
       
        let rdo=document.getElementById("resultado");
        let rdo2=document.getElementById("resultado2");
       rdo.innerHTML=  data.data.id
       rdo2.innerHTML=data.data.email;


       //SEGUNDA PARTE

       const datos =  data.data;
       //API de prueba,los datos no se guardan realmente pero obtienes una respuesta simulada 
       fetch('https://httpbin.org/post', {
       method: 'POST', headers: {
       'Content-Type': 'application/json' },
       body: JSON.stringify(datos) })
       .then(response => { if (response.ok) {
       return response.json(); }else{
       throw new Error(`HTTP error! status: ${response.status}`); }
       })
       .then(data => {
       
           let rdo3=document.getElementById("resultado3");
           rdo3.innerHTML+=data.json.first_name;
       //console.log('Respuesta del servidor:', data); 
       })
       .catch(error => {
       console.error('Error en la petición:', error);
       });

     })
    .catch((error) => {
    console.error('Error en la petición:', error);
    });
});




   