function createMovie() {
  let title = document.getElementById("title").value;
  let year = parseInt(document.getElementById("year").value);
  let director = document.getElementById("director").value;
  let duration = document.getElementById("duration").value;
  let genre = document.getElementById("genre").value.split(",");
  let rate = parseFloat(document.getElementById("rate").value);
  let poster = document.getElementById("poster").value;

  let movie = {
    title: title,
    year: year,
    director: director,
    duration: duration,
    genre: genre,
    rate: rate,
    poster: poster,
  };
  console.log(movie);
  return movie;
}
module.exports = createMovie;
