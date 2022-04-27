import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css';
import '../style/Tree.css'
import { useSelector } from 'react-redux';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader } from 'react-pro-sidebar';
function Tree_Side() {
const data=useSelector(l=>l.List)
const gotoaddress=(textId)=>{
  window.open(`http://parkhang.lopenling.org/texts/${textId}`, '_blank');
}
var tibCount=['༡','༢','༣','༤','༥','༦','༧','༨','༩','༡༠','༡༡','༡༢','༡༣','༡༤','༡༥','༡༦','༡༧']

  return (
    <ProSidebar className='sidebar'>
     <SidebarHeader>
     <h1 className='sidebar-header'>ནང་དོན་དཀར་ཆག</h1>
     </SidebarHeader>

    <Menu iconShape="circle">
   {data.map((d,i)=>{
       return (
        <SubMenu title={tibCount[i]+'. '+d.name} key={d.id}>
          {d.children && d.children.map(
               category=><SubMenu title={category.cat_name} key={category.cat_id+d.id}>
                 {category.children.map(
                     list=>
                       <MenuItem key={list.Text_Id+Math.random()} onClick={()=>gotoaddress(list.Text_Id)}>
                         {list.Text_Title_TY}
                         </MenuItem>
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