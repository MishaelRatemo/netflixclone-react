import React, { useEffect, useState } from 'react'
import axios from '../axios'
import './MovieScroller.css'
const baseURL = 'https://image.tmdb.org/t/p/original/';

function MovieScroller({ title, fetchURL, largeRow}) {

  const[movies,setMovies] = useState([])
  useEffect(() =>{
      async function fetchData(){
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
        console.log(request.data.results);
        return request;
      }
      fetchData();
  }, []);
  return (
    <div className='row'>
        {title}
        <div className='row_posters'>
          {movies.map(movie =>(
              <img 
                  key={movie.id}  
                  className={`row_poster ${largeRow && 'row_posterLarge'}`}
                  src={`${baseURL}${largeRow ? movie.poster_path : movie.backdrop_path}`} 
                  alt={movie.name} />
          ))}
          
           
        </div>
    </div>
  )
}

export default MovieScroller