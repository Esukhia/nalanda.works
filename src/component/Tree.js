import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css';
import addTibetanShay from "../helper/addTibetanShay";
import '../style/Tree.css'
import { useSelector,useDispatch } from 'react-redux';
import classname from 'classnames'
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader } from 'react-pro-sidebar';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';


function Tree_Side({flags}) {
const data=useSelector(l=>l.List);
const dispatch=useDispatch();
const selection=useSelector(l=>l.selection);
const gotoaddress=(textId)=>{
  window.open(`http://parkhang.lopenling.org/texts/${textId}`, '_blank');
}
var tibCount=['༡','༢','༣','༤','༥','༦','༧','༨','༩','༡༠','༡༡','༡༢','༡༣','༡༤','༡༥','༡༦','༡༧']
if(flags.showContextListSidebarNalandaWeb)
return (
    <ProSidebar className='sidebar'>
     <SidebarHeader>
     <h1 className='sidebar-header'>ནང་དོན་དཀར་ཆག</h1>
     </SidebarHeader>

    <Menu iconShape="circle">
   {data.map((d,i)=>{
       return (
        <SubMenu title={tibCount[i]+'. '+d.name} key={d.id} onClick={()=>dispatch({
          type:'changeSelection',
          data2:d.name
        })}  className={d.name===selection.name?classname('active-treeItem'):null}>
          {d.children && d.children.map(
               category=><SubMenu title={category.cat_name} key={category.cat_id+d.id}>
                 {category.children.map(
                     list=>
                       <MenuItem key={list.Text_Id+Math.random()}
                       onClick={()=>gotoaddress(list.Text_Id)}>
                         {addTibetanShay(list.Text_Title_TY)}
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

else return null
}

export default withLDConsumer()(Tree_Side)