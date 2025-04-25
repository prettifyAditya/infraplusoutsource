import AboutSec from "../components/AboutSec"
import ButtonMain from "../components/ButtonMain"
import CaseSlider from "../components/CaseSlider"
import ClientSlider from "../components/ClientSlider"
import FormComponent from "../components/FormComponent"
import HeroSection from "../components/HeroSection"
import ServiceCard from "../components/ServiceCard"
import StepSlider from "../components/StepSlider"
import WhyChooseAcc from "../components/WhyChooseAcc"
import "../styles/home/home.css"
import Image from "next/image"

export default function Home() {
  return (
      <main>
          <HeroSection 
            heading={
              <>
                <span className="highlight">Engineering</span> Brilliance Delivered Globally
              </>
            }
            desc="Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing."
            cardProps={{
              className:"home_3d",
              mediaType:"video",
              src: "/assets/video/HsecA-banner.mp4"
            }}
          />
          <div className="home-secB">
            <div className="container sec-pad">
              <div className="heading">
                <h2>Engineering <span className="highlight">Solutions</span> We Offer</h2>
              </div>
              <div className="solutions-grid grid-4">
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="home-secC">
            <div className="container sec-padd-all">
              <div className="heading">
                  <h2>Featured <span className="highlight">Outsourcing</span> Services</h2>
                  <p>Get access to cost-effective technology and a community of engineers with diverse specializations. Leverage our ISO-certified mechanical engineering solutions that include</p>
              </div>
              <div className="services-grid grid-6">
                  <ServiceCard
                    icon="icon1.svg"
                    title="CAD Conversion Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="2D Drafting Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Modeling Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Rendering Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Rendering Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Rendering Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="CAD Conversion Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="2D Drafting Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Modeling Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Rendering Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Rendering Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Rendering Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="CAD Conversion Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="2D Drafting Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Modeling Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Rendering Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Rendering Services" 
                  />
                  <ServiceCard
                    icon="icon1.svg"
                    title="3D Rendering Services" 
                  />
              </div>
              <div className="btn-wrapper flex text-center">
                  <ButtonMain desc="View all services" />
                  <ButtonMain desc="Enquire now" />
              </div>
            </div>
          </div>
          <AboutSec
            heading="Infra Outsource"
            desc={
              <p>
                Infraoutsouce Pvt. Ltd. is an IS0 9001: 2015 certified young and dynamic design and project management focused company, anchored by a group of professionals having experience across various sectors of development and investments. 
              </p>
            }
          />
          {/* <div className="home-secD">
            <div className="container sec-padd-all flex">
              <div className="colA">
                <h1>Infra Outsource</h1>
                <p>Infraoutsouce Pvt. Ltd. is an IS0 9001: 2015 certified young and dynamic design and project management focused company, anchored by a group of professionals having experience across various sectors of development and investments. </p>
                <div className="counter-wrapper">
                  <div className="counter-info-wrap">
                      <h5>50+</h5>
                      <p>Locations</p>
                  </div>
                  <div className="counter-info-wrap">
                      <h5>18+</h5>
                      <p>Countries</p>
                  </div>
                  <div className="counter-info-wrap">
                      <h5>100+</h5>
                      <p>Projects</p>
                  </div>
                </div>
                <ButtonMain desc="Read more" />
              </div>
              <div className="colB">
                <div className="upper-sec">
                  <ul>
                    <li>India</li>
                    <li>Senegal</li>
                    <li>Nigeria</li>
                    <li>Africa</li>
                    <li>Middle East</li>
                  </ul>
                </div>
                <div className="lower-sec">
                  <video autoPlay muted loop playsInline>
                    <source src="/assets/video/HsecD-banner.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div> */}
          <WhyChooseAcc />
          <div className="home-secF">
            <div className="container sec-padd-all">
              <div className="heading">
                <h2>Outsourcing Engineering Services Workflow</h2>
              </div>
              <StepSlider
                title="Comprehensive Needs Assessment"
                desc="Analyze engineering requirements and project specifications to define clear objectives and deliverables."
              />
            </div>
          </div>
            <CaseSlider heading={
              <>
                Turning Concepts into <span className="highlight">Iconic </span>
                Creations
              </>
            }
            subHeading="Create stunning visual representations from architectural designs to
            minimize design iterations and accelerate project completion." />
          <div className="home-secG home-secF home-secH">
            <div className="container sec-padd-all">
              <div className="heading">
                <h2>Turning Challenges into Cheers</h2>
                <p>Built for Results, Proven by Happy Clients.</p>
              </div>
              <ClientSlider />
            </div>
          </div>
          <div className="home-secI">
            <div className="container flex">
                <div className="colA">
                  <h2>Still not convinced that outsourcing will suit your business?</h2>
                  <p>Get a 100% FREE consultation with one of the Infraoutsource team!</p>
                  <ButtonMain desc="Enquire now" />
                </div>
                <div className="colB">
                  <figure>
                      <video playsInline autoPlay muted loop>
                        <source src="/assets/video/HsecI-banner.mp4" />
                      </video>
                  </figure>
                </div>
            </div>
          </div>
            <FormComponent />
      </main>
    )
}
