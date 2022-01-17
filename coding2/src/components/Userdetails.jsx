import { useContext, useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
// import { AuthContext } from "../contexts/AuthContext"

export const Userdetails = () => {

    const {userid} = useParams()
    const[user,setUser] = useState({})
    // console.log(userid)

    // const {token} = useContext(AuthContext)


    useEffect(() => {
        fetch(`https://reqres.in/api/users/${userid}`)
        .then((d) => d.json())
        .then((res) => {
            // console.log(res)
            setUser(res.data)
        })
    },[userid])
    // console.log(user)

    // return <h1>fetch student data with id : {userid}</h1>
// if(!token){
//     return <Navigate to={"/login"} /> 
// }

    return (
        <div>
            <img src ={user.avatar} alt="userimage"/>
            <h3>{user.first_name}{user.last_name}</h3>
            <h4>{user.email}</h4>
        
            
        </div>
    )
}