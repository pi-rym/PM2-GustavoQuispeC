
const SeccionPelicula = document.getElementById('contenedorPeliculas')

function renderPeliculas(movie){
const pelicula = document.createElement("article")
const containerPeliculas= document.createElement("div")

pelicula.classList.add('contenedorTarjeta');
containerPeliculas.classList.add('tarjeta');

containerPeliculas.innerHTML=`
<h3 class="titulo">${movie.title}</h3>
<img class="imagen" src="${movie.poster}" alt="${movie.title}">
<p class="director"><strong>Director: </strong> ${movie.director}</p>
<p class="duracion"><strong>Duracion: </strong> ${movie.duration}</p>
<p class="genre"><strong>Genero: </strong> ${movie.genre}</p>
<p class="rate"><strong>rate: </strong> ${movie.rate}</p>
<p class="año"><strong>rate: </strong> ${movie.year}</p>
`
SeccionPelicula.appendChild(pelicula);
pelicula.appendChild(containerPeliculas);

}
module.exports = renderPeliculas;