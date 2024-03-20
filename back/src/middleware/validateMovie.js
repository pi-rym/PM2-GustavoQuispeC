const validateMovie = (req, res, next) => {
  const { title, director, year, rate, duration, genre, poster } = req.body;
  if (!title || !director || !year || !rate || !duration || !genre || !poster) {
    return res.status(400).json({ error: "Faltan datos" });
  }
  if (typeof year !== "number" || typeof rate !== "number") {
    return res.status(400).json({ error: "Los datos deben ser números" });
  }
  if (rate < 0 || rate > 10) {
    return res
      .status(400)
      .json({ error: "El rate debe ser un número entre 0 y 10" });
  }
  if (!Array.isArray(genre) || genre.length === 0) {
    // Verificamos que el array no esté vacío
    return res
      .status(400)
      .json({ error: "El campo genre debe ser un array no vacío" });
  }
  if (genre.some((g) => g.trim() === "")) {
    // Verificamos que no haya strings vacíos en el array
    return res
      .status(400)
      .json({ error: "El campo genre no debe contener strings vacíos" });
  }
  next();
};
module.exports = validateMovie;
