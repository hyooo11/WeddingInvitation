"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import data from "@/data.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data.gallery.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data.gallery.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Gallery;
