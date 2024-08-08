import React from 'react'
import Navbar from './Navbar'

const Hero = ({image,title}) => {
  return (
    <>
    <div className='relative text-white w-full h-screen overflow-hidden'>
        <div>
            <Navbar/>
        </div>
    
        <img src={image} alt=" logo" className='absolute bg-red-500 top-0 left-0 -z-10 w-full h-screen md:h-auto object-cover'/>
 
            <span className='w-full h-screen absolute top-0 left-0 bg-black opacity-20 -z-10'></span>
        <div className='flex flex-col justify-center items-center space-y-4 mt-20'>
            <h1 className='text-6xl md:text-8xl capitalize'>{title}</h1>
            <h3 className='pl-4 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <button className='border-2 py-2 rounded px-4 text-2xl'>Visit Website</button>
        </div>
    </div>
    </>
  )
}

export default Hero
