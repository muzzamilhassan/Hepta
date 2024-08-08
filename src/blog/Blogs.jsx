import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Blogs = () => {
  const posts = [
    {
      id: 1,
      date: "February 26, 2018",
      title: "Free Template by Colorlib",
      image: "/images/slider-3.jpg.webp", // replace with your image path
    },
    {
      id: 2,
      date: "February 26, 2018",
      title: "Free Template by Colorlib",
      image: "/images/slider-4.jpg.webp", // replace with your image path
    },
    {
      id: 3,
      date: "February 26, 2018",
      title: "Free Template by Colorlib",
      image: "/images/slider-5.jpg.webp", // replace with your image path
    },
    {
      id: 4,
      date: "February 26, 2018",
      title: "Free Template by Colorlib",
      image: "/images/slider-2.jpg.webp", // replace with your image path
    },
    {
      id: 5,
      date: "February 26, 2018",
      title: "Free Template by Colorlib",
      image: "/images/slider-6.jpg.webp", // replace with your image path
    },
    {
      id: 6,
      date: "February 26, 2018",
      title: "Free Template by Colorlib",
      image: "/images/slider-2.jpg.webp", // replace with your image path
    },
  ];

  return (
    <div>
      <Hero image='/images/slider-2.jpg.webp' title={'Blogs'}/>
      <div className="container mx-auto p-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-500 text-sm">{post.date}</p>
                  <h2 className="text-xl font-bold">{post.title}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded mb-6"
              />
              <h3 className="text-lg font-bold mb-4">Popular Post</h3>
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="mb-4 flex">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <p className="text-gray-500 text-sm">{post.date}</p>
                      <h4 className="text-md font-bold">{post.title}</h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden my-4 p-4 py-10">
              <h1 className="text-lg font-bold">Categories</h1>
              <ul>
                <div className="flex justify-between border-b-2 py-4 text-[#65C0BA]">
                  <li>Events</li>
                  <li>12</li>
                </div>
                <div className="flex justify-between border-b-2 py-2 text-[#65C0BA]">
                  <li>Resto bar</li>
                  <li>16</li>
                </div>
                <div className="flex justify-between border-b-2 py-2 text-[#65C0BA]">
                  <li>Celebration</li>
                  <li>8</li>
                </div>
                <div className="flex justify-between border-b-2 py-2 text-[#65C0BA]">
                  <li>Events</li>
                  <li>45</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
