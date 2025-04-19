import Image from "next/image"
import '../styles/components/components.css'

export default function ThreeDCard({src="/assets/images/concept/concept1.jpg", desc, mediaType, className}) {
    return( 
        <div className={`col-3d ${className}`}>
            <div className="card-wrap">
                <div className="card">
                    <div className="figure">
                        {
                            mediaType === 'video' ? (
                                <video playsInline autoPlay muted loop width='100%' height="100%">
                                    <source src={src} type="video/mp4" />
                                </video>
                            ) : (
                                <Image src={src} width={496} height={392} alt="Slider Image"></Image>
                            )
                        }
                    </div>
                    <figcaption>
                        <p>{desc}</p>
                    </figcaption>
                </div>
            </div>
        </div>
    )
}