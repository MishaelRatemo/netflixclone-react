import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from 'axios'
import requests from './APIrequests'

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.netflixOriginals);
      setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
      );
      return request;
    }
    fetchData();
  },[]);

 console.log(movie)

  return (
    <header>
    <div className='banner'
    style ={{
      backgroundSize:'cover',
      // backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      backgroundImage:'url("https://static.onecms.io/wp-content/uploads/sites/6/2020/03/BLK315A_0344b-2000.jpg")',
      // backgroundPosition:'center center',
    }}
    >
      
        <div className='ban_content'>
            <h1 className='ban_title'>Black LIghtening</h1>
            {/* <h1>{movie?.title || movie?.name || movie?.original_name}</h1> */}
            <h4 className='description'>
                 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,            
                {/* {movie?.overview} */}
            </h4>

            <div className='ban_btns' >
                <button className='ban_btn'>Play</button>
                <button className='ban_btn'>More Info</button>
            </div>  
                      
        </div>
    </div>
    <div className='bottomFade'></div>

    </header>
    
  )
}

export default Banner