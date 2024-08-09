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
   
      <Hero  image={'/images/img_1_long.jpg.webp'} title={'Our Hotel'}/>
        <Experinceonce/>
        <Welcome image="/images/hero_1.jpg.webp" title="Family Room" buttontext='Learn more'/>
        <Mangement/>
        <Blog title='More Hotels Features'/>
        <Footer/>
    </div>
  );
};

export default Resturents;
