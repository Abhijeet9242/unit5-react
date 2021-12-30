import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryItem } from "./GroceryItem";
import { nanoid } from 'nanoid'




export const Grocery = () =>{
    const [List,setList] = useState([])
    const handleclick = (data) => {
        // console.log(data)
        const payload = {
            title:data,
            status:false,
            id:nanoid(7)
        };
        // setList([...List,data])
        setList([...List,payload])
    };

    const deleteToggle = (id) => {
        const UpdateItem = List.filter((item) => (
            item.id !== id
        ))
        setList(UpdateItem)
    }

    const updateToogle = (id) => {
        const Updatelist = List.map((item) => item.id === id ? {...item,status:!item.status} : item)
        setList(Updatelist)
    }
 
   

    return (

    <>
        <GroceryInput getdata = {handleclick}/>
      
        {List.map((e,i) => (
            <GroceryItem key={e.id} {...e} DeleteToggle = {deleteToggle} updateToogle = {updateToogle} />
        ))}
    </>
    );
};