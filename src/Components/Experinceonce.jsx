import React from "react";
import Expericeone from "./Expericeone";

const Experinceonce = () => {
  return (
    <div className="w-full my-14 border-t py-5">
      <div className="text-center px-10 md:px-28 lg:px-72 space-y-4">
        <h1 className="text-4xl font-bold ">
          Experience Once In Your Life Time
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          quibusdam libero minus quis eos. Culpa ex, nihil nostrum fugit,
          perferendis adipisci consequatur dignissimos laboriosam corporis
          possimus sint eius reiciendis quisquam.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center m-20">
   
        <Expericeone title='Good Foods' src="/public/images/001-breakfast.svg" text="text-center" center='items-center'/>
        <Expericeone title='Travel Anywhere ' src="\public\images\002-planet-earth.svg" text="text-center" center='items-center'/>
        <Expericeone title='Airplane ' src="/public/images/001-breakfast.svg" text="text-center" center='items-center'/>
        <Expericeone title='Beach Resort ' src="/public/images/001-breakfast.svg" text="text-center" center='items-center'/>
        <Expericeone title='Mountain Climbing ' src="/public/images/001-breakfast.svg" text="text-center" center='items-center'/>
        <Expericeone title='Hot Air Balloon ' src="/public/images/001-breakfast.svg" text="text-center" center='items-center'/>
        
      </div>
    </div>
  );
};

export default Experinceonce;
