"use client"
import Image from "next/image"
import { useEffect } from "react"

export default function Privacy() {
    useEffect(() => {
        const header = document.querySelector("header")
        if (header) header.classList.add('header-fit')

        return () => {
            if (header) header.classList.remove("header-fit")
        }
    })
    return( 
        <div className="thankyou mt-hdrfix">
            <div className="container sec-padd-all">
                <div className="content">
                    <div className="icon">
                        <Image src="/assets/icon/handshake.svg" alt="handshake" width="80" height="80"></Image>
                    </div>
                    <h2>Thank You</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium recusandae dolorum saepe provident dolor dicta mollitia ea nesciunt quam aliquam quas omnis nostrum esse deserunt accusamus sint est quasi, modi vitae molestiae excepturi voluptas? Aperiam dolorem impedit illum, omnis saepe facilis quia architecto perferendis corporis! Numquam amet voluptate ullam!</p>
                </div>
            </div>
        </div>
    )
}