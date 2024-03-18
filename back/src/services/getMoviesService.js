const Movie = require("../models/Movie..s");
let Movies = [];

const getMoviesService = async () => {
  try {
    Movies = await Movie.find();
    return Movies;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getMoviesService;
