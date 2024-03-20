const Movie = require("../models/Movie");

const getMoviesService = async () => {
  try {
    const Movies = await Movie.find();
    return Movies;
  } catch (error) {
    console.log(error.message);
  }
};

const postMovieService = async (movie) => {
  try {
    const newMovie = await Movie.create(movie);
    return newMovie;
  } catch (error) {
    throw Error("Error al crear la pelicula");
  }
};
module.exports = { getMoviesService, postMovieService };
