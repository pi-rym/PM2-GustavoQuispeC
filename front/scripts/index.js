const renderPeliculas = require("./renderCards");
const axios = require("axios");

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

