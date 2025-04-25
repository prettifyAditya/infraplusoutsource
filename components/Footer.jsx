"use client"
import Link from "next/link"
import '../styles/header/header.css'
import { useEffect } from "react"
import Image from "next/image"
import Hamburger from "./Hamburger"
import EnquirePop from "./EnquirePop"
import CareerPop from "./CareerPop"

export default function Footer() {
    useEffect(() => {
        const dropdowns = document.querySelectorAll('.hasDropdown');
      
        dropdowns.forEach(list => {
          list.addEventListener('click', () => {
            const allMenus = document.querySelectorAll('.footer-dropdown-menu');
            const icon = document.querySelectorAll('.plus-icon')
            
            allMenus.forEach(menu => {
                menu.classList.toggle('active')
            })
            icon.forEach(icons => {
                icons.classList.toggle('active')
            })
          });
        });
      
        return () => {
            dropdowns.forEach(list => {
              list.removeEventListener('click', () => {
                const allMenus = document.querySelectorAll('.footer-dropdown-menu');
                allMenus.forEach(menu => {
                  menu.classList.toggle('active');
                });
              });
            });
          };
      }, []);
    return (
      <>
        <footer>
          <div className="container">
            <div className="upper-footer">
                <ul className="nav-list flex">
                  <li className="hasDropdown">
                    <div className="plus-icon"></div>
                    <Link href="javascript:;">Mechanical Engineering</Link>
                    <div className="footer-dropdown-menu">
                      <ul>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="hasDropdown">
                    <div className="plus-icon"></div>
                    <Link href="javascript:;">Mechanical Engineering</Link>
                    <div className="footer-dropdown-menu">
                      <ul>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="hasDropdown">
                    <div className="plus-icon"></div>
                    <Link href="javascript:;">Mechanical Engineering</Link>
                    <div className="footer-dropdown-menu">
                      <ul>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="hasDropdown">
                    <div className="plus-icon"></div>
                    <Link href="javascript:;">Mechanical Engineering</Link>
                    <div className="footer-dropdown-menu">
                      <ul>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="hasDropdown">
                    <div className="plus-icon"></div>
                    <Link href="javascript:;">Mechanical Engineering</Link>
                    <div className="footer-dropdown-menu">
                      <ul>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                        <li>
                          <Link href="javascript:;">Inner Pages</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
            </div>
            <div className="main-footer">
              <div className="colA">
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width={216}
                  height={56}
                />
              </div>
              <div className="colB">
                <div className="list">
                  <h6>Company</h6>
                  <ul>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/case-studies">Case Studies</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Policy of use</Link>
                    </li>
                  </ul>
                </div>
                <div className="list">
                  <h6>Connect with us</h6>
                  <ul className="connect">
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><g fill="none" stroke="#666" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><circle cx={12} cy={10} r={3}></circle><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8"></path></g></svg>
                      <a
                        href="https://maps.app.goo.gl/3bcDPJQuCRuUyCaF6"
                        target="_blank"
                      >
                        1065, 10th Floor, Tower B1, Spaze i-Tech Park, Sector
                        49, Sohna Road, Guragon 122018, Haryana, India,
                      </a>
                    </li>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24"><g fill="#666"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path><path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></path></g></svg>
                    <a
                        href="telto:+91- 98106 32693"
                        target="_blank"
                      >+91- 98106 32693
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="colC">
                <div className="social-icons">
                  <a
                    href="javascript:;"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="javascript:;"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="javascript:;"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/infraplus-consulting-private-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-footer">
              <p>©  InfraOutsource. All Right Reserved</p>
              <div className="pret">
                <a href="prettifycreative.com">
                  Made by passion{" "}
                  <img
                    src="/assets/icon/prettify.svg"
                    alt="Prettify Creative Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div
          className="overlay"
          onClick={() => {
            document.querySelector(".ham-pop").classList.remove("is-open");
            document.querySelector(".enquire-pop").classList.remove("is-open");
            document.querySelector(".career-pop").classList.remove("is-open");
            document.querySelector(".overlay").classList.remove("is-open");
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        ></div>

          <Hamburger />
          <EnquirePop />
          <CareerPop />
      </>
    );
}