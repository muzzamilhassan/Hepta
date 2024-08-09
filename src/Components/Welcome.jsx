import React from 'react'
import { SiGoogledisplayandvideo360 } from "react-icons/si";

const Welcome = ({image,title,logo,buttontext}) => {
  return (
    <div>

    <div className='grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center overflow-hidden'>
        <div>
            <img src={image} alt="" className='p-20'/>
        </div>
        <div className='px-20 space-y-10'>
            <h1 className='text-4xl font-bold '>{title}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nisi voluptates officia corrupti quibusdam nemo autem culpa quasi eaque molestiae voluptate consectetur sunt, unde laborum rerum, beatae sapiente pariatur mollitia.</p>
            <button className='text-2xl font-bold flex items-center'>{logo}{buttontext}</button>
        </div>
    </div>
    {/* <div>
        <video src=""></video>
    </div> */}
    </div>

  )
}

export default Welcome