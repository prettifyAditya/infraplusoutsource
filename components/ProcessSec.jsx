"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef } from "react";
import "../styles/services/services.css"
import ButtonMain from "./ButtonMain";

export default function ProcessSec({ classname="" ,heading, subHeading}){
    const swiperRef = useRef(null);
          useEffect(() => {
            setTimeout(() => {
                if (swiperRef.current) {
                    swiperRef.current.swiper.navigation.update();
                }
            }, 100)
          }, []);
    return (
      <div className={`services-secB ${classname}`}>
        <div className="container sec-padd-all text-center">
          <div className="heading">
            <h2>{heading}</h2>
            <p>{subHeading}</p>
          </div>
          <div className="process-wrapper">
            <Swiper
              className="process-slider"
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={70}
              slidesPerView={4}
              speed={1000}
              navigation={{
                prevEl: ".process-prev",
                nextEl: ".process-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                540: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              <SwiperSlide>
                <div className="process-wrap">
                  <span className="count">01</span>
                  <h6>Requirement Analysis</h6>
                  <p>
                    meet with the client to discuss their business challenges
                    and project requirements.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process-wrap">
                  <span className="count">01</span>
                  <h6>Requirement Analysis</h6>
                  <p>
                    meet with the client to discuss their business challenges
                    and project requirements.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process-wrap">
                  <span className="count">01</span>
                  <h6>Requirement Analysis</h6>
                  <p>
                    meet with the client to discuss their business challenges
                    and project requirements.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process-wrap">
                  <span className="count">01</span>
                  <h6>Requirement Analysis</h6>
                  <p>
                    meet with the client to discuss their business challenges
                    and project requirements.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="process-wrap">
                  <span className="count">01</span>
                  <h6>Requirement Analysis</h6>
                  <p>
                    meet with the client to discuss their business challenges
                    and project requirements.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="btn-wrap">
              <ButtonMain />
              <div className="swiper-nav steps-nav">
                <button className="process-prev">
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
                <button className="process-next">
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
            </div>
          </div>
        </div>
      </div>
    );
} 