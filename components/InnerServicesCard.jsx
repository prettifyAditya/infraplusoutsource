import Image from "next/image"
import Link from "next/link"

export default function InnerServicesCard({ heading, subHeading }) {
    return (
        <div className="service-item">
                <Image
                  src="/assets/images/services/icon/icon1.svg"
                  alt="Icon"
                  width="40"
                  height="40"
                ></Image>
                <div className="content">
                  <h6>{heading}</h6>
                  <p>
                    {subHeading}
                  </p>
                  <Link href="javascript:;" className="more_a">
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
    )
}