import React from 'react'
import money from './images/money.png'
import rooms from './images/rooms.png'
import hiking from './images/hiking.png'
export const Ourservices = () => {
  return (
    <div className="service">
        <h3 className='h3'>OUR SERVICES</h3>
        <img className='serviceimg1' src={money} alt="Money Saving"/>
        <h4 className='sercap1'>Saving Money</h4>
        <p className='serexp1'>We provide budget friendly trips with pleasant experience</p>
        <img className='serviceimg2' src={hiking} alt="Endless Hiking"/>
        <h4 className='sercap2'>Endless Hiking</h4>
        <p className='serexp2'>Hike to the peak of the joy with endless memories</p>
        <img className='serviceimg3' src={rooms} alt="Comfort"/>
        <h4 className='sercap3'>Amazing Comfort</h4>
        <p className='serexp3'>We provide luxurious Rooms which provides amazing comfort</p>
    </div>
  )
}
