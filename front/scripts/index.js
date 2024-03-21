const renderPeliculas = require("./renderCards");
const createMovie = require("./createMovie");
const axios = require("axios");

// Verificamos si estamos en la página index.html comprobando la existencia del id contenedorPeliculas
if (document.getElementById("contenedorPeliculas")) {
  const recuperarPeliculas = async () => {
    try {
      const peliculasData = await axios.get("http://localhost:3000/movies");
      console.log(peliculasData);
      peliculasData.data.forEach((pelicula) => {
        renderPeliculas(pelicula);
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  recuperarPeliculas();
}
// Verificamos si estamos en la página addMovie.html comprobando id movieForm
const movieForm = document.getElementById("movieForm");
if (movieForm) {
  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/movies",
        createMovie()
      );
      console.log(response);
      alert("¡Película registrada correctamente!");

      // Limpiar los campos del formulario
      const formInputs = movieForm.querySelectorAll(
        'input[type="text"], input[type="number"]'
      );
      formInputs.forEach((input) => {
        input.value = "";
      });

      movieForm.classList.remove("was-validated");
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data.message);
      } else {
        console.error('Error "response.data"');
      }
    }
  };

  movieForm.addEventListener("submit", submitForm);
}
