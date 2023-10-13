import React, { useEffect, useState } from 'react'
import axios from "./axios"

// const Api="https://jsonplaceholder.typicode.com"

const ApiFetch = () => {
    const[mydata,setmydata]=useState([]);
    const [errors, seterrors]=useState("")

    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then((Response)=>{
    //      setmydata(Response.data)
       

    //     })
    //     .catch((error)=>seterrors(error.message))
    
    // },[]);



    //  using async and await
// const getApiData=async()=>{
//     try{
//         const ress= await axios.get("https://jsonplaceholder.typicode.com/post");
//         setmydata(ress.data)
//     } catch(error){
//         seterrors(error.message)
//     }

// }

//     useEffect(()=>{
//     getApiData();
//     }, []);



    // third form
    // const getApiData=async(url)=>{
    //     try{
    //         const ress= await axios.get(url);
    //         setmydata(ress.data)
    //     } catch(error){
    //         seterrors(error.message)
    //     }
    
    // }
    
    //     useEffect(()=>{
    //     getApiData(`${Api}/posts`);
    //     }, []);



    // Fourth Way
        const getApiData=async()=>{
            try{
                const ress= await axios.get('"search/photos?page=1&query=bikes"');
                setmydata(ress.data);
                console.log(ress.data)
              
            } catch(error){
                seterrors(error.message)
            }
        
        }
        
        
            useEffect(()=>{
            getApiData();
            }, []);


            
   
  return (
   <>
   <div className="conatiner">
      <h1>Mydata</h1>
      {errors != " " && <h2>{errors}</h2>}
      <div className=' d-grid '>
      {
        mydata.map((post,index)=>{
            const{url}=post;
            return(
                <div key={index}>
                  <div style={{border:"1px solid black"}}>
                  {/* <h1>{id}</h1>
                    <h2>{title.slice(0,14).toUpperCase()}</h2>
                    <h3>{body}</h3> */}
                    <img src="{url}" alt="" />
                  </div>
                </div>
            )
        })
      }
      </div>
   </div>
   </>
  )
}

export default ApiFetch