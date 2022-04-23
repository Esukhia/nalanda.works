import {detail} from '../data/exportdata'
import {category} from '../data/category'
import { pandetas} from '../data/pandetaInfo'

function clasify(){    //get Detail of each pandata 


const findCategory=(id,cat)=>{
  let data=detail.filter(item=>{
        var value=item.Text_Code;
        var codeSplit=value.split('-');
        return parseInt(codeSplit[0],10)===id && parseInt(codeSplit[1],10)===cat
    })
  
    return data
}
// console.log(findCategory(1,3))
// const findCategory=(id,cat)=>{
//     console.log(cat)
//     return null
// }


var mapListToCategory=(Id)=>{
    let newCategory;   
 
    newCategory=category.map(cat=>{
        return {
           ...cat,
           children:findCategory(Id,cat.cat_id)
       }
    })
    return newCategory;
}


var mapCategoryToPandeta= pandetas.map(pandeta=>{
   return {...pandeta,
             children:mapListToCategory(pandeta.code)
            } 
 })


 
return mapCategoryToPandeta

}


export default clasify