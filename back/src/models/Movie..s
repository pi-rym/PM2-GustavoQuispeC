const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
  },
  year: {
    type: Number,
  },
  director: {
    type: String,
  },
  duration: {
    type: String,
  },
  genre: {
    type: [String],
  },
  rate: {
    type: Number,
  },
  poster: {
    type: String,
  },
});

const Movie = model("Movie", movieSchema);
module.exports = Movie;
