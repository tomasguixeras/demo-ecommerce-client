import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay } from "swiper";
import {
  Avatar,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import CardOfReviews from "./cardOfReviews";

export default function ReviewsOfUsers() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={1}
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        style={{ width: "70%", minHeight: "400px" }}
      >
        <SwiperSlide>
          <CardOfReviews
            src="https://bit.ly/dan-abramov"
            name="Juan Jose"
            title="Google CEO"
            heading="Muy bueno"
            text="Me parecio muy bueno, Me parecio muy bueno, Me parecio muy bueno, Me parecio muy bueno"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardOfReviews
            src="https://bit.ly/dan-abramov"
            name="Juan Jose"
            title="Rappi CTO"
            heading="Muy bueno"
            text="Me parecio muy bueno, Me parecio muy bueno, Me parecio muy bueno, Me parecio muy bueno, Me parecio muy bueno, Me parecio muy bueno, Me parecio muy bueno, Me parecio muy bueno, Me parecio muy bueno, Me parecio muy bueno."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardOfReviews
            src="https://bit.ly/dan-abramov"
            name="Juan Jose"
            title="Globant Developer"
            text="Me parecio muy bueno"
            heading="Muy bueno"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
