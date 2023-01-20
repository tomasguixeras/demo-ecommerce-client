import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Most Selled Product"
            width="450"
            height="300"
            layout="responsive"
            style={{ borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Most Selled Product"
            width="450"
            height="300"
            layout="responsive"
            style={{ borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Most Selled Product"
            width="450"
            height="300"
            layout="responsive"
            style={{ borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Most Selled Product"
            width="450"
            height="300"
            layout="responsive"
            style={{ borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Most Selled Product"
            width="450"
            height="300"
            layout="responsive"
            style={{ borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Most Selled Product"
            width="450"
            height="300"
            layout="responsive"
            style={{ borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Most Selled Product"
            width="450"
            height="300"
            layout="responsive"
            style={{ borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Most Selled Product"
            width="450"
            height="300"
            layout="responsive"
            style={{ borderRadius: "8px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Most Selled Product"
            width="450"
            height="300"
            layout="responsive"
            style={{ borderRadius: "8px" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

{
  /* <Image
  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  alt="Most Selled Product"
  width="450"
  height="300"
  layout="responsive"
  style={{ borderRadius: "8px" }}
/> */
}
