import React from 'react'
import './Navbar.css'
import logo from '../../images/ricoz.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='list'>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        <button>Sign Up</button>
        
    </div>
  )
}

export default Navbar