import "./App.css";
import Blog from "./Components/Blog";
import Experinceonce from "./Components/Experinceonce";
import Hero from "./Components/Hero";
import Reviews from "./Components/Reviews";
import TopDestinations from "./Components/TopDestinations";
import Welcome from './Components/Welcome';
import Footer from './Components/Footer';
import Mangement from "./Components/Mangement";
function App() {
  return (
    <div>
      <Hero />
      <Welcome />
      <Experinceonce/>
      <Mangement/>
      <Blog/>
      <Reviews/>
      <TopDestinations/>
      <Footer/>
    </div>
  );
}

export default App;
