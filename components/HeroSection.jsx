import ThreeDCard from "./ThreeDCard"
import '../styles/home/home.css'
export default function HeroSection({ heading, desc, cardProps }) {
    return(
        <div className="home-secA mt-hdr">
            <div className="container sec-padd-all flex">
                <div className="colA">
                    <h2>{heading}</h2>
                    <p>{desc}</p>
                    <button className="btn-btn">
                    <span type="button">
                        Get Pricing Instantly
                    </span>
                    </button>
                </div>
                <div className="colB">
                    {/* <ThreeDCard className="home_3d" mediaType="video" src="/assets/video/HsecA-banner.mp4" /> */}
                    <ThreeDCard {...cardProps} />
                </div>
            </div>
        </div>
    )
}