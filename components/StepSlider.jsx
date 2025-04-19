"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef } from "react";
import "../styles/home/home.css"
import Image from "next/image";

export default function StepSlider({ title, desc}) {
  const swiperRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.navigation.update();
        }
    }, 100)
  }, []);
  return (
    <div className="steps-wrapper">
      <div className="swiper-nav steps-nav">
          <button className="steps-prev">
              <div className="svgg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg>
              </div>
          </button>
          <button className="steps-next">
            <div className="svgg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg>
            </div>
          </button>
      </div>
            <Swiper 
              className="steps-slider"
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView ={2.1}
              speed={1000}
              navigation={{
                  prevEl: ".steps-prev",
                  nextEl: ".steps-next"
              }}
              breakpoints={{
                      0: {
                          slidesPerView: 1.2,
                      },
                      540: {
                          slidesPerView: 2.1,
                      },
                      991: {

                      },
                      1200: {
                          slidesPerView: 3
                      }
                  }}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                <SwiperSlide>
                    <div className="step-wrap">
                        <div className="upper-count">
                          <div className="icon">
                              <Image src="/assets/images/home/icon/icon1.svg" width={25} height={25} alt="icon"></Image>
                          </div>
                          <div className="step-count">
                            Step 01
                          </div>
                        </div>
                        <div className="steps">
                          <h6>{title}</h6>
                          <div className="scroll">
                            <p>{desc}</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step-wrap">
                        <div className="upper-count">
                          <div className="icon">
                              <Image src="/assets/images/home/icon/icon1.svg" width={25} height={25} alt="icon"></Image>
                          </div>
                          <div className="step-count">
                            Step 02
                          </div>
                        </div>
                        <div className="steps">
                          <h6>{title}</h6>
                          <div className="scroll">
                            <p>{desc}</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step-wrap">
                        <div className="upper-count">
                          <div className="icon">
                              <Image src="/assets/images/home/icon/icon1.svg" width={25} height={25} alt="icon"></Image>
                          </div>
                          <div className="step-count">
                            Step 03
                          </div>
                        </div>
                        <div className="steps">
                          <h6>{title}</h6>
                          <div className="scroll">
                            <p>{desc}</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step-wrap">
                        <div className="upper-count">
                          <div className="icon">
                              <Image src="/assets/images/home/icon/icon1.svg" width={25} height={25} alt="icon"></Image>
                          </div>
                          <div className="step-count">
                            Step 04
                          </div>
                        </div>
                        <div className="steps">
                          <h6>{title}</h6>
                          <div className="scroll">
                            <p>{desc}</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="step-wrap">
                        <div className="upper-count">
                          <div className="icon">
                              <Image src="/assets/images/home/icon/icon1.svg" width={25} height={25} alt="icon"></Image>
                          </div>
                          <div className="step-count">
                            Step 05
                          </div>
                        </div>
                        <div className="steps">
                          <h6>{title}</h6>
                          <div className="scroll">
                            <p>{desc}</p>
                          </div>
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>
    </div>
  )
}
