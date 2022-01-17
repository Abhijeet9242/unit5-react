import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const initialState = {
  username:"",
  password:"",
  email:"",
  address:"",
  isMarried:"",
  gender:"",

}



function App() {

  const [form,setForm] = useState(initialState)


const handleChange = (e) => {
  // console.log(e.target.value)
  const {name,value} = e.target
  setForm({...form,[name]:value})
}
const handlesubmit = (e) => {
  e.preventDefault()
  console.log(form)
}

const {username,isMarried,password,email,address,gender} = form

  return (
    <div className="App">
    {/* <h1>PERSONAL DETAILS</h1> */}
    <form onSubmit={handlesubmit}>
      <label>Name
        <input type="text" name="username" value={username} placeholder="enter name" onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <label>Email
        <input type="email" name="email" value={email} placeholder="enter email" onChange={handleChange}  />
      </label>
      <br/>
      <br/>
      <label>Password
        <input type="password" name="password" value={password} placeholder="enter password" onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <label>Address
        <input type="address" name="address" value={address} placeholder="enter address" onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <label>Married
        <input type="checkbox" name="ismarried" value={isMarried} placeholder="enter password" onChange={handleChange} />
      </label>
      <br/>
      <br/>
      <select name="gender" value={gender} onChange={handleChange} >
        <option value="M" name="M">Male</option>
        <option value="F" name="F">Female</option>
        <option value="O" name="O">Other</option>
      </select>
      <input type="submit" value="submit" />
    </form>
    </div>
  );
}

export default App;
