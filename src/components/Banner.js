import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'
    style ={{
      backgroundSize:'cover',
      backgroundImage:'url("https://static.onecms.io/wp-content/uploads/sites/6/2020/03/BLK315A_0344b-2000.jpg")',
      backgroundPosition:'center center'

    }}
    >
      
        <div className='ban_content'>
            <h1 className='ban_title'>Black Lightening</h1>
            <p className='description'>
            'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,            </p>
            <div className='ban_btns' >
                <button className='ban_btn' >Play</button>
                <button className='ban_btn' >More Info</button>

            </div>
            <div className='bottomFade'></div>
        </div>
    </div>
  )
}

export default Banner