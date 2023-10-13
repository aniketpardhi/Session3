import { YouTube } from '@mui/icons-material';
import React, { useState } from 'react';
import YoutubeApi from "./YoutubeApi"

const Youtube = () => {
    const [search, setSearch] = useState("");
    
    const [data, setData] = useState([]);
    const SearchVideo = ()=>{

      if (search.trim() === "") {
    
        return;
      }
  
        YoutubeApi.get("/search",{
            params : {
                q : search,
            },
        })
        .then((response)=>{
            console.log(response.data.items);
            setData(response.data.items);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div>
        <h3>SearchVideos</h3>
        
            <input type='text' onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={SearchVideo}>Search</button>
          <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap", alignItems:"center"}}>
        { data.map((item,index)=>{
            return (
                <div key={index} >
                     <iframe
                width="300"
                height="200"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                title='Beautiful Relaxing Music, Peaceful Soothing  Instrumental Music, "Spring Garden Peace" By Tim Janis'
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

                </div>
            ) 
        })
        }
        </div>
        
      
    </div>
  )
}

export default Youtube;