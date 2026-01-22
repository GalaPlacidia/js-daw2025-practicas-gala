function mostrarDatos(){

    let id=document.getElementById("idProducto").value;
    let idInt=parseInt(id);
    
    
 
    
    let url="https://dummyjson.com/products/"+idInt;
    
    
    
    fetch(url) //api de ejemplo 
    .then((response) => {
        if (response.ok) {
         return response.json(); // Parsear la respuesta como JSON
        }else{
            document.getElementById("status").innerHTML = 400;
            throw new Error(`HTTP error! status: ${response.status}`); }
        })
        .then((data) => {
           
            let idRdo=document.getElementById("idProduct");
            let tituloRdo=document.getElementById("tituloProducto");
            let precioRdo=document.getElementById("precioProducto");
            
           idRdo.innerHTML=  data.id;
           tituloRdo.innerHTML=data.title;
           precioRdo.innerHTML=data.price;

           document.getElementById("status").innerHTML = 200;
          
         /*})
        .catch((error) => {
        console.error('Error en la petición:', error);
        });*/

        //SEGUNDA PARTE POST

        let url2="https://httpbin.org/post";
        
        //MI OBJETO

        let datos2={
            id: data.id,
            title: data.title,
            price: data.price
        }

       
     

     //LLAMO AL URL
        return fetch(url2, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' },
            body: JSON.stringify(datos2) })
        })
        //CIERRO AQUÍ EL PRIMER .THEN() UNA VEZ QUE DATOS2 HA ACCEDIDO A DATA
        // y he enlazado el get y post desde fetch(url2)
    
            .then(response => { 
                if (response.ok) {
                    return response.json(); 
                }else{
                    
                    document.getElementById("status").innerHTML = 400;
                  throw new Error(`HTTP error! status: ${response.status}`); }
            })
            .then(datos2 => {

            
            let tituloDevuelto=document.getElementById("titulo2");
            
          
           tituloDevuelto.innerHTML=datos2.json.title;
           //OJO HAY QUE PONER .JSON

           document.getElementById("status").innerHTML = 200;})

            //console.log('Respuesta del servidor:', data); })
            .catch(error => {
            console.error('Error en la petición:', error);
            });
    }
        document.getElementById("boton").addEventListener("click",mostrarDatos);