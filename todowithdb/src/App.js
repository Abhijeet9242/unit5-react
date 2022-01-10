
import './App.css';
import React, { useState,useEffect } from "react";


function App() {
 const[text,setText] = useState("")
//  const[todos,setTodos] = useState([])
 const[todos,setTodos] = useState([])

useEffect(() => {
  getTodo()
},[])

const getTodo = () => {
  fetch("http://localhost:3005/todos")
  .then((d) => d.json())
  .then((res) => {
    // console.log(res)
    setTodos(res)
  })
}

 const handleChange = (e) => {
  // console.log(e)
  setText(e.target.value)
 }

 const handleclick = () => {
  // setTodos([...todos,text])
  const payload = {
    title:text,
    status:false
  };
  fetch("http://localhost:3005/todos" ,{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
      "content-type":"application/json"
    },
  })   //its show get request to make post add method ,body,header
  // getTodo()
  .then(() => {
    getTodo()
    setText("")
  })
 
 }
  return (
    <div className="App">
      <h1>Todo</h1>
      <input type="text" placeholder='enter items...' onChange={handleChange} value={text}/>
      <button onClick={handleclick}>Add</button>
     {todos.map((e,i) => (
       <div key={i}>{e.title}</div>
     ))}
    </div>
  );
}

export default App;









/* 
//todo without store anywhere

import './App.css';
import React, { useState } from "react"


function App() {
 const[text,setText] = useState("")
 const[todos,setTodos] = useState([])

 const handleChange = (e) => {
  // console.log(e)
  setText(e.target.value)
 }

 const handleclick = () => {
  setTodos([...todos,text])
 }
  return (
    <div className="App">
      <h1>Todo</h1>
      <input type="text" placeholder='enter items...' onChange={handleChange}/>
      <button onClick={handleclick}>Add</button>
     {todos.map((e,i) => (
       <div key={i}>{e}</div>
     ))}
    </div>
  );
}

export default App;

*/
