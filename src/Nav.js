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
            <a href='#home' target='' className="a" >Home</a>
            <a href='#about' target='' className="a">About</a>
            <a href='#services' target='' className="a">Services</a>
            <a href='#features' target='' className="a">Tours</a>
        </div>
        <div className='inavlinks'>
            <a className='ia' href='https://www.facebook.com/' target='' >
                <img className="img1" src={fbicon} alt='Facebook'/>
            </a>
            <a className='ia' href='https://twitter.com/?lang=en' target=''>
            <img className="img1" src={Xicon} alt='Twitter'/>
            </a>
            <a className='ia' href='https://www.instagram.com/' target=''>
            <img className="img1" src={instaicon} alt='Instagram'/>
            </a>
        </div>
        
    </div>
  )
}
