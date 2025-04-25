"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef } from "react";
import "../styles/services/services.css"
import ButtonMain from "./ButtonMain";
import StaticData from "../public/data/StaticData.json"

const processData = StaticData.Service.ProcessData


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
              {
                processData.map((item, index) => (
                  <SwiperSlide key={index}>
                      <div className="process-wrap">
                        <span className="count">{(index + 1).toString().padStart(2, "0")}</span>
                        <h6>{item.title}</h6>
                        <p>
                          {item.description}
                        </p>
                      </div>
                  </SwiperSlide>
                ))
              }
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