import Blog from "../Components/Blog";
import Experinceonce from "../Components/Experinceonce";
import Hero from "../Components/Hero";
import Reviews from "../Components/Reviews";
import TopDestinations from "../Components/TopDestinations";
import Welcome from "../Components/Welcome";
import Footer from "../Components/Footer";
import Mangement from "../Components/Mangement";
const Home = () => {
  return (
    <div>
      <Hero   image='/images/hero_1.jpg.webp' title={'travels & tours'}/>
      <Welcome />
      <Experinceonce />
      <Mangement />
      <Blog />
      <Reviews />
      <TopDestinations />
      <Footer />
    </div>
  );
};

export default Home;

