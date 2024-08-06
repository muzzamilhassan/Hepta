import React from 'react'

const Expericeone = ({title,src,center,text,italic}) => {
  return (
    <div className={`py-4 px-10 space-y-4 flex flex-col ${center}`} >
    <img
      src={src}
      
      className="w-20 rounded-full"
    />
    <h1 className="text-2xl font-bold">{title}</h1>
    <p className={`${text} text-gray-500 ${italic}`}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Distinctio, commodi. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quia doloribus harum, illum impedit
    </p>
  </div>
  )
}

export default Expericeone