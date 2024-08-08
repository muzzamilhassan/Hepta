import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Gallery = () => {
    const images = [
        "/images/slider-3.jpg.webp",
        "/images/slider-4.jpg.webp",
        "/images/slider-5.jpg.webp",
        "/images/slider-6.jpg.webp",
        "/images/slider-2.jpg.webp",
        "/images/slider-3.jpg.webp",
        "/images/slider-4.jpg.webp",
        "/images/slider-5.jpg.webp",
        "/images/slider-6.jpg.webp",
        "/images/slider-2.jpg.webp",
        "/images/slider-3.jpg.webp",
        "/images/slider-4.jpg.webp",
        "/images/slider-5.jpg.webp",
      
      ];
   
    
  return (
    <div>
      <Hero  image='/images/slider-4.jpg.webp' title={'Gallery'}/>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-full h-48 overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={`Grid ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
      <Footer/>
    </div>

  );
};

export default Gallery;
