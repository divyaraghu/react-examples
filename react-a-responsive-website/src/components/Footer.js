import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-nav">
        <div className="footer-col">
            <h3>Shop With Us</h3>
            <ul className="footer-menu">
                <li>Get Started</li>
                <li>WholeSale</li>
                <li>Retail</li>
            </ul>
        </div>
        <div className="footer-col">
            <h3>Learn</h3>
            <ul className="footer-menu">
                <li>About us</li>
                <li>Our Services</li>
                <li>Our Partners</li>
            </ul>
        </div>
        <div className="footer-col">
            <h3>More From DIVP</h3>
            <ul className="footer-menu">
                <li>Our Story</li>
                <li>Blog</li>
                <li>Affiliate</li>
                <li>Dealerships and Franchiese</li>
                <li>Faqs</li>
                <li>Contact Us</li>
            </ul>
        </div>
        </div>
        <div className="footer-social">
            <h3>Follow us</h3>
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
