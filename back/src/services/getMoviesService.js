const axios = require("axios");

const getMoviesService = async () => {
  try {
    const movies = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    return movies.data;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getMoviesService;
