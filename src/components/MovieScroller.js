import React from 'react'

function MovieScroller({ title, fetchURL, largeImage}) {
  return (
    <div className='scroll'>
        {title}
        <div className='poster'>
            <img src='https://flxt.tmsimg.com/assets/p14166741_b_h8_ai.jpg' alt='' />
        </div>
    </div>
  )
}

export default MovieScroller