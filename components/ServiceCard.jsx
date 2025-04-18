import Image from "next/image"
import '../styles/components/components.css'

export default function ServiceCard({icon, title}) {

    return(
        <>
            <div className="service-col">
                <Image src={`../assets/images/home/icon/${icon}`} width={30} height={30} alt="icon"></Image>
                <p>{title}</p>
            </div>
        </>
    )
}