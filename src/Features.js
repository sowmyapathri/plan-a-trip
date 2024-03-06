import React from 'react'
import { ToursList } from './ToursList'

export const Features = () => {
  const FTours=ToursList.map((Tours,id)=>
  <div className='tours' id={id}>
    <img className='tourimg' src={Tours.image} alt='Places'/>
     <h4 className='tname'>{Tours.place}</h4>
     <p className='tabout'>{Tours.about}</p>
     <p style={{marginLeft:"5%",marginTop:"5%"}}><b>Rs.{Tours.money}</b></p>
     <p style={{marginLeft:"80%",marginTop:"-9%"}}><b>{Tours.Days}Days</b></p>
  </div>
  );
  
  return (
    <div>
        <h3 className='h3'>FEATURED TOURS</h3>
        <div className='disfea'>
          {FTours}
        </div>
        
    </div>
  )
}

