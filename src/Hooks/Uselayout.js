import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

const Uselayout = () => {
    const [value, setValue] = useState('GFG');
 
    useLayoutEffect(() => {
        if (value === 'GFG') {
            // Changing the state
            setValue('GeeksForGeeks');
        }
        console.log('UseLayoutEffect is called with the value of ', value);
    }, [value]);

  
  return (
   <>
   <div>{value} is the greatest portal for geeks!</div>
   </>
  )
}

export default Uselayout