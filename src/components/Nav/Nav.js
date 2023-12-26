import React from 'react'
import './Nav.css'
import Navbar_img from './../../images/Logo.svg'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar_div'>
        <img
            src={Navbar_img}
            alt='Little Lemons Logo'
            className='navbar_logo'
        />
        <ul className='navbar_links'>
            <li>
                <Link className='navbar_link' to="/">Home</Link>
            </li>
            <li>
                <Link className='navbar_link' to="/about">About</Link>
            </li>
            <li>
                <Link className='navbar_link' to="/menu">Menu</Link>
            </li>
            <li>
                <Link className='navbar_link' to="/reservation">Reservation</Link>
            </li>
            <li>
                <Link className='navbar_link' to="/orderonline">Order Online</Link>
            </li>
            <li>
                <Link className='navbar_link' to="/login">Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav