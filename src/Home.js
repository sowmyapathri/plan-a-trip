import React from 'react'
import { Nav } from './Nav';
import { Maindisplay } from './Maindisplay';
import { Aboutus } from './Aboutus';
import { Ourservices } from './Ourservices';
import { Features } from './Features';
import { Footer } from './Footer';

const Home = () => {
  return (
    <div id='home'>
        <Nav/>
        <Maindisplay/>
        <Aboutus/>
        <Ourservices/>
        <Features/>
        <Footer/>
    </div>
  )
}


export default Home;
