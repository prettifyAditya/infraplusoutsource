"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef } from "react";
import Image from "next/image"
import ButtonMain from "../../components/ButtonMain"
import '../../styles/case/case.css'
import FormComponent from "../../components/FormComponent"
import CaseGallery from "../../components/CaseGallery"
import CaseCard from "../../components/CaseCard";

const CaseGalleryData = [
    {
        mainImg: "/assets/images/case/caseStudy1.jpg",
        zoomImg: "/assets/images/case/caseStudy1.jpg",
    },
    {
        mainImg: "/assets/images/case/caseStudy1.jpg",
        zoomImg: "/assets/images/case/caseStudy1.jpg",
    },
    {
        mainImg: "/assets/images/case/caseStudy1.jpg",
        zoomImg: "/assets/images/case/caseStudy1.jpg",
    },
    {
        mainImg: "/assets/images/case/caseStudy1.jpg",
        zoomImg: "/assets/images/case/caseStudy1.jpg",
    },
    {
        mainImg: "/assets/images/case/caseStudy1.jpg",
        zoomImg: "/assets/images/case/caseStudy1.jpg",
    },
    {
        mainImg: "/assets/images/case/caseStudy1.jpg",
        zoomImg: "/assets/images/case/caseStudy1.jpg",
    },
]

const CaseSlider = [
    {
        src : "/assets/images/case/case1.jpg",
        desc : "Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer"
    },
    {
        src : "/assets/images/case/case1.jpg",
        desc : "Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer"
    },
    {
        src : "/assets/images/case/case1.jpg",
        desc : "Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer"
    },
    {
        src : "/assets/images/case/case1.jpg",
        desc : "Infra outsource Provided CFD Simulation."
    },
    {
        src : "/assets/images/case/case1.jpg",
        desc : "Infra outsource Provided CFD Simulation."
    },

]

export default function CaseStudy() {
    const swiperRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            const swiper = swiperRef.current?.swiper
            if (swiper?.navigation) {
                swiper.navigation.update();
            }
        }, 100)
    }, []);
    return (
        <main>
            <div className="line">
                <div className="container banner-container">
                    <div className="banner mt-hdr caseStudy_banner">
                        <div className="bg">
                            <Image src="/assets/images/case/casestudy-banner.jpg" width="1180" height="622" alt="Banner Image" />
                        </div>
                        <div className="banner-wrapper">
                            <div className="heading">
                                <h2>Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer</h2>
                                <ButtonMain
                                    desc="Get Pricing Instantly"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="caseStudy-secA">
                <div className="container sec-padd-all">
                    <div className="content">
                        <p>CAD conversion has become an indispensable asset for businesses seeking to stay ahead in today's design-centric industries. However, handling these conversions in house is fraught with hurdles such as the need for specialized software skills, the time required for accurate conversion, and the potential for data loss. Such challenges can strain in-house capabilities, reducing efficiency and increasing expenses. Our portfolio of CAD conversion services is strategically devised to tackle the intricate challenges synonymous with in-house management.</p>
                        <p>CAD conversion has become an indispensable asset for businesses seeking to stay ahead in today's design-centric industries. However, handling these conversions in house is fraught with hurdles such as the need for specialized software skills, the time required for accurate conversion, and the potential for data loss. Such challenges can strain in-house capabilities, reducing efficiency and increasing expenses. Our portfolio of CAD conversion services is strategically devised to tackle the intricate challenges synonymous with in-house management.</p>
                        <p>CAD conversion has become an indispensable asset for businesses seeking to stay ahead in today's design-centric industries. However, handling these conversions in house is fraught with hurdles such as the need for specialized software skills, the time required for accurate conversion, and the potential for data loss. Such challenges can strain in-house capabilities, reducing efficiency and increasing expenses. Our portfolio of CAD conversion services is strategically devised to tackle the intricate challenges synonymous with in-house management.</p>
                    </div>
                </div>
            </div>
            <div className="caseStudy-secB">
                <div className="container sec-padd-all">
                    <div className="heading text-center">
                        <h2>Every Space Tells a Story</h2>
                        <p>Turning Data into Decisions</p>
                    </div>
                    <div className="case-gallery grid-3">
                        {
                            CaseGalleryData.map((item, index) => (
                                <CaseGallery key={index} {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="caseStudy-secC">
                <div className="container sec-padd-all">
                    <div className="heading text-center">
                        <h2>More Case Studies</h2>
                    </div>
                    <div className="case-wrapper">
                        <div className="swiper-nav case-nav">
                            <button className="case-prev">
                                <div className="svgg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg>
                                </div>
                            </button>
                            <button className="case-next">
                                <div className="svgg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg>
                                </div>
                            </button>
                        </div>
                        <Swiper 
                        className="case-slider"
                        ref={swiperRef}
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView ={3}
                        speed={1000}
                        navigation={{
                            prevEl: ".case-prev",
                            nextEl: ".case-next"
                        }}
                        breakpoints={{
                                0: {
                                    slidesPerView: 1.2,
                                },
                                540: {
                                    slidesPerView: 1.2,
                                },
                                675: {
                                    slidesPerView: 2.2
                                },
                                991: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 3
                                }
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            {
                                CaseSlider.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <CaseCard  {...item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <FormComponent />
        </main>
    )
}