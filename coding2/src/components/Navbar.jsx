import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div>
        <Link to="/">Home</Link>
        <Link to="/about" style={{margin:"30px"}}>About</Link>
        <Link to="/contactus" >Contact</Link>
        <Link to="/users" style={{margin:"30px"}}>Users</Link>
        <Link to="/login">Login</Link>
    </div>
}