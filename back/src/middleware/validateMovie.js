const validateMovie = (req, res, next) => {
  const { title, director, year, rate, duration, genre, poster } = req.body;
  if (!title || !director || !year || !rate || !duration || !genre || !poster) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  if (typeof year !== "number" || typeof rate !== "number") {
    return res.status(400).json({ error: "Los datos deben ser números" });
  }
  next();
};
module.exports = validateMovie;
