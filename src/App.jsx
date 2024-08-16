import './App.css'
import Header from './Comp/Header'
import Dis from './Comp/Dis';
import Controls from './Comp/Controls'
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux';
import Msg from './Comp/Msg';
function App() {
 const {val}= useSelector(store=>store.privacy)
 console.log(val);
 
  return (
     <center className='Container'>
        <Header></Header>
        { !val ? <Dis></Dis> : <Msg></Msg>}
        <Controls></Controls>
     </center>
        
        
  )
}

export default App
