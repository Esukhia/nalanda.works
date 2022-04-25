import React  from 'react'
import '../style/Nav.css'
import {useDispatch} from 'react-redux'
function Nav() {
  const dispatch=useDispatch();


  const handleColor=(checked)=>{
     dispatch({
       type:'changeTheme',
       data:checked
     })         
  }

  return (
    <header className="header">
    <h1 className="logo"><a href="/">པན་གྲུབ་བཅུ་བདུན།</a></h1>
  <ul className="main-nav">
      <li><a href="http://www.lopenling.org">Lopenling</a></li>
      <li><a href="#">Contact</a></li>
          
          <li><input type="checkbox" id='toggle' onChange={e=>handleColor(e.target.checked)}/>
          <label htmlFor='toggle' className='button'></label></li>

  </ul>
</header> 
  )
}

export default Nav