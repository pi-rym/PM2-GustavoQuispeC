const { Router } = require("express");
const getMoviesController = require("../controllers/moviesController");

const moviesRouter = Router();
moviesRouter.get("/", getMoviesController);

module.exports = moviesRouter;
