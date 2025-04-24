import Image from "next/image"
import FormComponent from "../../components/FormComponent"
import "../../styles/contact/contact.css"
import Link from "next/link"
import ButtonMain from "../../components/ButtonMain"
export default function ContactUs() {
    return(
        <main>
            <div className="contact-secA mt-hdr">
                <div className="container sec-padd-all">
                    <div className="heading text-center">
                        <h2>Contact us</h2>
                        <p>To become most reliable partner across the globe by providing cost effective solutions.</p>
                    </div>
                </div>
            </div>
            <div className="contact-secB">
                <div className="container flex">
                    <div className="contact-col">
                        <div className="icon">
                            <Image src="/assets/icon/location.svg" width="50" height="50" alt="Location Icon"  />
                        </div>
                        <h6>Address</h6>
                        <Link href="javascript:;">1065, 10th Flr, Tower B1, Spaze i-Tech Park, Sector 49, Sohna Road, Guragon 122018, Haryana</Link>
                        <ButtonMain desc="DIRECTION" />
                    </div>
                    <div className="contact-col">
                        <div className="icon">
                            <Image src="/assets/icon/phone.svg" width="50" height="50" alt="Location Icon"  />
                        </div>
                        <h6>Call Us</h6>
                        <Link href="telto:+919810632693">+91 98106 32693</Link>
                        <ButtonMain desc="WHATSAPP" />
                    </div>
                    <div className="contact-col">
                        <div className="icon">
                            <Image src="/assets/icon/mail.svg" width="50" height="50" alt="Location Icon"  />
                        </div>
                        <h6>Write Us</h6>
                        <Link href="mailto:info@infraplus.co.in">info@infraplus.co.in</Link>
                    </div>
                </div>
            </div>
            <div className="contact-secC">
                <div className="container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.2014267178015!2d77.04038467549287!3d28.413178375785183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229abb80e123%3A0xac9af8f5acc2e8a9!2sSpaze%20iTech%20Park!5e0!3m2!1sen!2sin!4v1745407241920!5m2!1sen!2sin" width="100%" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <FormComponent />
        </main>
    )
}