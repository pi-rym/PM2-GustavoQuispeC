class Pelicula {
    constructor(title, year, director, duration,rate,genre, poster) {
      this.title = title;
      this.year = year;
      this.director = director;
      this.duration = duration;
      this.rate = rate;
      this.genre = genre;
      this.poster = poster;
      
    }
  }
  
  class Repository {
    constructor() {
      this.peliculas = [];
    }
  
    getAllPeliculas() {
      return this.peliculas;
    }
  }
  
  // * Mapear películas
  const mapPeliculas = (pelicula) => {
    const cardPelicula = document.createElement("div");
    cardPelicula.innerHTML = `
      <p class="titulo">${pelicula.title}</p>
      <img class ="imagen" src="${pelicula.poster}" alt="${pelicula.title}"/>
      <p class ="director">Director: ${pelicula.director}</p>
      <p class="duracion">Duración: ${pelicula.duration}</p>
      <p class="rate">Calificación: ${pelicula.rate}</p>
      <p class="genre">Género: ${pelicula.genre}</p>
      <p class ="año">Año: ${pelicula.year}</p>
      `;
      cardPelicula.classList.add("tarjeta");
  
    return cardPelicula;
  };
  
  // * Renderizar películas
  
  const renderPeliculas = () => {
    const containersPeliculas = document.getElementById("contenedorPeliculas");
    containersPeliculas.innerHTML = "";
    const peliculas = repository.getAllPeliculas();
  
    const allPeliculas = peliculas.map(mapPeliculas);
  
    allPeliculas.forEach((card) => containersPeliculas.appendChild(card));
  };
  
  // * Hacer una solicitud HTTP de tipo GET para obtener las películas
  const listarPeliculas = () => {
    $.get(`https://students-api.2.us-1.fl0.io/movies`, function(data) {
      const peliculas = data.map(item => new Pelicula(item.title, item.year, item.director, item.duration, item.rate,item.genre,item.poster));
      repository.peliculas = peliculas;
      renderPeliculas();
    });
  };
  
  const repository = new Repository();
  
  listarPeliculas();



