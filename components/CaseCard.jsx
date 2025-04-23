import Image from "next/image"
import Link from "next/link"
export default function CaseCard({src="/assets/images/case/case1.jpg", desc, category }) {
    return(
        <Link href="/case-study-details">
            <div className="case-col item-md">
                <figure>
                    <Image src={src} alt="Case Studies" width="362" height="287"></Image>
                </figure>
                <figcaption>
                    <h6>{desc}</h6>
                </figcaption>
            </div>
        </Link>
    )
}