import {pandetas} from '../data/pandetaInfo'
import {detail} from '../data/exportdata'
import clasify from '../helper/Clasifydata'
const initialState={
    List:clasify(),
    detail,
    selection:pandetas[0],
    openWallpaper:false,
    colorTheme:'dark'
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "showData":
            console.log(state);
            return {
                ...state
            }
        case "changeSelection":
            if(action.data2){
                const data=pandetas.find(l=>l.name===action.data2)
                return {
                    ...state,
                    selection:data
                }
            }
            return {
                ...state,
                selection:action.data
          }
          case "changeOpenWallpaper":
              return {
                  ...state,
                  openWallpaper:!state.openWallpaper
              }
        case "changeTheme":{
             console.log(action.data)
            var root = document.querySelector(':root');
            if(action.data){
              root.style.setProperty('--navBackgroundColor', '#eee');
              root.style.setProperty('--mainBackgoundColor', 'grey');
              root.style.setProperty('--navColor', '#111');
              root.style.setProperty('--footerColor', 'black');
              root.style.setProperty('--footerBackgroundColor', 'white');
              root.style.setProperty('--mainColor', 'white');




            }
            else{
              root.style.setProperty('--navBackgroundColor', 'black');
              root.style.setProperty('--mainBackgoundColor', '#06113C');    
              root.style.setProperty('--navColor', 'white');
              root.style.setProperty('--footerColor', '#eee');
              root.style.setProperty('--footerBackgroundColor', 'black');
              root.style.setProperty('--mainColor', 'white');

            
            }
            console.log(action.data?"light":"dark")

            return {...state,
                colorTheme:action.data?"light":"dark"}
        }
          default:
              return {
              ...state
              }
    }
}