import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import Resturents from "./resturent/Resturents";
import Contact from "./contact/Contact";
import Gallery from "./gallery/Gallery";
import Blogs from "./blog/Blogs";
import About from "./about/About";
// import Home from "./home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Resturents />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
