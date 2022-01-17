import { useParams } from "react-router-dom";

export const Products = () => {
    const {id} = useParams()
    return <h1>product details of id : {id}</h1>
}