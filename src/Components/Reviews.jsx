import React from "react";
import Expericeone from "./Expericeone";

const Reviews = () => {
  return (
    <div className="py-20 space-y-10">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Happy Custumers</h1>
      </div>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-20">
        <div>
          <div>
            <Expericeone
              src="\images\person_1.jpg.webp"
              italic="italic"
            />
          </div>
        </div>
        <div>
          <div>
            <Expericeone
              src="\images\person_2.jpg.webp"
              italic="italic"
            />
          </div>
        </div>
        <div>
          <div>
            <Expericeone
              src="\images\person_3.jpg.webp"
              italic="italic"
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Reviews;
