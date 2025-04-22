"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef } from "react";
import "../styles/home/home.css"
import ThreeDCard from "./ThreeDCard";
import ButtonMain from "./ButtonMain";

export default function CaseSlider({ classname="" ,heading, subHeading }) {
  const swiperRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.navigation.update();
        }
    }, 100)
  }, []);
  return (
    <div className={`home-secG home-secF ${classname}`}>
      <div className="container sec-padd-all">
        <div className="heading">
          <h2>{heading}</h2>
          <p>
            {subHeading}
          </p>
        </div>
        <div className="caseStudy-wrapper">
          <div className="swiper-nav case-nav">
            <button className="case-prev">
              <div className="svgg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14 7l-5 5l5 5"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </button>
            <button className="case-next">
              <div className="svgg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10 17l5-5l-5-5"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </button>
          </div>
          <Swiper
            className="case-slider"
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={2.1}
            speed={1000}
            navigation={{
              prevEl: ".case-prev",
              nextEl: ".case-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              540: {
                slidesPerView: 1,
              },
              991: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <ThreeDCard desc="Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer" />
            </SwiperSlide>
            <SwiperSlide>
              <ThreeDCard desc="Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer" />
            </SwiperSlide>
            <SwiperSlide>
              <ThreeDCard desc="Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer" />
            </SwiperSlide>
            <SwiperSlide>
              <ThreeDCard desc="Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="btn-wrapper flex text-center">
          <ButtonMain desc="View all case studies" />
          <ButtonMain desc="Enquire now" />
        </div>
      </div>
    </div>
  );     
}
