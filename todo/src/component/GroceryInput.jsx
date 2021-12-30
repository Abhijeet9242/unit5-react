import { useState } from "react"

export const GroceryInput = ({getdata}) => {

    const [text,setText] = useState("")
    
    const handlechange = (e) => {
        // console.log(e.target.value)
        setText(e.target.value)
    }

    const handledata = () => {
        // console.log(e.target.value)
        // console.log(text)
        getdata(text)
    }
    return (

    <>
        <input type="text" placeholder="enter grocery" onChange={handlechange}/>
        <button onClick={handledata}>Add grocery</button>
    </>
    );
};