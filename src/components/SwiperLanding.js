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
          width: "60%",
          minWidth: "600px",
          height: "30vw",
          minHeight: "400px",
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
          <img src="http://tinyurl.com/ysk44ncy" alt="" />
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
          <img src="http://tinyurl.com/3vustjj7" alt="" />
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
          <img src="http://tinyurl.com/2p9akhka" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
