import React from 'react'
import { useState,useEffect } from 'react';
import Function_image from './Function_image';
function FunctionLifeCycle() {
    const [number, setNumber] = useState(1);
    const [image, setImage] = useState(true);
    useEffect(() => {
      return () => {
        console.log("ComponentDidMount/ComponentDidUpdate");
      };
    }, [number]);
  return (
    <div>
      <button onClick={()=>{setNumber(number+1)}}>+</button>
      <span>{number}</span>
      <button onClick={()=>{setNumber(number-1)}}>-</button>
      <br />
      <button onClick={()=>{setImage(!image)}}>Toggle</button>
      {image?<Function_image/>:null}
    </div>
  )
}

export default FunctionLifeCycle
