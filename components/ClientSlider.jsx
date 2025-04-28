"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules"
import { useEffect, useRef } from "react";
import "../styles/home/home.css"
import Image from "next/image";

export default function ClientSlider() {
  const swiperRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.navigation.update();
        }
    }, 100)
  }, []);
  return (
    <div className="client-wrapper">
      <div className="swiper-nav client-nav">
          <button className="client-prev">
              <div className="svgg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m14 7l-5 5l5 5" strokeWidth="1"/></svg>
              </div>
          </button>
          <button className="client-next">
            <div className="svgg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" d="m10 17l5-5l-5-5" strokeWidth="1"/></svg>
            </div>
          </button>
      </div>
            <Swiper 
              className="client-slider"
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={2}
              slidesPerView ={2.1}
              speed={1000}
              navigation={{
                  prevEl: ".client-prev",
                  nextEl: ".client-next"
              }}
              breakpoints={{
                      0: {
                          slidesPerView: 1.1,
                      },
                      540: {
                          slidesPerView: 1.2,
                      },
                      675: {
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
                <SwiperSlide>
                    <div className="client-col item-md">
                        <figure>
                            <Image src="/assets/images/clients/client1.jpg" width="391" height="421" alt="Clients"></Image>
                        </figure>
                        <figcaption>
                            <h4>Name Here</h4>
                            <p>Design Company, California</p>
                        </figcaption>
                        <div className="hoverItem">
                            <Image src="/assets/icon/quote.svg" width="56" height="56" alt="Quote Icon"></Image>
                            <p>Detailed attention to our enquiry was a result of awarding our project to Infra outsource. We outsourced many processes such as conceptual drawings, shop drawings…</p>
                            <div className="details">
                                <h6>Name Here</h6>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-col item-md">
                        <figure>
                            <Image src="/assets/images/clients/client1.jpg" width="391" height="421" alt="Clients"></Image>
                        </figure>
                        <figcaption>
                            <h4>Name Here</h4>
                            <p>Design Company, California</p>
                        </figcaption>
                        <div className="hoverItem">
                            <Image src="/assets/icon/quote.svg" width="56" height="56" alt="Quote Icon"></Image>
                            <p>Detailed attention to our enquiry was a result of awarding our project to Infra outsource. We outsourced many processes such as conceptual drawings, shop drawings…</p>
                            <div className="details">
                                <h6>Name Here</h6>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-col item-md">
                        <figure>
                            <Image src="/assets/images/clients/client1.jpg" width="391" height="421" alt="Clients"></Image>
                        </figure>
                        <figcaption>
                            <h4>Name Here</h4>
                            <p>Design Company, California</p>
                        </figcaption>
                        <div className="hoverItem">
                            <Image src="/assets/icon/quote.svg" width="56" height="56" alt="Quote Icon"></Image>
                            <p>Detailed attention to our enquiry was a result of awarding our project to Infra outsource. We outsourced many processes such as conceptual drawings, shop drawings…</p>
                            <div className="details">
                                <h6>Name Here</h6>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-col item-md">
                        <figure>
                            <Image src="/assets/images/clients/client1.jpg" width="391" height="421" alt="Clients"></Image>
                        </figure>
                        <figcaption>
                            <h4>Name Here</h4>
                            <p>Design Company, California</p>
                        </figcaption>
                        <div className="hoverItem">
                            <Image src="/assets/icon/quote.svg" width="56" height="56" alt="Quote Icon"></Image>
                            <p>Detailed attention to our enquiry was a result of awarding our project to Infra outsource. We outsourced many processes such as conceptual drawings, shop drawings…</p>
                            <div className="details">
                                <h6>Name Here</h6>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-col item-md">
                        <figure>
                            <Image src="/assets/images/clients/client1.jpg" width="391" height="421" alt="Clients"></Image>
                        </figure>
                        <figcaption>
                            <h4>Name Here</h4>
                            <p>Design Company, California</p>
                        </figcaption>
                        <div className="hoverItem">
                            <Image src="/assets/icon/quote.svg" width="56" height="56" alt="Quote Icon"></Image>
                            <p>Detailed attention to our enquiry was a result of awarding our project to Infra outsource. We outsourced many processes such as conceptual drawings, shop drawings…</p>
                            <div className="details">
                                <h6>Name Here</h6>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="client-col item-md">
                        <figure>
                            <Image src="/assets/images/clients/client1.jpg" width="391" height="421" alt="Clients"></Image>
                        </figure>
                        <figcaption>
                            <h4>Name Here</h4>
                            <p>Design Company, California</p>
                        </figcaption>
                        <div className="hoverItem">
                            <Image src="/assets/icon/quote.svg" width="56" height="56" alt="Quote Icon"></Image>
                            <p>Detailed attention to our enquiry was a result of awarding our project to Infra outsource. We outsourced many processes such as conceptual drawings, shop drawings…</p>
                            <div className="details">
                                <h6>Name Here</h6>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
        </Swiper>
    </div>
  )
}
