"use client"
import Image from "next/image";
import Link from "next/link";
import "../styles/header/header.css"
import { useEffect } from "react"
import Hamburger from "./Hamburger";
import EnquirePop from "./EnquirePop";
import CareerPop from "./CareerPop";

export default function Header() {

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            const header = document.querySelector("header");
            if (!header) return;
            if (window.scrollY > 100) {
                header.classList.add("header-fixed");
            } else {
                header.classList.remove("header-fixed");
            }
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);  
    }, []) 
    useEffect(() => {
        document.querySelectorAll('.header_menu').forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                dropdown.classList.add('active')
              // Remove active from all subcat-li & col-sub-menu inside this dropdown only
              dropdown.querySelectorAll('.subcat-li').forEach(el => el.classList.remove('active'));
              dropdown.querySelectorAll('.col-sub-menu').forEach(el => el.classList.remove('active'));
              // Set active on the first subcat-li & its col-sub-menu
              const firstSubcat = dropdown.querySelector('.subcat-li');
              if (firstSubcat) {
                firstSubcat.classList.add('active');
                const subMenu = firstSubcat.querySelector('.col-sub-menu');
                if (subMenu) subMenu.classList.add('active');
              }
            });
            dropdown.addEventListener('mouseleave', ()=> {
                dropdown.classList.remove('active')
            })
          });

          
          document.querySelectorAll('.subcat-li').forEach(subcatLi => {
            subcatLi.addEventListener('mouseenter', () => {
              const dropdown = subcatLi.closest('.hasDropdown');
              if (!dropdown) return;
          
              // Remove active from all subcat-li & col-sub-menu inside this dropdown only
              dropdown.querySelectorAll('.subcat-li').forEach(el => el.classList.remove('active'));
              dropdown.querySelectorAll('.col-sub-menu').forEach(el => el.classList.remove('active'));
          
              // Add active to hovered li and its col-sub-menu
              subcatLi.classList.add('active');
              const subMenu = subcatLi.querySelector('.col-sub-menu');
              if (subMenu) subMenu.classList.add('active');
            });
            subcatLi.addEventListener('click', () => {
                subcatLi.closest('.hasDropdown').classList.remove('active');
            })
          });
          
          document.querySelectorAll('.subcat-ul').forEach(subcatUl => {
            subcatUl.addEventListener('mouseleave', () => {
              const dropdown = subcatUl.closest('.hasDropdown');
              if (!dropdown) return;
          
              // Remove all active classes and restore the first one inside this dropdown
              dropdown.querySelectorAll('.subcat-li').forEach(el => el.classList.remove('active'));
              dropdown.querySelectorAll('.col-sub-menu').forEach(el => el.classList.remove('active'));
          
              const firstSubcat = dropdown.querySelector('.subcat-li');
              if (firstSubcat) {
                firstSubcat.classList.add('active');
                const subMenu = firstSubcat.querySelector('.col-sub-menu');
                if (subMenu) subMenu.classList.add('active');
              }
            });
          });

          document.querySelectorAll('.subsubcategory').forEach(subsubCategory => {
            subsubCategory.addEventListener('click', () => {
                subsubCategory.closest('.hasDropdown').classList.remove(active);
            })
          })
    }, [])
    return(
        <>
            <header>
                <div className="header-wrapper container">
                    <div className="colA">
                        <Link href="/" className="logo">
                            <Image src="/assets/logo.svg" alt="Infraplus Logo" width="169" height="56"></Image>
                        </Link>
                        <ul className="solutions_ul">
                            <li className="hasDropdown header_menu">
                                <Link href="javascript:;" aria-haspopup="true" aria-expanded="false">Engineering Services</Link>
                                <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-menu-wrap">
                                        <div className="colA-md">
                                            <ul className="subcat-ul">
                                                <li className="subcat-li">
                                                    <Link href="javascript:;" className="subcat-li-anchr">Mechanical Engineering</Link>
                                                    <div className="col-sub-menu">
                                                        <div className="col-subgrid">
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;" className="subcat-li-anchr">Mechanical Engineering</Link>
                                                    <div className="col-sub-menu">
                                                        <div className="col-subgrid">
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="subcat-li">
                                                    <Link href="javascript:;" className="subcat-li-anchr">Mechanical Engineering</Link>
                                                    <div className="col-sub-menu">
                                                        <div className="col-subgrid">
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                            <div className="subsubcategory">
                                                                <Image src="/assets/images/home/icon/icon1.svg" width={30} height={30} alt=""></Image>
                                                                <p>CAD Conversion Services</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="colB">
                        <ul>
                            <li>
                                <a href="telto:+91 9878439158">+91 9878439158</a>
                            </li>
                            <li className="hasDropdown">
                                <Link href="javascript:;" aria-haspopup="true" aria-expanded="false">
                                <Image src="/assets/icon/world-dark.svg" alt="world icon" width={35} height={35}></Image>
                                </Link>
                                <div className="dropdown-menu" role="menu">
                                    <ul>
                                        <li><Link href="/solutions">India</Link></li>
                                        <li><Link href="/solutions">Senegal</Link></li>
                                        <li><Link href="/solutions">Nigeria</Link></li>
                                        <li><Link href="/solutions">Africa</Link></li>
                                        <li><Link href="/solutions">Middle East</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <button type="button" className="btn-btn" onClick={() => {
                            document.querySelector('.enquire-pop').classList.add('is-open')
                            document.querySelector('.overlay').classList.add('is-open')
                            document.querySelector('body').classList.add('overflow-hidden')
                        }}>
                                    <span type="button">
                                        Enquire Now
                                    </span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="ham-btn" aria-label="Open Mobile Menu" onClick={() => {
                                    document.querySelector('.ham-pop').classList.add('is-open')
                                    document.querySelector('.overlay').classList.add('is-open')
                                    document.querySelector('body').classList.add('overflow-hidden')
                                }}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            {/* <Hamburger />
            <EnquirePop />
            <CareerPop /> */}
        </>
    )
}