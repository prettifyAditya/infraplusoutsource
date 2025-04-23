"use client";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image"

export default function CaseGallery({ zoomImg, mainImg }) {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {}); 
    }, []);
    return(
        <div className="gallery-item">
            <a href={zoomImg} data-fancybox="gallery">
                <Image src={mainImg} alt="Case Image" width="344" height="260" />
            </a>
            <div className="icon">
            </div>
        </div>
    )
}