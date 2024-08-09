import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Gallery = () => {

  
  return (
    <div>
      <Hero  image='/images/slider-4.jpg.webp' title={'Gallery'}/>
      {/* <!-- section_1 -->  */}
<div>
  <div className="max-w-screen-2xl mx-auto px-4 pt-16 lg:pt-24 relative bg-gray-50">
    <div className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-1 flex-col">
          {/* img_01 */} 
          <img className="object-cover h-full" src="/images/photo-1.jpeg" />
        </div>
        <div className="hidden md:flex flex-1 flex-row gap-2">
          <div className="flex flex-1 flex-col">
            {/* img_02 */} 
            <img className="object-cover h-full" src="/images/photo-2.jpeg" />
          </div>
          <div className="hidden md:flex flex-1 flex-col">
            {/* img_03 */} 
            <img className="object-cover h-full" src="/images/photo-11.jpeg" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="hidden md:flex flex-1 flex-row gap-2">
          <div className="flex flex-1 flex-col">
            {/* img_04 */}
            <img className="object-cover h-full" src="/images/photo-12.jpeg"/>  
          </div>
          <div className="hidden md:flex flex-1 flex-col">
            {/* img_05 */}
            <img className="object-cover h-full" src="/images/photo-13.jpeg" />
          </div>
        </div>                        
        <div className="flex flex-1 flex-col">
          {/* img_06 */}
          <img className="object-cover h-full" src="/images/photo-5.jpeg" />
        </div>
      </div>
    </div>
  </div>
  {/* section_2 */} 
  <div className="max-w-screen-2xl mx-auto px-4 pt-2 pb-10 lg:pt-2 lg:pb-10 relative bg-white">
    <div className="flex flex-col md:flex-row gap-2">
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          {/* img_01 */} 
          <img className="object-cover h-full" src="/images/photo-6.jpeg" alt />
        </div>
      </div>
      <div className="flex flex-1">
        <div className="grid grid-cols-2 gap-2">
          <div>
            {/* img_02 */}
            <img className="object-cover h-full" src="/images/photo-7.jpeg" alt />
          </div>
          <div>
            {/* img_03 */}
            <img className="object-cover h-full" src="/images/photo-8.jpeg" alt />
          </div>
          <div>
            {/* img_04 */}
            <img className="object-cover h-full" src="/images/photo-9.jpeg" alt />
          </div>
          <div>
            {/* img_05 */}
            <img className="object-cover h-full" src="/images/photo-10.jpeg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer/>
    </div>

  );
};

export default Gallery;
