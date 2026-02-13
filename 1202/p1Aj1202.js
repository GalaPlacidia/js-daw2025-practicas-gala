/*let boton = document.getElementById('botonBuscar');
let parrafo = document.getElementById('resultado');

function buscar() {
  let busqueda = document.getElementById('usuarios').value;
  let busquedaNumero = parseInt(busqueda);
  let busquedaGenero = document.getElementById('genero').value;

  let url = `https://randomuser.me/api/?results=${busquedaNumero}`;
  fetch(url) //api de ejemplo
    .then((response) => {
      if (response.ok) {
        console.log('respuestaOK');
        return response.json();
        // Parsear la respuesta como JSON
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        console.log('entrando al for');
        if (
          (busquedaGenero === 'H' && data.results[i].gender === 'male') ||
          (busquedaGenero === 'M' && data.results[i].gender === 'female')
        ) {
          let pes = document.createElement('p');

          pes.innerHTML +=
            'Nombre: ' +
            data.results[i].name.first +
            'Apellido: ' +
            data.results[i].name.last;
          pes.innerHTML += data.results[i].location.street.name;

          let img = document.createElement('img');

          img.src = data.results[i].picture.medium;

          pes.appendChild(img);
          parrafo.appendChild(pes);
        }
      }
      console.log('Fin del for');
    })
    .catch((error) => {
      console.error('Error en la petición:', error);
    });
}

boton.addEventListener('click', buscar);
*/

let boton = document.getElementById('botonBuscar');
let parrafo = document.getElementById('resultado');

function buscar() {
  let busqueda = document.getElementById('usuarios').value || '1'; // Fix NaN
  let busquedaNumero = parseInt(busqueda);
  let busquedaGenero = document.getElementById('genero').value;

  // Fix URL + género
  let url = `https://randomuser.me/api/?results=${busquedaNumero}`;
  if (busquedaGenero === 'H') url += '&gender=male';
  else if (busquedaGenero === 'M') url += '&gender=female';

  console.log('URL:', url); // Debug

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      console.log('respuestaOK');
      return response.json();
    })
    .then((data) => {
      console.log('Data length:', data.results.length); // Debug

      parrafo.innerHTML = ''; // ← CRÍTICO: Limpia

      for (let i = 0; i < data.results.length; i++) {
        console.log('for i=' + i);

        let user = data.results[i];
        if (
          (busquedaGenero === 'H' && user.gender === 'male') ||
          (busquedaGenero === 'M' && user.gender === 'female')
        ) {
          let pes = document.createElement('p');

          // Fix: UNA innerHTML con <br>
          pes.innerHTML =
            'Nombre: ' +
            user.name.first +
            ' ' +
            user.name.last +
            '<br>' +
            user.location.street.name;

          let img = document.createElement('img');
          img.src = user.picture.medium;
          img.width = 60;
          img.alt = 'Foto';

          pes.appendChild(img);
          parrafo.appendChild(pes);
        }
      }
      console.log('Fin del for');
    })
    .catch((error) => {
      console.error('Error:', error);
      parrafo.textContent = 'Error: ' + error.message;
    });
}

boton.addEventListener('click', buscar);
