import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <Hero image="/images/slider-3.jpg.webp" title={'Contact Us'}/>
      <div className="grid md:grid-cols-2 m-10">
        <div className=" py-4 mx-1 px-10 flex flex-col space-y-1">
          <label className="text-xl">Name:</label>
          <input
            type="text"
            className="border p-1 border-black "
            placeholder="Enter your name here"
          />
          <label className="text-xl">Phone:</label>
          <input
            type="number"
            className="border p-1 border-black "
            placeholder="Enter your phone No."
          />
          <label className="text-xl">Name</label>
          <input
            type="email"
            className="border p-1 border-black "
            placeholder="Enter your email here"
          />
          <textarea
            name=""
            className="border p-1 border-black "
            id=""
            cols="30"
            rows="10"
            placeholder="Enter your Description here"
          ></textarea>
          <br />
          <div>
            <button className=" py-2 px-4 bg-[#65C0BA] rounded">
              Send Massege
            </button>
          </div>
        </div>
        <div className="space-y-6 flex flex-col justify-center mx-1 px-10">
          <h1 className="text-2xl">Address</h1>
          <p className="text-lg">
            98 West 21th Street, Suite 721 New York NY 10016
          </p>
          <h1 className="text-2xl">Phone No.</h1>
          <p className="text-lg">+923055779207</p>
          <h1 className="text-2xl">Email</h1>
          <p className="text-lg">muzzamilhassan302@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
