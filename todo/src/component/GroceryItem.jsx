export const GroceryItem = ({title, status, id, DeleteToggle ,updateToogle}) => {
    // console.log(status)
    
    
    return (
        <>
        <div>
            Name: {title} 
             <button onClick={() =>DeleteToggle(id)}>Delete</button>
             <button onClick={() =>updateToogle(id)}>{status ? "Done" : "Not Done"}</button>
        </div>
        </>
    );
};