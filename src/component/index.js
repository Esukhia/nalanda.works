import React from 'react'
import Tree from './Tree'
import {prayer} from '../helper/prayerMarquee'
import Main from './Main'
import 'react-splitter-layout/lib/index.css';
import Nav from './Nav';

function Index(){
  return (
    <div>
      <Nav/>
    <div className='mainBody' style={{display:'flex'}}>
        <Tree/>
        <Main/>
    <footer style={{zIndex:999}}>
           <marquee >{prayer}</marquee>
           </footer>
            </div>
            </div>

  )
}

export default Index