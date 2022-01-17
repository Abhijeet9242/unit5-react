
import './App.css';
import {Home} from "./components/Home.jsx";
import {About} from "./components/About.jsx";
import {Contact} from "./components/Contact.jsx";
import {Navbar} from "./components/Navbar.jsx";
import {Route,Routes} from "react-router-dom"
import { Products } from './components/Product';
import { Users } from './components/Users';
import { Userdetails } from './components/Userdetails';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
<Navbar/>
<Routes>
    <Route path="/" element={ <Home />}></Route>
    <Route path="/about" element={ <About />}></Route>
    <Route path="/contactus" element={ <Contact />}></Route>
    <Route path="/product/:id" element={ <Products />}></Route>
    <Route path="/users" element={  <PrivateRoute><Users /> </PrivateRoute>}></Route>
    <Route path="/users/:userid" element={ <PrivateRoute><Userdetails /></PrivateRoute>}></Route>
    <Route path="*" element={ <div>page not found</div>}></Route>
    <Route path="/login" element={<Login/>}></Route>
</Routes>
     
    </div>
  );
}

export default App;
