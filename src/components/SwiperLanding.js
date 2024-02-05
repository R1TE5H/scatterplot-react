import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "../styles/swiperLanding.css";

// import required modules
import { EffectFade, Pagination, Navigation } from "swiper/modules";

import nyc from "../assets/NYC Skyline.jpg";
import florida from "../assets/florida.avif";
import colorado from "../assets/colorado.jpg";

export default function SwiperLanding() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        effect={"fade"}
        loop={true}
        navigation={true}
        modules={[EffectFade, Pagination, Navigation]}
        className="mySwiper"
        style={{
          width: "80%",
          minWidth: "360px",
          height: "30vw",
          minHeight: "200px",
        }}
      >
        <SwiperSlide>
          <p
            className="hero"
            style={{
              position: "absolute",
            }}
          >
            NEW YORK
          </p>
          <img src={nyc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <p
            className="hero"
            style={{
              position: "absolute",
            }}
          >
            FLORIDA
          </p>
          <img src={florida} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <p
            className="hero"
            style={{
              position: "absolute",
            }}
          >
            COLORADO
          </p>
          <img src={colorado} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
