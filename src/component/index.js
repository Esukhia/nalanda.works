import React,{useEffect} from 'react'
import Tree from './Tree'
import Main from './Main'
import 'react-splitter-layout/lib/index.css';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import Footer from './Footer'
import Wallpaper from './Wallpaper';
function Index(){

  const openWallpaper=useSelector(data=>data.openWallpaper)

useEffect(()=>{

},[])
if(!openWallpaper)
  return (
    <>
      <Nav />
      <div className="mainBody">
        <Tree />
        <Main />
      </div>
      <Footer />
    </>
  );

else{
  return <Wallpaper/>;            //homeWallpaper
}

}

export default Index