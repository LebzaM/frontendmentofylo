import React from 'react'
import './Hero.css';
import logo from '../images/illustration-1.svg'
const Hero = () => {
  return (
    <div className="hero-container">
        <div className="hero-wrapper">

            <div className="heading">
                <h1>All your files in one secure location, accessible anywhere.</h1>

                <p>Fylo stores your most important files in one secure location. 
                    Access them wherever you need, share and collaborate with friends, 
                    family, and co-workers.
                </p>

            <div className="userfeedback">
                <input placeHolder="Please Enter Your Email" className='input'></input>
                <button className='button'>Get Started</button>
            </div>
            </div>

            <div className="pic">
                <img src={logo} alt="HERE" className="pic-content"/>
            </div>


        </div>
        

    </div>
  )
}

export default Hero