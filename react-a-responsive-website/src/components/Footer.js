import React from 'react'
import './Footer.css';
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-nav">
     
        <div className="footer-col">
            <h3>Learn</h3>
            <ul className="footer-menu">
              <li> <NavLink activeclassname="active" to="/AboutMe">About Me</NavLink> </li>
              <li><NavLink activeclassname="active" to="/TeckStack">TeckStack</NavLink></li>
              <li> <NavLink activeclassname="active" to="/ContactMe">Contact Me</NavLink> </li>
            </ul>
        </div>
        <div className="footer-col">
            <h3>More From DIVP</h3>
            <ul className="footer-menu">
                <li><a href="https://techreference22.blogspot.com/" target="_blank"> My Tech Blog</a> </li>
                <li><a href="https://siragughal.blogspot.com/" target="_blank">My Regional Blog</a> </li>
                <li><a href="https://en-thoorigai.blogspot.com/" target="_blank">My Paintings Blog</a> </li>
                <li><a href="https://github.com/divyaraghu" target="_blank">My Git repo</a> </li>
                
            </ul>
        </div>
        </div>
        <div className="footer-social">
            <h3>Follow me</h3>
            <ul className="footer-menu">
                <li><i className="fab fa-pinterest"></i></li>
                <li><i className="fab fa-instagram"></i></li>
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-facebook"></i></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
