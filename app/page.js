import ButtonMain from "../components/ButtonMain"
import CaseSlider from "../components/CaseSlider"
import ClientSlider from "../components/ClientSlider"
import FormComponent from "../components/FormComponent"
import ServiceCard from "../components/ServiceCard"
import StepSlider from "../components/StepSlider"
import ThreeDCard from "../components/ThreeDCard"
import WhyChooseAcc from "../components/WhyChooseAcc"
import "../styles/home/home.css"
import Image from "next/image"

const WhyQues = [
  {
    title: "Reduced Overhead Costs",
    description: `
        <p>This is one of the major benefits of outsourcing engineering services to India. Most of the companies outsource engineering services as it helps them to reduce about 30-50% of overhead costs on an average.</p>
    `
  },
  {
    title: "Free Up Time",
    description: `
        <p>This is one of the major benefits of outsourcing engineering services to India. Most of the companies outsource engineering services as it helps them to reduce about 30-50% of overhead costs on an average.</p>
    `
},
  {
    title: "Less Office Space is Required",
    description: `
        <p>This is one of the major benefits of outsourcing engineering services to India. Most of the companies outsource engineering services as it helps them to reduce about 30-50% of overhead costs on an average.</p>
    `
},
  {
    title: "Access to Complex Services",
    description: `
        <p>This is one of the major benefits of outsourcing engineering services to India. Most of the companies outsource engineering services as it helps them to reduce about 30-50% of overhead costs on an average.</p>
    `
},
{
  title: "Services on As-Need Basis",
  description: `
      <p>This is one of the major benefits of outsourcing engineering services to India. Most of the companies outsource engineering services as it helps them to reduce about 30-50% of overhead costs on an average.</p>
  `
},
{
  title: "Access to 24/7 Support",
  description: `
      <p>This is one of the major benefits of outsourcing engineering services to India. Most of the companies outsource engineering services as it helps them to reduce about 30-50% of overhead costs on an average.</p>
  `
}
]

export default function Home() {
  return (
      <main>
          <div className="home-secA mt-hdr">
            <div className="container sec-padd-all flex">
                <div className="colA">
                  <h2><span className="highlight">Engineering</span> Brilliance Delivered Globally</h2>
                  <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                  <button className="btn-btn">
                    <span type="button">
                        Get Pricing Instantly
                    </span>
                  </button>
                </div>
                <div className="colB">
                  <ThreeDCard className="home_3d" mediaType="video" src="/assets/video/HsecA-banner.mp4" />
                    {/* <figure>
                        <video playsInline autoPlay muted loop>
                          <source src="/assets/video/HsecA-banner.mp4" />
                        </video>
                    </figure> */}
                </div>
            </div>
          </div>
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
          <div className="home-secD">
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
          </div>
          <div className="home-secE">
            <div className="container sec-pad">
              <div className="heading">
                <h2>Why Choose Us</h2>
                <p>Infra outsource helps multi-disciplinary engineering teams to scale and grow more profitably</p>
              </div>
              <div className="why-wrapper flex">
                  <div className="colA">
                    <figure>
                      <video playsInline autoPlay muted loop>
                        <source src="/assets/video/HsecE-banner.mp4" />
                      </video>
                    </figure>
                  </div>
                  <div className="colB">
                    <div className="Why-choose-wrapper">
                        <WhyChooseAcc whyQues={WhyQues} />
                    </div>
                  </div>
              </div>
            </div>
          </div>
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
          <div className="home-secG home-secF">
            <div className="container sec-padd-all">
              <div className="heading">
                <h2>Turning Concepts into <span className="highlight">Iconic</span> Creations</h2>
                <p>Create stunning visual representations from architectural designs to minimize design iterations and accelerate project completion.</p>
              </div>
              <CaseSlider />
              <div className="btn-wrapper flex text-center">
                <ButtonMain desc="View all case studies" />
                <ButtonMain desc="Enquire now" />
              </div>
            </div>
          </div>
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
