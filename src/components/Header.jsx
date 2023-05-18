import React from 'react'
import './Header.css'
import logo from '../images/logo.svg'
import Hero from './Hero'
import Content from './Content'
import Access from './Access'
import Footer from './Footer'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <div className="header-container">
        <div className="logo">
            <img src={logo}/>

        </div>

        <div className="header-links">
            <Link to="/features" className='link'><p>Features</p></Link>
            <Link to="/team" className='link'><p>Team</p></Link>
            <Link to="/login" className='link'><p>Sign In</p></Link>
        </div>
    </div>
    <Hero/>
    <Content />
    <Access />
    <Footer />
    </>
  )
}

export default Header








