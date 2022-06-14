import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'
    style ={{
      backgroundSize:'cover',
      backgroundImage:'url("https://dl.moviesr.net/images/xpfVE.jpg")',
      backgroundPosition:'center center'

    }}
    >
      
        <div className='ban_content'>
            <h1 className='ban_title'>My Title</h1>
            <p className='description'>
                Movie description goes here
            </p>
            <div className='ban_btns' >
                <button className='ban_btn' >Play</button>
                <button className='ban_btn' >More Info</button>

            </div>

        </div>
    </div>
  )
}

export default Banner