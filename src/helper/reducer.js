import {pandetas} from '../data/pandetaInfo'
import {detail} from '../data/exportdata'
import clasify from '../helper/Clasifydata'
const initialState={
    List:clasify(),
    detail,
    selection:pandetas[0],
    loaded:false
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "showData":
            console.log(state);
            return {
                ...state
            }
        case "changeSelection":
            return {
                ...state,
                selection:action.data
          }
          case "changeLoaded":
            return {
                ...state,
                loaded:action.data
          }
          default:
              return {
              ...state
              }
    }
}