
import './App.css';
import List from "./component/List"

// const style = {
//   marginLeft:"45%",
 
// }

const arr1=["android","blackberry","iPhone","windows phone"];
const title1="Mobile Operating System";
const arr2=["Samsung","HTC","Micromax","Apple"];
const title2="Mobile Manufacturers";
const style1=["","","",""];
const style2=["square","square","","circle"];

function App() {
  return (
    <div>
    {<List name={arr1} title={title1} style={style1}/>}
    {<List name={arr2} title={title2} style={style2}/>}
    </div>
  );
}


export default App;
