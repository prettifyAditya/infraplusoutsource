import Image from "next/image"
import '../styles/components/components.css'

export default function ThreeDright({src="/assets/video/HsecE-banner.mp4", mediaType="video", className}) {
    return( 
        <div className={`col-3d-right ${className}`}>
            <div className="card-wrap">
                <div className="card">
                    <div className="figure">
                        {
                            mediaType === 'video' ? (
                                <video playsInline autoPlay muted loop width='100%' height="100%">
                                    <source src={src} type="video/mp4" />
                                </video>
                            ) : (
                                <Image src={src} width={496} height={392} alt="Image"></Image>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}