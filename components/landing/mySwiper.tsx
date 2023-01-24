import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import { useRouter } from "next/router";

export default function App({ products }: any) {
  const router = useRouter();
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
        style={{ width: "95%", height: "100%" }}
      >
        {products.length > 0 &&
          products.map((products: any) => (
            <SwiperSlide>
              <Image
                src={products && products.image}
                alt="Most Selled Product"
                width="600"
                height="600"
                style={{
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "block",
                  objectFit: "fill",
                }}
                onClick={() => router.push(`/${products.id}`)}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
