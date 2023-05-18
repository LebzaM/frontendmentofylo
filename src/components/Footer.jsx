import React from 'react'
import './Footer.css'
import Email from '../images/icon-email.svg'
import logo from '../images/logo.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
        
        
        <div className="footer-wrapper">
        <img className='copyright-footer'src={logo}/>
            <p>About Us<p>Jobs</p><p>Press</p><p>Blog</p></p>
            <p>Contact Us<p>Terms</p><p>Privacy</p></p>
            
            <div className="socialmedia">
            <img  src={Email} />
            <img  src={Email}/>
            <img  src={Email} />
            </div>
        </div>
    </div>
  )
}

export default Footer