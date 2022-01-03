import React from "react";
import { Reciepe } from "./Reciepe";

export const Header = (props) => {
    const {search,onInputChange,onSearchClick} = props
    return (
       <div className="jumbotron py-4">
    <h1 className="display-3">Food Reciepe</h1>
        
    <div className="input-group w-50 mx-auto">
  <input type="text"
   className="form-control"
    placeholder="Search your reciepe...."
     value={search}
         onChange={onInputChange}
     />
  <div className="input-group-append">
    <button className="btn btn-dark" onClick={onSearchClick}>Search</button>
  </div>
</div>

       </div>
    )
}