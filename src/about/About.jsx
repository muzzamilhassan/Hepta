import React from 'react'
import Hero from '../Components/Hero'
import Welcome from '../Components/Welcome'
import Mangement from '../Components/Mangement'
import TopDestinations from '../Components/TopDestinations'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
        <Hero  image='/images/slider-3.jpg.webp' title={'About us'}/>
        <Welcome image={'/images/hero_1.jpg.webp'} buttontext={'Learn more'} title={'Welcome Travel & Tours'}/>
        <div className='text-center space-y-4 pt-10'>
            <h1 className='text-7xl'>Hotel Gallery</h1>
            <p className='px-72 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat, laudantium esse unde omnis porro cumque odit, aut illum hic odio dicta molestiae eaque fuga voluptates! Et amet quia quod!</p>
            <Mangement/>
            </div>
            <TopDestinations title='Our Team'/>
            <Footer/>
        
    </div>
  )
}

export default About