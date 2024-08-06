import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Mangement = () => {
  return (
    <div className=" bg-[#65C0BA] h-96 md:h-auto overflow-hidden">
      <div className="mx-16">
        <Swiper
          pagination={{
            dynamicBullets: true,
            loop: true,

          }}
          modules={[Pagination]}
          className="mySwiper w-full h-screen"
        >
          <SwiperSlide><img src="/public/images/slider-2.jpg.webp" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/public/images/slider-3.jpg.webp" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/public/images/slider-4.jpg.webp" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/public/images/slider-5.jpg.webp" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/public/images/slider-6.jpg.webp" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/public/images/slider-2.jpg.webp" alt="" /></SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Mangement;
