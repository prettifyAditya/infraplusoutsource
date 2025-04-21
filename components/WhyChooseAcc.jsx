"use client"
import { useState } from "react"
import "../styles/components/components.css"
import "../styles/home/home.css"

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

export default function WhyChooseAcc() {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    return (
      <>
        <div className="home-secE">
          <div className="container sec-pad">
            <div className="heading">
              <h2>Why Choose Us</h2>
              <p>
                Infra outsource helps multi-disciplinary engineering teams to
                scale and grow more profitably
              </p>
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
                  {/* <WhyChooseAcc whyQues={WhyQues} /> */}
                  <div className="summery-detail-content">
                    {WhyQues.length > 0 ? (
                      WhyQues.map((ques, index) => (
                        <div
                          key={index}
                          className={`col ${
                            activeIndex === index ? "active" : ""
                          }`}
                        >
                          <div
                            className="title"
                            onClick={() => toggleAccordion(index)}
                          >
                            <div className="outer-circle">
                              <div className="ico"></div>
                            </div>
                            <h6>{ques.title}</h6>
                          </div>
                          <article>
                            <div className="content-desc website-content">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: ques.description,
                                }}
                              />
                            </div>
                          </article>
                        </div>
                      ))
                    ) : (
                      <p className="highlight text-center">
                        No FAQs available.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
} 