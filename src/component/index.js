import React from 'react'
import List from './ListOfPan'
import Desc from './Desc'
import Tree from './Tree'
import {prayer} from '../helper/prayerMarquee'
function Index(){
  return (
    <div className='mainBody'>
      
      <div className='absoluteBackground'></div>
      <div className='sidebar'>
        <Tree/>
      </div>
      <main>

         <hr/>
         <Desc/>
         <List/>
         
    </main> 
    <footer style={{zIndex:999}}>
           <marquee >{prayer}</marquee>
           </footer>
            </div>
  )
}

export default Index