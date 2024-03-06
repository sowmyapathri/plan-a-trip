import React from 'react'
import fbicon from'./images/fbicon.png'
import Xicon from './images/Xicon.png'
import instaicon from'./images/instaicon.png'

export const Footer = () => {
  return (
    <div className='footer' >
            <a href='' target='' >
                <img className='iconf' src={fbicon} alt='Facebook'/>
            </a>
            <a  href='' target=''>
            <img className='iconf' src={Xicon} alt='Twitter'/>
            </a>
            <a  href='' target=''>
            <img className='iconf' src={instaicon} alt='Instagram'/>
            </a>
        <p style={{color:"white",textAlign:"center",marginTop:"5%"}}>Copyright @ Plan-A-Trip Travel Tours Company 2020.All Rights Reserved</p>
        
    </div>
  )
}
