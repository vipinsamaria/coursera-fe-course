import React from 'react'
import './Footer.css'
import footer_logo from './../../images/restaurant chef B.jpg'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer_div'>
        <img
        src={footer_logo}
        alt='Footer Logo'
        className='footer_logo'
        />
        <ul className='footer_table'>
            <label className='footer_label'>Footer Navigation</label>
            <li>
                <Link className='footer_link' to="/">Home</Link>
            </li>
            <li>
                <Link className='footer_link' to="/about">About</Link>
            </li>
            <li>
                <Link className='footer_link' to="/menu">Menu</Link>
            </li>
            <li>
                <Link className='footer_link' to="/reservation">Reservation</Link>
            </li>
            <li>
                <Link className='footer_link' to="/orderonline">Order Online</Link>
            </li>
            <li>
                <Link className='footer_link' to="/login">Login</Link>
            </li>
        </ul>
        <ul className="footer_table">
            <label className="footer_label">Contact</label>
            <li className="footer_address">Chicago</li>
            <li className="footer_address">+1 123 456 78 90</li>
            <li className="footer_address">littlelemon@gmail.com</li>
        </ul>
        <ul className="footer_table">
            <label className="footer_label">Social Media Links</label>
            <li>
            <a href="#/instagram" className="footer_link">Instagram</a>
            </li>
            <li>
            <a href="#/twitter" className="footer_link">Twitter</a>
            </li>
        </ul>
    </div>
  )
}

export default Footer