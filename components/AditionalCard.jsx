import Image from "next/image"
import "../styles/components/components.css"
export default function AditionalCard({ mainHead, imgSrc, hoverHead, desc }) {
    return(
        <div className="sol-itemCard">
            <h5>{mainHead}</h5>
            <figure>
            <Image src={imgSrc} width={220} height={183} alt="Solution Image"></Image>
            </figure>
            <div className="hover-item">
                <h5>{hoverHead}</h5>
                <p>{desc}</p>
                <button className="btn-btn">
                <span type="button">
                    Read more
                </span>
                </button>
            </div>
        </div>
    )
}