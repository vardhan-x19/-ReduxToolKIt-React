import { useDispatch } from "react-redux";
import { useRef } from "react";
import { increment,decrement,add,sub } from "../Store";
import { toggle } from "../Store";

function Controls() {
  const data= useRef();
  const dispatch=useDispatch();
  const inc=()=>{
    dispatch(increment()); 
  }
  const dec=()=>{
    dispatch(decrement()); 
  }
  const addd = () => {
    dispatch(add(data.current.value)); // Pass the value directly
    data.current.value = ""; // Clear the input field
  }
  
  const subb =()=>{
    dispatch(sub(data.current.value));  
    data.current.value="";
  }
  const privacyFunc=()=>{
    console.log('btn cliked');
    dispatch(toggle()); 
  }
    return (
        <>
        <div class="col-lg-6 mx-auto">
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={inc}   >+1</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={dec} >-1</button>
              <button type="button" class="btn btn-danger" onClick={privacyFunc}  >Privacy</button>
            </div>
        </div>
        <div className="col-lg-6 mx-auto controls">
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <input className="text" type="text"ref={data} />
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={addd}  >add</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={subb}    >sub</button>
            </div>
        </div>
        </>
    
    )
}
export default Controls;