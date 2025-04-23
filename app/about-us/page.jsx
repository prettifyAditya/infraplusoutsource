import Image from "next/image"
import AboutSec from "../../components/AboutSec"
import FormComponent from "../../components/FormComponent"
import "../../styles/aboutus/aboutus.css"
export default function AboutUs() {
    return(
        <main>
            <div className="line">
                <div className="container banner-container">
                    <div className="banner mt-hdr caseStudy_banner">
                        <div className="bg">
                            <video autoPlay muted loop playsInline width="100%" height="100%">
                                <source src="/assets/video/aboutus-bg.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="banner-wrapper">
                            <div className="heading text-center">
                                <h2>About Infra outsource</h2>
                                <p>To become most reliable partner across the globe by providing cost effective solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutSec classname="about-sec" heading="Our Story" desc={
                <>
                    <p>Infraoutsouce Pvt. Ltd. is an IS0 9001: 2015 certified young and dynamic design and project management focused company, anchored by a group of professionals having experience across various sectors of development and investments. </p>
                    <p>Infraoutsouce Pvt. Ltd. is an IS0 9001: 2015 certified young and dynamic design and project management focused company, anchored by a group of professionals having experience across various sectors of development and investments. </p>
                </>
            } />
            <div className="about-secA">
                <div className="container flex">
                    <div className="colA">
                        <div className="icon">
                            <Image src="/assets/icon/mission.svg" alt="Mission Icon" width="80" height="80" />
                        </div>
                        <h5>Mission</h5>
                        <p>At Infraoutsource , we focus on supporting customers on regular basis by providing quality services within the time and budget. We continuously work on enhancing skills to bring more productivity and to make the process faster.</p>
                    </div>
                    <div className="colB">
                        <div className="icon">
                        <Image src="/assets/icon/vision.svg" alt="Vision Icon" width="80" height="80" />
                        </div>
                        <h5>Vision</h5>
                        <p>To be a values-based global organization, providing customer-centric solutions to the highest standards of excellence, creating value to all stakeholders.</p>
                    </div>
                </div>
            </div>
            <div className="about-secB">
                <div className="container sec-padd-all">
                    <div className="heading text-center">
                        <h2>Client Confidentiality and Security</h2>
                    </div>
                    <div className="content-wrapper flex">
                        <figure>
                            <Image src="/assets/images/about/about-secBimg.jpg" alt="About Us Image" width="463" height="408" />
                        </figure>
                        <figcaption>
                            <p>Protecting confidential information is fundamental to our relationship with our clients and to our business. All information received in connection with a client matter is treated with confidentiality. We will not disclose that information except in accordance with our professional obligations, as authorized by the client, required by law or as contemplated by this.</p>
                            <ul>
                                <li>Non-Disclosure Agreement (NDA) is executed with each client which covers all the Information which is related to client and project
                                </li>
                                <li>Apart from the client separate NDA will be signed by employee which states not reveal data of company or project to outside
                                </li>
                                <li>Only client authorized personnel is allowed to access the VNC/VLAN/VPN. This setup prevents others from accessing the project information</li>
                                <li>Real-time Anti-virus and SPAM protection for desktops and servers</li>
                            </ul>
                        </figcaption>
                    </div>
                </div>
            </div>
            <FormComponent />
        </main>
    )
}