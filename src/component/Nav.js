import React from 'react'
import '../style/Nav.css'
function Nav() {
  return (
    <header className="header">
    <h1 className="logo"><a href="/">པན་གྲུབ་བཅུ་བདུན།</a></h1>
  <ul className="main-nav">
      <li><a href="#">Lopenling</a></li>
      <li><a href="#">Contact</a></li>
          
          <li><input type="checkbox" id='toggle'/>
          <label for='toggle' className='button'></label></li>

  </ul>
</header> 
  )
}

export default Nav