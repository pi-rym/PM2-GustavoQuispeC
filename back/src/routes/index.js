const {Router} = require('express');
const moviesRouter = require('./MoviesRouter');

const router = Router();
router.use('/movies', moviesRouter);

module.exports = router;