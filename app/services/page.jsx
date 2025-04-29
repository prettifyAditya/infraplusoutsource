import Image from "next/image";
import DescSec from "../../components/DescSec";
import HeroSection from "../../components/HeroSection";
import '../../styles/services/services.css'
import Link from "next/link";
import ButtonMain from "../../components/ButtonMain";
import FormComponent from "../../components/FormComponent";
import WhyChooseAcc from "../../components/WhyChooseAcc";
import ProcessSec from "../../components/ProcessSec";
import AditionalSec from "../../components/AditionalSec";

export default function Services() {
    return (
      <main>
        <HeroSection
          classname="serviceHero"
          heading="Outsource Mechanical Engineering Services"
          desc="Leverage our mechanical engineering services to optimize production. Identify system challenges and speed-up delivery with our objective evaluation"
          cardProps={{
            className: "home_3d",
            mediaType: "image",
            src: "/assets/images/services/services-banner.jpg",
          }}
        />
        <DescSec
          heading={
            <>
              Get Instant <span className="highlight">quote !</span>
            </>
          }
        />
        <div className="services-secA">
          <div className="container sec-padd-all text-center">
            <div className="heading">
              <h2>Mechanical Design Services</h2>
              <p>
                Get access to cost-effective technology and a community of
                engineers with diverse specializations. Leverage our
                ISO-certified mechanical engineering solutions that include
              </p>
            </div>
            <div className="services-container grid grid-3">
              <div className="service-item">
                <Image
                  src="/assets/images/services/icon/icon1.svg"
                  alt="Icon"
                  width="40"
                  height="40"
                ></Image>
                <div className="content">
                  <h6>CAD Conversion Services</h6>
                  <p>
                    Create stunning visual representations from architectural
                    designs to minimize design iterations and accelerate project
                    completion.
                  </p>
                  <Link href="javascript:;" className="more_a">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="service-item">
                <Image
                  src="/assets/images/services/icon/icon1.svg"
                  alt="Icon"
                  width="40"
                  height="40"
                ></Image>
                <div className="content">
                  <h6>CAD Conversion Services</h6>
                  <p>
                    Create stunning visual representations from architectural
                    designs to minimize design iterations and accelerate project
                    completion.
                  </p>
                  <Link href="javascript:;" className="more_a">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="service-item">
                <Image
                  src="/assets/images/services/icon/icon1.svg"
                  alt="Icon"
                  width="40"
                  height="40"
                ></Image>
                <div className="content">
                  <h6>CAD Conversion Services</h6>
                  <p>
                    Create stunning visual representations from architectural
                    designs to minimize design iterations and accelerate project
                    completion.
                  </p>
                  <Link href="javascript:;" className="more_a">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="service-item">
                <Image
                  src="/assets/images/services/icon/icon1.svg"
                  alt="Icon"
                  width="40"
                  height="40"
                ></Image>
                <div className="content">
                  <h6>CAD Conversion Services</h6>
                  <p>
                    Create stunning visual representations from architectural
                    designs to minimize design iterations and accelerate project
                    completion.
                  </p>
                  <Link href="javascript:;" className="more_a">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="service-item">
                <Image
                  src="/assets/images/services/icon/icon1.svg"
                  alt="Icon"
                  width="40"
                  height="40"
                ></Image>
                <div className="content">
                  <h6>CAD Conversion Services</h6>
                  <p>
                    Create stunning visual representations from architectural
                    designs to minimize design iterations and accelerate project
                    completion.
                  </p>
                  <Link href="javascript:;" className="more_a">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="service-item">
                <Image
                  src="/assets/images/services/icon/icon1.svg"
                  alt="Icon"
                  width="40"
                  height="40"
                ></Image>
                <div className="content">
                  <h6>CAD Conversion Services</h6>
                  <p>
                    Create stunning visual representations from architectural
                    designs to minimize design iterations and accelerate project
                    completion.
                  </p>
                  <Link href="javascript:;" className="more_a">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <ButtonMain />
          </div>
        </div>
        <ProcessSec
          heading="Our Mechanical Engineering Processes"
          subHeading="To offer the best business benefits to our clients, we adhere to a
              streamlined and systematic process for our mechanical design
              services."
        />
        <WhyChooseAcc />
        <AditionalSec
          classname="serviceAdd"
          heading="Additional Services You Can Benefit From"
        />
        <FormComponent />
      </main>
    );
}