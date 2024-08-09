import React from "react";
import Rating from '@mui/material/Rating';

const TopDestinations = ({title,teamName}) => {
  const [value, setValue] = React.useState(2);
  return (
    <div className="my-20">
      <div className="text-center px-10 md:px-28 lg:px-72 space-y-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          quibusdam libero minus quis eos. Culpa ex, nihil nostrum fugit,
          perferendis adipisci consequatur dignissimos laboriosam corporis
          possimus sint eius reiciendis quisquam.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-20 my-10 text-xl font-bold">
        <div>
          <img src="/public/images/slider-2.jpg.webp" alt="" />
          <h1>Food & Wines</h1>
         
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className="!text-[#65BFB9]"
          />
        </div>
        <div>
          <img src="/public/images/slider-3.jpg.webp" alt="" />
          <h1>Resort & Spa</h1>
          {/* <h1>{teamName}</h1> */}
        
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className="!text-[#65BFB9]"
          />
        </div>
        <div>
          <img src="/public/images/slider-4.jpg.webp" alt="" />
          <h1>Hotel Rooms</h1>
      
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className="!text-[#65BFB9]"
          />
        </div>
        <div>
          <img src="/public/images/slider-5.jpg.webp" alt="" />
          <h1>Mountain Climbing</h1>
        
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className="!text-[#65BFB9]"
          />
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
