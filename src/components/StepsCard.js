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
import { Pagination } from "swiper/modules";

export default function SwiperLanding() {
  const steps = [
    {
      hP1: "Partners List",
      hp2: "A Property",
      content:
        "After review and approval, our team selects optimal renovations and work with contractors to get estimate costs.",
    },
    {
      hP1: "Investors Fund",
      hp2: "The Project",
      content:
        "Investors choose projects they want to invest in and help finance the renovation. Then the contractors get started on transforming the property. ",
    },
    {
      hP1: "We Sell The",
      hp2: "Property",
      content:
        "When the renovations are complete, we work with realtors to put the house on the market.",
    },
    {
      hP1: "Everyone Gets A",
      hp2: "Share of the Profits",
      content:
        "After paying back the initial investments, all investors are paid a share of the profits based on their contributions.",
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper swiper-container"
      >
        {steps.map((step) => {
          return (
            <SwiperSlide
              style={{
                backgroundColor: "#212121",
              }}
            >
              <div className="swiper-card">
                <p className="subHero swiper-head">
                  {step.hP1} <br />
                  {step.hp2}
                </p>
                <p className="subHero swiper-sub">{step.content}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
