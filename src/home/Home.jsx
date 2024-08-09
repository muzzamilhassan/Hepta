import Blog from "../Components/Blog";
import Experinceonce from "../Components/Experinceonce";
import Hero from "../Components/Hero";
import Reviews from "../Components/Reviews";
import TopDestinations from "../Components/TopDestinations";
import Welcome from "../Components/Welcome";
import Footer from "../Components/Footer";
import Mangement from "../Components/Mangement";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

const Home = () => {
  return (
    <div>
      <Hero   image='/images/hero_1.jpg.webp' title={'travels & tours'}/>
      <Welcome image={'/images/img_1_long.jpg.webp'} title="Welcome to our Website" logo={<SiGoogledisplayandvideo360 className='m-2 border-2 p-2 rounded-xl text-5xl hover:border-black'/>} buttontext='Watch the video'/>
      <Experinceonce />
      <Mangement bgcolor={'bg-[#65C0BA]'}/>
      <Blog bgcolor={'bg-[#65C0BA]'} title='Recent Blog Post'/>
      <Reviews />
      <TopDestinations title='Top Destinations'/>
      <Footer />
    </div>
  );
};

export default Home;

