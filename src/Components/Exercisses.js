import React from 'react';
import { exercisedb } from '../API/RapidApi';
import { useEffect } from 'react';
import { useState } from 'react';

const Exercisses = () => {
    const [mydata,showmydata]=useState([]);
    useEffect(()=>{
        exercisedb
        .get()
        .then(function (response) {
            showmydata(response.data);
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
    })
  return (
   <>
   <div className="excercise">
{
    mydata.map((item,index)=>{
        return(
            <div key={index}>{item.data}</div>
        )
    })
}
   </div>
   </>
  )
}

export default Exercisses