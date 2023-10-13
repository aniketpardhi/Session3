import React, { useState } from 'react';
import { useEffect } from 'react';
import { exercisedb } from './API/RapidApi';

const BodyPartList = () => {
   
    useEffect(()=>{
        exercisedb
        .get('/exercise/0001')
        .then((res)=>console.log(res))
        .catch((error)=>{
            console.log(error);
        })
    })
  return (
    <div>BodyPartList</div>
  )
}

export default BodyPartList