import React, { useState } from 'react'

const Counter = () => {
    const [check,setcheck]=useState(!true);

    const handle=(e)=>{
     setcheck( e.target.checked)
    }
  return (
  <>
  <input type="checkbox" className="type" onChange={handle} checked={check}/> i liked this
  <p style={{color:check==!true ? 'red':'green'}}>{ check ? "you cheked": "not checked"}</p>
  </>
  )
}
export default Counter;