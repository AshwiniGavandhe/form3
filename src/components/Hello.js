import React from "react";
import Name from "./Name";


function Hello() {

    const name="ashu";
  return (
    <div>
     <h1>hello</h1> 
     <Name  name={name}/>
    </div>
  )
}

export default Hello;
