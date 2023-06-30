import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement,reset } from "./actions/counterActionCreator";

const App = () =>{

  const counter = useSelector(state => state.a)
  const dispatch = useDispatch()

  return(
    <div>
     <h2>{counter}</h2>
     <button onClick={()=>dispatch(increment(2))}>Increment</button>
     <button onClick={()=>dispatch((decrement(1)))}>Decrement</button>
     <button onClick={()=>dispatch(reset())}>Rest</button>
    </div>
  )
}
export default App;