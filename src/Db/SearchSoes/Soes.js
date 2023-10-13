import React, { useEffect, useState } from "react";
import "./Soes.css"

const data = [
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    title: "Nike Air Monarch IV",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
    title: "Nike Air Vapormax Plus",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
    title: "Nike Waffle One Sneaker",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
    title: "Nike Running Shoe",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "black",
    category: "sneakers",
  },
//   {
//     img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
//     title: "Flat Slip On Pumps",

//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Vans",
//     color: "green",
//     category: "flats",
//   },
  {
    img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
    title: "Knit Ballet Flat",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Adidas",
    color: "black",
    category: "flats",
  },

  {
    img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
    title: "Loafer Flats",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    color: "white",
    category: "flats",
  },

  {
    img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
    title: "Nike Zoom Freak",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    title: "Nike Men's Sneaker",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "blue",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "PUMA BLACK-OCE",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
    title: "Pacer Future Sneaker",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "red",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
    title: "Unisex-Adult Super",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
    title: "Roma Basic Sneaker",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "white",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
    title: "Pacer Future Doubleknit",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    color: "black",
    category: "sneakers",
  },

  {
    img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
    title: "Fusion Evo Golf Shoe",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Puma",
    color: "green",
    category: "sneakers",
  },
  {
    img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
    title: "Rainbow Chex Skate",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "red",
    category: "flats",
  },
  {
    img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
    title: "Low-Top Trainers",

    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "100",
    company: "Vans",
    color: "white",
    category: "sandals",
  },
];

const Soes = () => {
    const [serach,setserch]=useState("");
    const [inpt,setinput]=useState([]);
    const [show,setnotshow]=useState(!true)
   

      useEffect(()=>{
        if(serach.length===0){
            setinput(data)
        }
        else{
            let res= data.filter((items)=>{
                // if(items.company.toLowerCase().includes(serach.toLowerCase())){
                //     return true
                // }

                const titleMatches = items.title.toLowerCase().includes(serach.toLowerCase());
                const companyMatches = items.company.toLowerCase().includes(serach.toLowerCase());
                return titleMatches || companyMatches
            })
            setinput(res)
        }
      },[serach])


      const handle=(e)=>{
        setnotshow( e.target.checked)
       }

     
  return (
    <>
    <div className="serchbox">
        <input type="text" name="" id=""  placeholder="Enter Your Search" onChange={(e)=> setserch(e.target.value)} />
        <h3>{serach}</h3>

       
        {/* <button  className=" btn  btn-secondary"   onClick={()=>setnotshow(!show)}> </button> */}
        
        
    </div>
      <div className="container d-flex flex-wrap align-items-center gap-2 justify-content-between" style={{background:show==!true ? 'white':'black'}} >
        {inpt.map((item, index) => {
          return (
            <div className="Soes-card" key={index}>
         
             

              <div className="img">
                <img src={item.img} alt=""  width={"100%"} height={"300px"} />
              </div>

              <div className="compony"  style={{color:show==!false ? 'white':'black'}}>
                <h3>{item.company}</h3>
              </div>

              <div className="title"  style={{color:show==!false ? 'white':'black'}}>
                <h3>{item.title}</h3>
              </div>
            </div>
          );
        })}

        
<label class="switch">
  <input type="checkbox" checked={show} onChange={handle}/>
  <span class="slider round"></span>
  <p>{ show ? 'light': 'dark'}</p>
</label>
       
      </div>
    </>
  );
};

export default Soes;
