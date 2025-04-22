"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useRef } from "react"
import AditionalCard from "./AditionalCard"
import "../styles/components/components.css"
import ButtonMain from "./ButtonMain";

export default function AditionalSec({ heading, classname="" }) {
    const swiperRef = useRef(null)
    return(
        <div className={`additional-services ${classname}`}>
            <div className="container sec-pad">
              <div className="heading">
                <h2>{heading}</h2>
                <div className="swiper-nav add-nav">
                <button className="add-prev">
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
                <button className="add-next">
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
              <div className="additonal-wrapper">
                <Swiper
                    className="additional-slider"
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={4}
                    speed={1000}
                    navigation={{
                        prevEl: ".add-prev",
                        nextEl: ".add-next",
                    }}
                    breakpoints={{
                        0: {
                          slidesPerView: 2,
                        },
                        540: {
                          slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 4
                        },
                        1200: {
                          slidesPerView: 4,
                        },
                      }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    <SwiperSlide>
                        <AditionalCard
                            mainHead="Architectural Services"
                            imgSrc="/assets/images/solutions/sol1.png"
                            hoverHead="Architectural Services"
                            desc="Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AditionalCard
                            mainHead="Architectural Services"
                            imgSrc="/assets/images/solutions/sol1.png"
                            hoverHead="Architectural Services"
                            desc="Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AditionalCard
                            mainHead="Architectural Services"
                            imgSrc="/assets/images/solutions/sol1.png"
                            hoverHead="Architectural Services"
                            desc="Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AditionalCard
                            mainHead="Architectural Services"
                            imgSrc="/assets/images/solutions/sol1.png"
                            hoverHead="Architectural Services"
                            desc="Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AditionalCard
                            mainHead="Architectural Services"
                            imgSrc="/assets/images/solutions/sol1.png"
                            hoverHead="Architectural Services"
                            desc="Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing."
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AditionalCard
                            mainHead="Architectural Services"
                            imgSrc="/assets/images/solutions/sol1.png"
                            hoverHead="Architectural Services"
                            desc="Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing."
                        />
                    </SwiperSlide>
                </Swiper>
              </div>
              <div className="btn-wrapper">
                <ButtonMain />
              </div>
            </div>
        </div>
    )
}