import logo from './logo.svg';
import React, {useState,useEffect} from "react";
import './App.css';
import { Header } from './components/Header';
import { Reciepe } from './components/Reciepe';
import Axios from "axios";



function App() {
 

  const [search, setSearch] = useState("chicken")
  const [recipes,setRecipes] = useState([])

  const APP_ID = "df6eb13c";
  const APP_KEY = "6ecffd5a7b4a6fdfc0e1c8bfe471ff77";

  useEffect(async() => {
    // console.log("app.init..")
    getRecipes()
  
  },[]);

  const getRecipes = async () => {
    const data= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${ APP_ID}&app_key=${APP_KEY}`);
    // console.log(data)
    setRecipes(data.data.hits)
  };

  const onInputChange = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value)
  }

  const onSearchClick = () => {
    getRecipes()
  }

  return (
    <div className="App">
   
    <Header search={search} onInputChange={onInputChange} onSeachClick={onSearchClick}/>
    <div className='container'>
    <Reciepe recipes={recipes}/>
    </div>
   
    </div>
  );
}

export default App;
