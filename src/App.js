
import './App.css';
import {connect} from 'react-redux'
import Index from './component'
import {changeSelection} from "./helper/myAction.js"
import { withLDProvider } from 'launchdarkly-react-client-sdk';
function App() {
  
  return (
    <div className="App">

     <Index/>
    </div>
  );
}

const mapStateToProps= state=>{
  return {
    list:state.list
  }
}

const mapDispatchToProps= dispatch=>{
  return {
    changeSelection: ()=>dispatch(changeSelection())
  }
}

let clientId=process.env.NODE_ENV==='development'?'6269293a03fba314f6ecebb5':'6269293a03fba314f6ecebb6';

export default connect(mapStateToProps, mapDispatchToProps)(withLDProvider({
  clientSideID: clientId,
  user: {
      "key": "tenkus",
      "name": "tenzin kunsang",
      "email": "tenkus@esukhia.org"
  }
})(App));
