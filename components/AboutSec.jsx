import "../styles/home/home.css"
import ButtonMain from "./ButtonMain"
export default function AboutSec({ classname="", heading, desc}) {
    return(
        <div className={`home-secD ${classname}`}>
            <div className="container sec-padd-all flex">
                <div className="colA">
                <h1>{heading}</h1>
                <div className="content">
                    {desc}
                </div>
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
    )
}