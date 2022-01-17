import { Link } from "react-router-dom";

export const Users = () => {
    return <div>
        {/* <h1>uses</h1> */}

    {[1,2,3,4].map((e,i) => (
        <div key={i} style={{margin:"10px"}}>
           <Link to={`/users/${e}`}>student{e}</Link>
        </div>
    ))}

    </div>
}