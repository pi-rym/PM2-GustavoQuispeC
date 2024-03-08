const renderPeliculas=require('./renderCards');

$.get('https://students-api.2.us-1.fl0.io/movies',(data)=>
  data.forEach(renderPeliculas)
  
  )
