import Image from "next/image"
import '../styles/components/components.css'

export default function ThreeDCard({src="/assets/images/concept/concept1.jpg"}) {
    return( 
        <div className="col-3d">
            <div className="card-wrap">
                <div className="card">
                    <div className="figure">
                        <Image src={src} width={496} height={392} alt="Slider Image"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}