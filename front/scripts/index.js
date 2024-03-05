console.log(tempData);

class RepositoryPeliculas{
    constructor(tempData){
        this.tempData = tempData;
    }
    getAllPeliculas (){
        return this.tempData;
    }
}   

const repositoryPeliculas = new RepositoryPeliculas(tempData);

function CreatetHTML(tempData) {
    const { title, year, director,duration,poster} = tempData;
    
    const titulo = document.createElement("h3");
    titulo.textContent = title;

    const año = document.createElement("h4");
    año.textContent = year; 
    año.classList.add("contenido");
   
    const director_ = document.createElement("h4");
    director_.textContent = director;
    director_.classList.add("contenido");


    const duracion = document.createElement("h4");
    duracion.textContent = duration;
    duracion.classList.add("contenido");
    
   

    const imagen = document.createElement("img");
    imagen.src = poster;
   

    const CuerpoCard = document.createElement("div");
    CuerpoCard.classList.add("cuerpo");
    CuerpoCard.appendChild(imagen);
    CuerpoCard.appendChild(director_);
    CuerpoCard.appendChild(duracion);
    CuerpoCard.appendChild(año);

    const TituloCard = document.createElement("div");
    TituloCard.appendChild(titulo);
    TituloCard.classList.add("titulo");

    const tarjeta = document.createElement("div");
    tarjeta.appendChild(TituloCard);
    tarjeta.appendChild(CuerpoCard);
    tarjeta.classList.add("tarjeta");

    return tarjeta;
}

function renderListPeliculas() {
    const container = document.getElementById("peliculas");
    container.innerHTML = "";

    const peliculas = repositoryPeliculas.getAllPeliculas();
    const peliculaElements = peliculas.map(CreatetHTML);

    peliculaElements.forEach(peliculas => {
        container.appendChild(peliculas);
    });
}
window.onload = renderListPeliculas;


