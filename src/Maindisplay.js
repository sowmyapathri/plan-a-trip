import React from 'react'
import background from './images/background.jpg'
export const Maindisplay = () => {
  return (
    <div className='head-text'>
      
         <img className='main-img' src={background} alt="Background"/>
     
       <div className='text-on-image'>
        <h1 style={{color:"white"}}>Travel with no worries</h1>
      <p style={{color:"white",fontSize:'20px'}}>Travel where ever you wish.Explore places, food, people.Have lots of fun and adventures.We always strive to make your trip memorable.</p>
        <button className='explorebtn'><b>Explore Tours</b></button>
       </div>  
    </div>
  )
}
