import { useState } from "react";
import "./styles.css";

export default function App() {
  const [LikeCounter , setLikeCounter]=useState(0)
const style ={
backgroundColor:'black',
color:'white'
}
function incLikeCounter (){
 var newLikeCounter =LikeCounter+1;
 setLikeCounter(newLikeCounter); 
}
 function decLikeCounter ()
 {
 var newLikeCounter =LikeCounter-1;
setLikeCounter(newLikeCounter)
 }
  return (
    <div className="App">
      <h1>Like Count</h1>
      <h2> {LikeCounter} </h2>
      <button style={style}onClick={incLikeCounter}>+</button>
      <button style={style}onClick={decLikeCounter}>-</button>
    </div>
  );
}
