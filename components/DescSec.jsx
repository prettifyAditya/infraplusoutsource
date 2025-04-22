import EnquireForm from "./EnquireForm"
import "../styles/components/components.css"
export default function DescSec({ classname="", heading, formProps, secClass="" }) {
    return(
        <div className={`description-section ${classname}`}>
            <div className="container flex">
                <div className="colA">
                    <div className="content">
                        <p>Businesses that invest regularly in R&D report up to an 11.8% annual growth. On the other hand, hiring in-house engineers and investing in technology, resources, and infrastructure ultimately chip away at profit margins. Hence, the key to optimizing production lies in outsourcing mechanical engineering services to a reliable service provider.</p>
                        <p>To stay competent in your domain, leverage our precise and promising mechanical engineering design services. Partner with a global solution provider like us to shorten development cycles and reduce production costs. Other benefits of our mechanical engineering consulting services include improved resource utilization, product innovation, and business scalability. Reach out to our experts to know more about our service offerings.</p>
                        <p>To stay competent in your domain, leverage our precise and promising mechanical engineering design services. Partner with a global solution provider like us to shorten development cycles and reduce production costs. Other benefits of our mechanical engineering consulting services include improved resource utilization, product innovation, and business scalability. Reach out to our experts to know more about our service offerings.</p>
                    </div>
                </div>
                <div className={`colB ${secClass}`}>
                    <div className="heading">
                        <h2>{heading}</h2>
                        <p>Your Outsourcing Decision. Delivered Tomorrow</p>
                    </div>
                    <EnquireForm className="DescForm" {...formProps} />
                </div>
            </div>
        </div>
    )
}