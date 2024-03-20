const express = require("express");

const {
  getMoviesController,
  postMovieController,
} = require("../controllers/moviesController");
const validateMovie = require("../middleware/validateMovie");
const moviesRouter = express.Router();

moviesRouter.get("/", getMoviesController);
moviesRouter.post("/", validateMovie, postMovieController);

module.exports = moviesRouter;
