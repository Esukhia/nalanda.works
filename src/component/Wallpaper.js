import React from 'react'
import '../style/Wallpaper.css'
import {useDispatch} from 'react-redux'
function Wallpaper() {

    const dispatch=useDispatch();

  return (
    <div className='Wallpaper'>
       
        <button onClick={()=>dispatch({type:'changeOpenWallpaper'})}> click </button>
    </div>
  )
}

export default Wallpaper