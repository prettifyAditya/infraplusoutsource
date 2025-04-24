"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef,useState } from "react";
import Image from "next/image"
import ButtonMain from "../../components/ButtonMain"
import "../../styles/career/career.css"
import Link from "next/link";

const lifeData = [
    {
        src : "/assets/images/case/caseStudy1.jpg"
    },
    {
        src : "/assets/images/case/caseStudy1.jpg"
    },
    {
        src : "/assets/images/case/caseStudy1.jpg"
    },
    {
        src : "/assets/images/case/caseStudy1.jpg"
    },
]

const workSliderData = [
    {
        src: "/assets/images/careers/icon/icon1.svg",
        title: "Individuality",
        desc: "At infraoutsource, we do not just recognize uniqueness; we celebrate it."
    },
    {
        src: "/assets/images/careers/icon/icon2.svg",
        title: "Curiosity",
        desc: "Our shared passion for discovery drives every team member."
    },
    {
        src: "/assets/images/careers/icon/icon1.svg",
        title: "Three",
        desc: "At infraoutsource, we do not just recognize uniqueness; we celebrate it."
    },
    {
        src: "/assets/images/careers/icon/icon1.svg",
        title: "Individuality",
        desc: "At infraoutsource, we do not just recognize uniqueness; we celebrate it."
    },
    {
        src: "/assets/images/careers/icon/icon1.svg",
        title: "Individuality",
        desc: "At infraoutsource, we do not just recognize uniqueness; we celebrate it."
    },

]

const openingData = [
    {
        title: "Software Engineer",
        description: `
           <h6><strong>Job Location : </strong>Gurgaon</h6>
           <h6><strong>Experience : </strong>1 Years</h6>
           <p>At Infraoutsource, we are passionate about building beautiful and user-friendly websites. We are looking for a web developer to join our team and help us create amazing websites for our clients. As a web developer, you will be working closely with our senior web developers to learn the ropes of the trade.</p>
           <button class="btn">
                Apply Now
            </button>
        `
    },
    {
        title: "Business Development Executive",
        description: `
           <h6><strong>Job Location : </strong>Gurgaon</h6>
           <h6><strong>Experience : </strong>1 Years</h6>
           <p>At Infraoutsource, we are passionate about building beautiful and user-friendly websites. We are looking for a web developer to join our team and help us create amazing websites for our clients. As a web developer, you will be working closely with our senior web developers to learn the ropes of the trade.</p>
           <button class="btn-btn">
                <span type="button">
                    Apply Now
                </span>
            </button>
        `
    },
    {
        title: "Business Development Executive",
        description: `
           <h6><strong>Job Location : </strong>Gurgaon</h6>
           <h6><strong>Experience : </strong>1 Years</h6>
           <p>At Infraoutsource, we are passionate about building beautiful and user-friendly websites. We are looking for a web developer to join our team and help us create amazing websites for our clients. As a web developer, you will be working closely with our senior web developers to learn the ropes of the trade.</p>
           <button class="btn-btn">
                <span type="button">
                    Apply Now
                </span>
            </button>
        `
    },
    {
        title: "Business Development Executive",
        description: `
           <h6><strong>Job Location : </strong>Gurgaon</h6>
           <h6><strong>Experience : </strong>1 Years</h6>
           <p>At Infraoutsource, we are passionate about building beautiful and user-friendly websites. We are looking for a web developer to join our team and help us create amazing websites for our clients. As a web developer, you will be working closely with our senior web developers to learn the ropes of the trade.</p>
           <button class="btn-btn">
                <span type="button">
                    Apply Now
                </span>
            </button>
        `
    },

]

