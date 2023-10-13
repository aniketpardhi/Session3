import React from 'react'

const Basic1 = () => {

    const user={
        name:"Aniket",
        addres:"Nagpur",
        pass:"true"
      
    }
   
  return (
  <>

  <div className=' container'>
    <h3>Personal information</h3>
    <h5>{user.addres}</h5>
    <h6>{user.name}</h6>
    <h6>{user.pass}</h6>
   
    
    
    

  </div>
  </>
  )
}

export default Basic1