import React from 'react'
import './Access.css'
const Access = () => {
  return (
    <div className='access-container'>
        <div className='access-wrapper'>
        <div className="heading">
                <h1>Get early access today.</h1>

                <p>It only takes a minute to sign up and our free starter tier is extremely generous. 
                    If you have any questions, our support team would be happy to help you.
                </p>
        </div>

        <div className="pic">
                <input placeHolder="Please Enter Your Email" className='input'></input>
                <button className='button'>Get Started for Free</button>
        </div>

        </div>

    </div>
  )
}

export default Access