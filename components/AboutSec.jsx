"use client"
import { useEffect } from "react";
import "../styles/home/home.css"
import ButtonMain from "./ButtonMain"

function animateCount(el, to) {
    const duration = 1000;
    const start = 0;
    const end = parseInt(to);
    const startTime = performance.now();
  
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      el.textContent = value;
  
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
  
    requestAnimationFrame(update);
  }

export default function AboutSec({ classname="", heading, desc}) {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-count]');
        const options = {
          threshold: 0.5
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            const el = entry.target;
    
            if (entry.isIntersecting) {
              const countTo = el.getAttribute('data-count');
              animateCount(el, countTo);
              observer.unobserve(el); // Only animate once
            } else {
              el.textContent = '0';
            }
          });
        }, options);
    
        elements.forEach(el => observer.observe(el));
    
        return () => observer.disconnect(); // Clean up on unmount
      }, []);
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
                        <h5><span data-count="100">0</span>+</h5>
                        <p>Locations</p>
                    </div>
                    <div className="counter-info-wrap">
                        <h5><span data-count="18">0</span>+</h5>
                        <p>Countries</p>
                    </div>
                    <div className="counter-info-wrap">
                        <h5><span data-count="100">0</span>+</h5>
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