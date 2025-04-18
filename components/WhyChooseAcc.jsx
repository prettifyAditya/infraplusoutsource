"use client"
import { useState } from "react"
import "../styles/components/components.css"

export default function WhyChooseAcc({ whyQues = [] }) {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    return(
        <div className="summery-detail-content">
            {whyQues.length > 0 ? (
                whyQues.map((ques, index) => (
                    <div key={index} className={`col ${activeIndex === index ? "active" : ""}`}>
                        <div className="title" onClick={() => toggleAccordion(index)}>
                            <div className="outer-circle">
                                <div className="ico"></div>
                            </div>
                            <h6>{ques.title}</h6>
                        </div>
                        <article>
                            <div className="content-desc website-content">
                                <div dangerouslySetInnerHTML={{ __html: ques.description }} />
                            </div>
                        </article>
                    </div>
                ))
            ) : (
                <p className="highlight text-center">No FAQs available.</p>
            )}
        </div>
    )
} 