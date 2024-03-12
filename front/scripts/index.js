const renderPeliculas = require('./renderCards');
const axios = require('axios');

// axios.get('https://students-api.up.railway.app/movies')
// .then((response) => {
//   console.log(response.data);
//   response.data.forEach(pelicula => {
//     renderPeliculas(pelicula);
//   });
// }).catch((err) => {
//   console.log(err.response.data.message);
// });

const recuperarPeliculas = async () => {
  try {
    const peliculasData = await axios.get('https://students-api.up.railway.app/movies');
    console.log(peliculasData);
    peliculasData.data.forEach(pelicula => {
      renderPeliculas(pelicula);
    });
    
  } catch (error) {
    console.log(error.response.data.message);
  }
  

};
recuperarPeliculas();


// $.get('https://students-api.up.railway.app/movies',(data)=>
//   data.forEach(renderPeliculas)
  
//   )

