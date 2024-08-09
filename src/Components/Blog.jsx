import React from "react";
import Expericeone from "./Expericeone";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Blog = ({bgcolor,title}) => {
  return (
    <div className={`${bgcolor} space-y-10 py-10`}>
      <div className="text-center px-10 md:px-28 lg:px-72 space-y-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          quibusdam libero minus quis eos. Culpa ex, nihil nostrum fugit,
          perferendis adipisci consequatur dignissimos laboriosam corporis
          possimus sint eius reiciendis quisquam.
        </p>
      </div>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-20">
        <div className="border bg-white">
          <img src="\images\slider-4.jpg.webp" alt="" />
          <div>
            <p className="text-gray-500 pl-11 pt-4">February 26, 2018</p>
            <Expericeone title="45 Best Places To Unwind" />
          </div>
        </div>
        <div className="border bg-white">
          <img src="\images\slider-5.jpg.webp" alt="" />
          <div>
            <p className="text-gray-500 pl-11 pt-4">February 26, 2018</p>
            <Expericeone title="45 Best Places To Unwind" />
          </div>
        </div>
        <div className="border bg-white">
          <img src="\images\slider-6.jpg.webp" alt="" />
          <div>
            <p className="text-gray-500 pl-11 pt-4">February 26, 2018</p>
            <Expericeone title="45 Best Places To Unwind" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
