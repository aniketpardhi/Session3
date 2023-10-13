import React, { useCallback } from 'react'
import { useState } from 'react';
import Todo from './Todo';

const UseCallBack = () => {
    const [count,setcount]=useState(0);
    const [dec,setdec]=useState(0);
    
const increment=()=>{
   setcount(count+1);
   console.log(`render`)
}

useCallback(()=>{
    decremrnt();
},[dec])

const decremrnt=()=>{
    setdec(dec+1);
    console.log("render")
}


    
  return (
   <>
   <h1>USecallback</h1>
   

   <button onClick={increment}>Click</button>
   <h3>{count}</h3>
  

   
   
   <Todo decremrnt={decremrnt} dec={dec} setdec={setdec} />
   
   </>
  )
}

export default UseCallBack