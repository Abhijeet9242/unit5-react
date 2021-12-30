import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"


function App() {

  const [count,SetCount] = useState(0)

  const SetValue = (value) => {
    // SetCount(count+1)
    if(value === 1){
      SetCount(count+value)
    }
    else if(value === -1){
      SetCount(count+value)
    }
    else if(value === 2){
      SetCount(count*value)
    }
  }

  if(count < 0){
    return <h1>Click till postive value </h1>
  }
  if(count >300){
    return <h1>Maximum counter Reached </h1>
  }
  

  return (
    <div className="App">
    <h1>Counter which can Increment ,Decrement and Double the value</h1>
    <h2>Counter:{count}</h2>
    <div className='btndiv'>
      <button onClick={()=>SetValue(1)}>ADD1</button>
      <button  onClick={()=>SetValue(-1)}>SUB1</button>
      <button  onClick={()=>SetValue(2)}>DOUBLE</button>
    </div>
    <div>
    {count > 0 && (<h3>Counter is {count%2===0 ? "Even" : "Odd"}</h3>)}
      
    </div>
    </div>
  );
}

export default App;
