import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css';
import '../style/Tree.css'
import clasify from '../helper/Clasifydata';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader } from 'react-pro-sidebar';
function Tree_Side() {
   var  data=clasify();
    console.log(data)
  return (
    <ProSidebar>
     <SidebarHeader>
     <h1 style={{textAlign:"center"}}>པན་གྲུབ་བཅུ་བདུན།</h1>
     </SidebarHeader>


    <Menu iconShape="circle">
   {data.map(d=>{
       return (
        <SubMenu title={d.name}>
          {d.children && d.children.map(
               category=><SubMenu title={category.cat_name}>
                 {category.children.map(
                     list=><>
                       <MenuItem key={list.Text_Title_TY}>{list.Text_Title_TY}</MenuItem>
                          </>
                    )} 
                 </SubMenu>
               )
           }
       </SubMenu>
       )   
      })}
    </Menu>
  </ProSidebar>

  )
}

export default Tree_Side