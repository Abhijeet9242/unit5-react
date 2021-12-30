function List({name,title,style}){
  // console.log(name,title,style)
  return  <div >
    <h1  className="ddd">{title}</h1>
      <ul  className="dddd">
       {name.map((e,i) => (
         <li key={i} style={{listStyleType:style[i]}}>{e}</li>
       ))}
      </ul>
  </div>
 
 }

export default List