const openModel = () => {
    document.querySelector('.career-pop').classList.add('is-open')
    document.querySelector('.overlay').classList.add('is-open')
    document.querySelector('body').classList.add('overflow-hidden')
}
export default function Career() {
    useEffect(() => {
        const buttons = document.querySelectorAll('.open-model-btn')
        
        buttons.forEach(btn => btn.addEventListener('click', openModel))

        return() => {
            buttons.forEach(btn => btn.removeEventListener('click', openModel));
        }
    }, [])
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const swiperRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            const swiper = swiperRef.current?.swiper
            if (swiper?.navigation) {
                swiper.navigation.update();
            }
        }, 100)
    }, [])
    return(
        <main>
            <div className="line">
                <div className="container banner-container">
                    <div className="banner mt-hdr career_banner">
                        <div className="bg">
                            <video autoPlay muted loop playsInline width="100%" height="100%">
                                <source src="/assets/video/career-bg.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="banner-wrapper">
                            <div className="heading text-center">
                                <h2>Career</h2>
                                <p>Build the Future With Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="career-secA">
                <div className="container sec-padd-all flex">
                    <div className="colA">
                        <h2>Opportunity to create an impact</h2>
                    </div>
                    <div className="colB">
                        <p>At Infraoutsource, we value diversity and believe in equal opportunities for everyone. We focus on continuous learning to help people grow as strategic thinkers. Our training programs are designed to guide everyone toward success and encourage them to contribute to our exciting journey together.</p>
                        <button className="btn">
                            Current Openings
                        </button>
                    </div>
                </div>
            </div>
            <div className="career-secB">
                <div className="container sec-padd-all">
                    <div className="heading">
                        <h2>Life@Infra outsource</h2>
                    </div>
                    <div className="life-wrapper">
                        <div className="swiper-nav life-nav">
                            <button className="life-prev">
                                <div className="svgg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg>
                                </div>
                            </button>
                            <button className="life-next">
                                <div className="svgg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg>
                                </div>
                            </button>
                        </div>
                        <Swiper 
                        className="life-slider"
                        ref={swiperRef}
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView ={3}
                        speed={1000}
                        navigation={{
                            prevEl: ".life-prev",
                            nextEl: ".life-next"
                        }}
                        breakpoints={{
                                0: {
                                    slidesPerView: 1.2,
                                },
                                540: {
                                    slidesPerView: 2.2,
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
                                lifeData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Link href="javascript:;">
                                            <figure>
                                                <Image src={item.src} width="438" height="335" alt="Life at OutSource" />
                                                <div className="icon"></div>
                                            </figure>
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="career-secC">
                <div className="container sec-padd-all">
                    <div className="heading text-center">
                        <h2>What it’s like to work here</h2>
                        <p>Infraoutsource is a great place for you to use your talent and focus on what matters. We help you to bring your best self to work and make a difference.</p>
                    </div>
                    <div className="workHere-wrapper flex">
                        <div className="colA">
                            <h6>What we stand for
                            </h6>
                            <p>To support our goal, we operate under 3 pillars. Each one is integral to our company culture and how we operate.</p>
                            <div className="work-wrapper">
                            <div className="swiper-nav work-nav">
                                <button className="work-prev">
                                    <div className="svgg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg>
                                    </div>
                                </button>
                                <button className="work-next">
                                    <div className="svgg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg>
                                    </div>
                                </button>
                            </div>
                            <Swiper 
                                className="work-slider"
                                ref={swiperRef}
                                modules={[Navigation]}
                                spaceBetween={30}
                                slidesPerView ={2}
                                speed={1000}
                                navigation={{
                                    prevEl: ".work-prev",
                                    nextEl: ".work-next"
                                }}
                                breakpoints={{
                                        0: {
                                            slidesPerView: 1.2,
                                        },
                                        540: {
                                            slidesPerView: 1.2,
                                        },
                                        991: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 2
                                        }
                                    }}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                >
                                    {
                                        workSliderData.map((item, index) => (
                                            <SwiperSlide key={index}> 
                                                <div className="work-col">
                                                    <div className="icon">
                                                        <Image src={item.src} alt="icon" width="45" height="45" />
                                                    </div>
                                                    <h6>{item.title}</h6>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                        <div className="colB">
                            <figure>
                                <Image src="/assets/images/careers/career-secC.jpg" width="418" height="322" alt="What we stand for" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="career-secD">
                <div className="container sec-padd-all flex">
                    <div className="colA">
                        <h2>Current Openings</h2>
                        <ButtonMain onClick={openModel} desc="Apply Now" />
                    </div>
                    <div className="colB">
                        <div className="current-openings">
                            {
                                openingData.length > 0 ? (
                                    openingData.map((opening, index) => (
                                        <div key={index} className={`col ${activeIndex === index ? "active" : ""}`}>
                                            <div className="title" onClick={() => toggleAccordion(index)}>
                                                <h6>{opening.title}</h6>
                                                <div className="ico"></div>
                                            </div>
                                            <article>
                                                <div className="content-desc website-content">
                                                    <div dangerouslySetInnerHTML={{ __html: opening.description }} />
                                                </div>
                                            </article>
                                        </div>
                                    ))                        
                                ) : (
                                    <p className="text-center">No Current Openings.</p>
                                )
                            }
                        </div>  
                    </div>
                </div>
            </div>
        </main>
    )
}