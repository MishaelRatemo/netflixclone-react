import React from 'react'
import './Header.css'
import '../App.css';

function Header() {
  return (
    <div className = "header">
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' />
      <img className='userAvatar'  src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png' alt='' />
    </div>
  )
}

export default Header
