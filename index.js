const request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    
    const data = JSON.parse(this.response);
    const contenedor = document.getElementById('list-group');

data.forEach((pelicula) => {
      
        // Creamos una tarjeta
        const tarjeta = document.createElement('li');
        tarjeta.setAttribute('class', 'card d-flex flex-column align-items-center');

        // Creamos el la cabecera y el cuerpo de la tarjeta
        const cabeceraTarjeta = document.createElement('div');
        cabeceraTarjeta.setAttribute('class', 'card-header text-center w-100 bg-body');

        const cuerpoTarjeta = document.createElement('div');
        cuerpoTarjeta.setAttribute('class', 'card-body d-flex flex-column justify-content-center align-items-center');

        // Creamos el encabezado y le asignamos el título de la película
        const titulo = document.createElement('h5');
        titulo.setAttribute('class', 'card-title fw-bold');
        titulo.textContent = pelicula.title;

        // Creamos el encabezado y le asignamos el título de la película
        const img = document.createElement("img");
        img.setAttribute('class', 'card-img');
        img.src = pelicula.image;
        img.alt = "Logo movie";

        // Creamos la párrafo y le asignamos la descripción de la película
        pelicula.descripcion = pelicula.description.substring(0, 150);

        const descripcion = document.createElement('p');
        descripcion.setAttribute('class', 'card-text');
        descripcion.textContent = `${ pelicula.descripcion }...`;

        // Agregamos la tarjeta
        contenedor.appendChild(tarjeta);

        // Agregamos la cabecera y el cuerpo a la tarjeta
        tarjeta.appendChild(cabeceraTarjeta);
        tarjeta.appendChild(cuerpoTarjeta);
        

        // Agregamos el título a la cabecera
        cabeceraTarjeta.appendChild(titulo);
        
        // Agregamos la imagen y descripción al cuerpo
        cuerpoTarjeta.appendChild(img);
        cuerpoTarjeta.appendChild(descripcion);
    });
    } else {

    const contenedor = document.getElementById('contenedor');
    const mensajeError = document.createElement('div');

    mensajeError.setAttribute('class', 'alert alert-danger');
    mensajeError.textContent = `Ups tenemos el error ${request.status}`;

    contenedor.appendChild(mensajeError);
    }
}

request.send();