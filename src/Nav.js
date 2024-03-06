import React from 'react'
import fbicon from'./images/fbicon.png'
import Xicon from './images/Xicon.png'
import instaicon from'./images/instaicon.png'
import icon from './images/icon.png'
import './design.css'
export const Nav = () => {
  return (
    <div className='nav'>
        <img className="img" src={icon} alt="logo"/>
        <h2 className='h2'>Plan-A-Trip</h2>
        <div className='navlinks'>   
            <a href='' target='' className="a" >Home</a>
            <a href='' target='' className="a">About</a>
            <a href='' target='' className="a">Services</a>
            <a href='' target='' className="a">Tours</a>
        </div>
        <div className='inavlinks'>
            <a className='ia' href='' target='' >
                <img className="img1" src={fbicon} alt='Facebook'/>
            </a>
            <a className='ia' href='' target=''>
            <img className="img1" src={Xicon} alt='Twitter'/>
            </a>
            <a className='ia' href='' target=''>
            <img className="img1" src={instaicon} alt='Instagram'/>
            </a>
        </div>
        
    </div>
  )
}
