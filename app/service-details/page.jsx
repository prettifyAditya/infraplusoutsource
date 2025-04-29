"use client"
import Image from "next/image"
import AditionalSec from "../../components/AditionalSec"
import CaseSlider from "../../components/CaseSlider"
import DescSec from "../../components/DescSec"
import FormComponent from "../../components/FormComponent"
import HeroSection from "../../components/HeroSection"
import ProcessSec from "../../components/ProcessSec"
import '../../styles/case/case.css'
import '../../styles/services/services.css'
import ButtonMain from "../../components/ButtonMain"
import { useState } from "react"
import InnerServicesSlider from "../../components/InnerServicesSlider"
import CaseGallery from "../../components/CaseGallery"

const openingData = [
    {
        title: "Management of Extensive Data Volumes",
        description: `
            <p>We generate AutoCAD drawings and organize them for effortless retrieval. Together with the client, we tackle issues like part assembly, file naming, data storage folder structures, and layer and font styles, and we adhere to all client-specified guidelines for final delivery.</p>
        `
    },
    
    {
        title: "Mechanical cad conversion service",
        description: `
            <p>We generate AutoCAD drawings and organize them for effortless retrieval. Together with the client, we tackle issues like part assembly, file naming, data storage folder structures, and layer and font styles, and we adhere to all client-specified guidelines for final delivery.</p>
        `
    },
    
    {
        title: "Continuous Quality Assurance",
        description: `
            <p>We generate AutoCAD drawings and organize them for effortless retrieval. Together with the client, we tackle issues like part assembly, file naming, data storage folder structures, and layer and font styles, and we adhere to all client-specified guidelines for final delivery.</p>
        `
    },
    {
        title: "Skilled and Updated Professionals",
        description: `
            <p>We generate AutoCAD drawings and organize them for effortless retrieval. Together with the client, we tackle issues like part assembly, file naming, data storage folder structures, and layer and font styles, and we adhere to all client-specified guidelines for final delivery.</p>
        `
    },
    {
        title: "Prompt Project Completion",
        description: `
            <p>We generate AutoCAD drawings and organize them for effortless retrieval. Together with the client, we tackle issues like part assembly, file naming, data storage folder structures, and layer and font styles, and we adhere to all client-specified guidelines for final delivery.</p>
        `
    },
    {
        title: "Pricing",
        description: `
            <p>We generate AutoCAD drawings and organize them for effortless retrieval. Together with the client, we tackle issues like part assembly, file naming, data storage folder structures, and layer and font styles, and we adhere to all client-specified guidelines for final delivery.</p>
        `
    },
    
];

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

const ServiceDetails = ({openings = openingData}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return(
        <main>
            <HeroSection
                classname="serviceD-banner"
                heading="Outsource CAD Conversion Services"
                desc="Leverage our mechanical engineering services to optimize production. Identify system challenges and speed-up delivery with our objective evaluation"
                cardProps={{
                className: "home_3d service_3d",
                mediaType: "image",
                src: "/assets/images/services/serviceD-banner.jpg",
                }}
            />
            <DescSec
                classname="serviceD-secB"
                formProps={{
                    className: "DescForm serviceD-form"
                }}
                secClass="serviceD_secB"
                heading="Get Instant quote !"
            />
            <div className="serviceD-secC">
                <div className="container sec-padd-all">
                    <div className="heading">
                        <h2>Our <span className="highlight">Services</span> include</h2>
                        <p>Some of our other CAD conversion services are as follows:</p>
                    </div>
                    <div className="include-wrapper grid grid-2">
                        <div className="item_col">
                            <figure>
                                <Image src="/assets/images/services/other_service1.jpg" alt="Other Services" width="131" height="131"></Image>
                            </figure>
                            <figcaption>
                                <h6>Image to CAD</h6>
                                <p>The conversions from image (scanned) that you outsource to us will be accurate, containing perfect un-broken CAD entities. We redraft all your sketches in drawing format into accurate CAD drawings. All of these CAD conversions can include</p>
                            </figcaption>
                        </div>
                        <div className="item_col">
                            <figure>
                                <Image src="/assets/images/services/other_service1.jpg" alt="Other Services" width="131" height="131"></Image>
                            </figure>
                            <figcaption>
                                <h6>Image to CAD</h6>
                                <p>The conversions from image (scanned) that you outsource to us will be accurate, containing perfect un-broken CAD entities. We redraft all your sketches in drawing format into accurate CAD drawings. All of these CAD conversions can include</p>
                            </figcaption>
                        </div>
                        <div className="item_col">
                            <figure>
                                <Image src="/assets/images/services/other_service1.jpg" alt="Other Services" width="131" height="131"></Image>
                            </figure>
                            <figcaption>
                                <h6>Image to CAD</h6>
                                <p>The conversions from image (scanned) that you outsource to us will be accurate, containing perfect un-broken CAD entities. We redraft all your sketches in drawing format into accurate CAD drawings. All of these CAD conversions can include</p>
                            </figcaption>
                        </div>
                        <div className="item_col">
                            <figure>
                                <Image src="/assets/images/services/other_service1.jpg" alt="Other Services" width="131" height="131"></Image>
                            </figure>
                            <figcaption>
                                <h6>Image to CAD</h6>
                                <p>The conversions from image (scanned) that you outsource to us will be accurate, containing perfect un-broken CAD entities. We redraft all your sketches in drawing format into accurate CAD drawings. All of these CAD conversions can include</p>
                            </figcaption>
                        </div>
                    </div>
                    <div className="btn-wrapper">
                        <ButtonMain />
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
            <ProcessSec
                classname="serviceD_process"
                heading={
                    <>
                        <h2>Process We Follow for Our <span className="highlight">CAD Conversion Services</span></h2>
                    </>
                }
                subHeading="To offer the best business benefits to our clients, we adhere to a streamlined and systematic process for our mechanical design services."
            />
            <CaseSlider classname="serviceD_case" heading="Case Studies" subHeading="Create stunning visual representations from architectural designs to minimize design iterations and accelerate project completion." />
            <div className="serviceD-secD">
                <div className="container sec-padd-all">
                    <div className="heading">
                        <h2>Why Are We the Preferred <span className="highlight">CAD</span> <span className="highlight">Conversion</span> Company?</h2>
                    </div>
                    <div className="summery-detail-content">
                        {openings.length > 0 ? (
                            openings.map((opening, index) => (
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
                            <p className="text-center">No FAQs available.</p>
                        )}
                    </div>
                    <div className="btn-wrapper text-center">
                        <ButtonMain />
                    </div>
                </div>
            </div>
            <InnerServicesSlider />
            <AditionalSec 
            classname="serviceDadd"
            heading={
                <>
                    <h2>More Engineering <span className="highlight">Solutions</span> We Offer</h2>
                </>
            } />
            <FormComponent />
        </main>
    )
}

export default ServiceDetails;