import { useState } from "react";
import "./styles.css";

export default function App() {
  const [LikeCounter , setLikeCounter]=useState(0)

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
      <h1>Like Count App</h1>
      <h2> {LikeCounter} </h2>
      <button onClick={incLikeCounter}>+</button>
      <button onClick={decLikeCounter}>-</button>
    </div>
  );
}
