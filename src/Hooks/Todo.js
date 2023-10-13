import React from 'react';
import { useState } from 'react';

const Todo = ({decremrnt ,dec,setdec}) => {
   
   
    
  return (
    <>
    <button onClick={decremrnt}>Click</button>
   <h3>{dec}</h3>
    </>
  )
}

export default Todo