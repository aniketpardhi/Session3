import React, { useState } from "react";
const data = [
  {
    id: 1,
    first_name: "Levey",
    last_name: "Leonardi",
    email: "lleonardi0@statcounter.com",
    gender: "Male",
    work: "Inyati Airport",
  },
  {
    id: 2,
    first_name: "Etheline",
    last_name: "Maseyk",
    email: "emaseyk1@dropbox.com",
    gender: "Female",
    work: "Mount Pleasant Airport",
  },
  {
    id: 3,
    first_name: "Warde",
    last_name: "Digginson",
    email: "wdigginson2@furl.net",
    gender: "Male",
    work: "Lese Airport",
  },
  {
    id: 4,
    first_name: "Wynn",
    last_name: "Karran",
    email: "wkarran3@purevolume.com",
    gender: "Male",
    work: "Petit Jean Park Airport",
  },
  {
    id: 5,
    first_name: "Herve",
    last_name: "Hargreves",
    email: "hhargreves4@fema.gov",
    gender: "Male",
    work: "Kelila Airport",
  },
  {
    id: 6,
    first_name: "Catharina",
    last_name: "Frayling",
    email: "cfrayling5@hatena.ne.jp",
    gender: "Non-binary",
    work: "Aswan International Airport",
  },
  {
    id: 7,
    first_name: "Noemi",
    last_name: "Simacek",
    email: "nsimacek6@wiley.com",
    gender: "Female",
    work: "thincomalee Harbor Waterdrome",
  },
  {
    id: 8,
    first_name: "Cristobal",
    last_name: "Meatcher",
    email: "cmeatcher7@apache.org",
    gender: "Male",
    work: "Monte Caseros Airport",
  },
  {
    id: 9,
    first_name: "Hubie",
    last_name: "Dosdell",
    email: "hdosdell8@yahoo.co.jp",
    gender: "Male",
    work: "Mopti Airport",
  },
  {
    id: 10,
    first_name: "Juliana",
    last_name: "MacGuffog",
    email: "jmacguffog9@a8.net",
    gender: "Non-binary",
    work: "Mount Sanford Station Airport",
  },
];
const Map = () => {
  const [show,setnotshow]=useState(!true);
  return (
    <>
      <div className="container">
      <button  className=" btn  btn-secondary"   onClick={()=>setnotshow(!show)}>  {show===!true ? " tap to  show" :" tap to hide"}</button>
      {show &&

        <table className=" table" >
          <tr>
            <th>Id</th>
            <th>first_name</th>
            <th>email</th>
            <th>gender</th>
            <th>work</th>
          </tr>
        
          {
            data.map((item,index)=>{
              
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                <td>  {item.first_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.work}</td>
                </tr>
              )
            })
          }
          
        </table>
        } 

      </div>
    </>
  );
};

export default Map;
