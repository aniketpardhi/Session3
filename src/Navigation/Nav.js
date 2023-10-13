import React,{useState} from 'react'
import "./Nav.css"
// import { FaBeer } from 'react-icons/fa';
import {  FaShoppingBasket,FaUser,FaHeart } from 'react-icons/fa';
import Products from "../Db/Data"



const Nav = () => {
  

  return (
    <nav>
    <div className="nav-container">
        <input type="text" placeholder='enter Your search Shoes' />
    </div>

    <div className="Profile-container">
        <a href="#" className='nav-icons'><FaHeart/></a>
        <a href="#" className='nav-icons'>< FaShoppingBasket/></a>
        <a href="#" className='nav-icons'>< FaUser/></a>
       
    </div>
   </nav>
  )
}

export default Nav