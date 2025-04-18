import "../styles/home/home.css"
import Image from "next/image"

export default function Home() {
  return (
      <main>
          <div className="home-secA mt-hdr">
            <div className="container sec-padd-all flex">
                <div className="colA">
                  <h2><span className="highlight">Engineering</span> Brilliance Delivered Globally</h2>
                  <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                  <button className="btn-btn">
                    <span type="button">
                        Get Pricing Instantly
                    </span>
                  </button>
                </div>
                <div className="colB">
                    <figure>
                        <video playsInline autoPlay muted loop>
                          <source src="/assets/video/HsecA-banner.mp4" />
                        </video>
                    </figure>
                </div>
            </div>
          </div>
          <div className="home-secB">
            <div className="container sec-pad">
              <div className="heading">
                <h2>Engineering <span className="highlight">Solutions</span> We Offer</h2>
              </div>
              <div className="solutions-grid grid-4">
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
                  <div className="sol-item">
                    <h5>Architectural Services</h5>
                    <figure>
                      <Image src="/assets/images/solutions/sol1.png" width={220} height={183} alt="Solution Image"></Image>
                    </figure>
                    <div className="hover-item">
                        <h5>Architectural Services</h5>
                        <p>Infra Outsourcing Services is a renowned India based organization mainly caters to CAD based designing, 2D drafting, 3D modeling, and drawing.</p>
                        <button className="btn-btn">
                          <span type="button">
                              Read more
                          </span>
                        </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="home-secC">
            <div className="container sec-padd-all">
              <div className="heading">
                  <h2>Featured <span className="highlight">Outsourcing</span> Services</h2>
                  <p>Get access to cost-effective technology and a community of engineers with diverse specializations. Leverage our ISO-certified mechanical engineering solutions that include</p>
              </div>
            </div>
          </div>
      </main>
    )
}
