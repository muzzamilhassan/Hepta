import React from "react";
import Hero from '../Components/Hero'
import Experinceonce from "../Components/Experinceonce";
import Welcome from "../Components/Welcome";
import Mangement from "../Components/Mangement";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
const Resturents = () => {
  return (
    <div>
   
      <Hero  image='/images/slider-2.jpg.webp' title={'Our Hotel'}/>
        <Experinceonce/>
        <Welcome/>
        <Mangement/>
        <Blog/>
        <Footer/>
    </div>
  );
};

export default Resturents;
