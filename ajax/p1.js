
fetch('https://randomuser.me/api/')//api de ejemplo 
.then((response) => {
    if (response.ok) {
    return response.json(); // Parsear la respuesta como JSON
    } else{
        throw new Error(`HTTP error! status: ${response.status}`); }
        }
    )
    .then((data) => {

        let lugarImagen=document.getElementById("imagen");
        let lugarMail=document.getElementById("mail");
        let lugarDireccion=document.getElementById("direccion");
        let lugarEstado=document.getElementById("estado");

       
        lugarDireccion.innerHTML=data.results[0].location.street.number +
        " "+data.results[0].location.street.name;
        lugarEstado.innerHTML= data.results[0].location.state;
        lugarImagen.src=data.results[0].picture.medium;

        lugarMail.innerHTML= data.results[0].email;

    console.log('Datos recibidos:', data); })
    .catch((error) => {
    console.error('Error en la petición:', error);
    });

