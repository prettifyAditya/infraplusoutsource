"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef } from "react";
import "../styles/home/home.css"
import InnerServicesCard from "./InnerServicesCard";

export default function InnerServicesSlider() {
    const swiperRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.swiper.navigation.update();
            }
        }, 100)
    }, []);
    return (
      <div className="serviceD-secE">
        <div className="container sec-padd-all">
          <div className="heading">
            <h2>More Mechanical Engineering Services</h2>
            <p>
              Get access to cost-effective technology and a community of
              engineers with diverse specializations. Leverage our ISO-certified
              mechanical engineering solutions that include
            </p>
          </div>
          <div className="innersliderwraper">
            <div className="swiper-nav inner-nav">
              <button className="inner-prev">
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
              <button className="inner-next">
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
              className="inner-slider"
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={2.1}
              speed={1000}
              navigation={{
                prevEl: ".inner-prev",
                nextEl: ".inner-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 10
                },
                540: {
                  slidesPerView: 1.2,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 2.2,
                },
                991: {},
                1200: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              <SwiperSlide>
                <InnerServicesCard heading="CAD Conversion Services" subHeading="Create stunning visual representations from architectural designs to minimize design iterations and accelerate project completion." />
              </SwiperSlide>
              <SwiperSlide>
                <InnerServicesCard heading="CAD Conversion Services" subHeading="Create stunning visual representations from architectural designs to minimize design iterations and accelerate project completion." />
              </SwiperSlide>
              <SwiperSlide>
                <InnerServicesCard heading="CAD Conversion Services" subHeading="Create stunning visual representations from architectural designs to minimize design iterations and accelerate project completion." />
              </SwiperSlide>
              <SwiperSlide>
                <InnerServicesCard heading="CAD Conversion Services" subHeading="Create stunning visual representations from architectural designs to minimize design iterations and accelerate project completion." />
              </SwiperSlide>
              <SwiperSlide>
                <InnerServicesCard heading="CAD Conversion Services" subHeading="Create stunning visual representations from architectural designs to minimize design iterations and accelerate project completion." />
              </SwiperSlide>
              <SwiperSlide>
                <InnerServicesCard heading="CAD Conversion Services" subHeading="Create stunning visual representations from architectural designs to minimize design iterations and accelerate project completion." />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    );
}