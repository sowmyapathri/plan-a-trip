import React from 'react'
import beach from './images/beach.jpg'
export const Aboutus = () => {
  return (
    <div>
        <h3 className='h3'>ABOUT US</h3>
        <div>
            <img className="aboutimg" src={beach} alt="Beach"/>
            <div className='h4'>
              <h4 >Explore with Joy</h4>
            <p style={{fontSize:'20px',marginTop:'-2%'}}>
                If you are looking for a memorable Andaman trip, Plan-A-Trip holiday packages are the right choice for you. PLan-A-Trip offers the widest range of customizable Andaman tour to suit every kind of traveler from Delhi, Mumbai, Chennai or Bangalore.</p>
            <button className='readmorebtn'>Read More</button>
            </div>
            
        </div>
    </div>
  )
}
