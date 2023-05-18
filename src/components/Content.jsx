import React from 'react'
import './Content.css'
import illustration from '../images/illustration-2.svg'
import arrow from '../images/icon-arrow.svg'
import quote from '../images/icon-quotes.svg'
import founder from '../images/avatar-testimonial.jpg'
const Content = () => {
  return (
    <div className="content-container">
        <div className="hero-wrapper">

            <div className="heading">
                <h1>Stay productive, wherever you are</h1>

                <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>

                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
                {/* <a><p>See How it Works </p><img src={arrow}/></a> */}
                <div className='howworks'>
                <a href='https://fylo.com/' className='links'> <p >See How it Works</p></a>
                  
                  <img src={arrow}className='arrow'/>
                </div>

                <div className='card-wrapper'>
                  <img src={quote}/>
                  <p>Fylo has improved our team productivity by an order of magnitude. Since 
                  making the switch our team has become a well-oiled collaboration machine.</p>
                  <div className='testimonial'>
                  <img src={founder} className='founder'/>
                  <p><b>Kyle Burton </b><br/> Founder & CEO, Huddle</p>
                  </div>
                </div>
                
            </div>

            <div className="pic">
                <img src={illustration} alt="HERE" className="pic-content"/>
            </div>


        </div>
        

    </div>
  )
}

export default Content