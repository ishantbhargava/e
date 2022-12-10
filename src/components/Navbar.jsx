import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"



export function Navbar ()  {
  return (
    <div className='hero-header-container'>
        <nav className='hero-header'>
          
       <Link to="/ " className='brand-name'><h1>SUPERSHOP.COM</h1></Link>
       <Link to="/products " className='nav-title'><h2>Grocery</h2></Link>
       <div className="search">
        <input type="search" placeholder='search for items ' className='search_bar'/>
        <button className="search_button">search</button>
       </div>
         <Link to="/cart" className="nav-cart"><img src=".components/navimg/cartimg.png" alt="cart" /></Link>
      
        </nav>
    </div>
  )
}

