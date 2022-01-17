import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
    const [form,setForm] = useState({})

    const navigate = useNavigate()

    // const location = useLocation()
    // console.log(location)

    //token state we are taking from Auth context
    const {handleToken} = useContext(AuthContext)

    const handleChange = (e) => {
        const{name,value} = e.target
        setForm({...form,[name]:value})

    }


    return (
        <div>
            <input type="text" onChange={handleChange}  placeholder="enter email" name="username"/>
            <input type="text" onChange={handleChange} placeholder="enter password" name="password"/>
            <button onClick={() => {
                //fetch here for generate token
                try{
                fetch("reqres.in/api/login",{
                    method:"POST",
                    body:JSON.stringify(form)
                })
                handleToken("fdqwqd4dqdq")
                navigate(-1)
                // navigate("/users")
                }
                catch(err){
                    console.log(err)
                }

            }} >sign in</button>
        </div>
    )
}


//# hooks
// 1) use navigate is use like if login ioccur we want to after successfule wgere to redirect
//2) use location it give you path hash or search
