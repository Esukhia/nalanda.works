import React,{useEffect} from 'react'
import Tree from './Tree'
import Main from './Main'
import 'react-splitter-layout/lib/index.css';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import Footer from './Footer'
import Maintenance from './Maintenance';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

function Index({flags}){

  const openWallpaper=useSelector(data=>data.openWallpaper)

useEffect(()=>{

},[])
if(!flags.underMaintenance)
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
  return <Maintenance/>;            //Maintenance page
}

}

export default withLDConsumer()(Index)