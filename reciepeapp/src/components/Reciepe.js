import React from "react";
import { RecipeItem } from "./Recipeitem";
export const Reciepe = (props) => {
    const {recipes} = props
    return (
        <div className="row">
            { recipes.map(recipe =>
             <RecipeItem 
             key={Math.random()*100}
             name={recipe.recipe.label} 
             image = {recipe.recipe.image}
             ingredientLines = {recipe.recipe.ingredientLines}
             />
            )}
               
        </div>
    );
};