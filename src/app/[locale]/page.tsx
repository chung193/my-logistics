// app/[locale]/page.tsx
import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import BannerSlider from '@/components/BannerSlider';
import Loading from "@/components/Loading";
export default async function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = await getDictionary(locale);

  return (
    <>
      {/* preloader */}
      <Loading />

      {/* overlay */}
      <div className="body-overlay" id="body-overlay"></div>

      {/* navbar */}
      <header className="navbar-area navbar-area-3">
        <div className="row g-0">
          <nav className="navbar navbar-expand-lg px-4">
            <div className="container nav-container p-0 pt-2 pb-2">
              <div className="responsive-mobile-menu">
                <Link className="main-logo" href={`/${locale}`}>
                  <img src="/assets/img/2.png" style={{ width: 200, height: 100 }} alt="logo" />
                </Link>
                <button
                  className="menu toggle-btn d-block d-lg-none"
                  data-target="#logisk_main_menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-left"></span>
                  <span className="icon-right"></span>
                </button>
              </div>

              <div className="nav-right-part nav-right-part-mobile">
                <a className="search-bar-btn" href="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9062 14.6562C15.9688 14.7188 16 14.8125 16 14.9062C16 15.0312 15.9688 15.125 15.9062 15.1875L15.1875 15.875C15.0938 15.9688 15 16 14.9062 16C14.7812 16 14.7188 15.9688 14.6562 15.875L10.8438 12.0938C10.7812 12.0312 10.75 11.9375 10.75 11.8438V11.4062C10.1562 11.9062 9.5 12.3125 8.78125 12.5938C8.03125 12.875 7.28125 13 6.5 13C5.3125 13 4.21875 12.7188 3.21875 12.125C2.21875 11.5625 1.4375 10.7812 0.875 9.78125C0.28125 8.78125 0 7.6875 0 6.5C0 5.3125 0.28125 4.25 0.875 3.25C1.4375 2.25 2.21875 1.46875 3.21875 0.875C4.21875 0.3125 5.3125 0 6.5 0C7.6875 0 8.75 0.3125 9.75 0.875C10.75 1.46875 11.5312 2.25 12.125 3.25C12.6875 4.25 13 5.3125 13 6.5C13 7.3125 12.8438 8.0625 12.5625 8.78125C12.2812 9.53125 11.9062 10.1875 11.4062 10.75H11.8438C11.9375 10.75 12.0312 10.7812 12.0938 10.8438L15.9062 14.6562ZM6.5 11.5C7.375 11.5 8.21875 11.2812 9 10.8438C9.75 10.4062 10.375 9.78125 10.8125 9C11.25 8.25 11.5 7.40625 11.5 6.5C11.5 5.625 11.25 4.78125 10.8125 4C10.375 3.25 9.75 2.625 9 2.1875C8.21875 1.75 7.375 1.5 6.5 1.5C5.59375 1.5 4.75 1.75 4 2.1875C3.21875 2.625 2.59375 3.25 2.15625 4C1.71875 4.78125 1.5 5.625 1.5 6.5C1.5 7.40625 1.71875 8.25 2.15625 9C2.59375 9.78125 3.21875 10.4062 4 10.8438C4.75 11.2812 5.59375 11.5 6.5 11.5Z" fill="#080C24" />
                  </svg>
                </a>
                <Link className="btn btn-base" href={`/${locale}/contact`}>
                  <span> </span> {t.btn.contact}
                </Link>
              </div>

              <div className="collapse navbar-collapse" id="logisk_main_menu">
                <ul className="navbar-nav menu-open text-lg-end">
                  <li><Link href={`/${locale}`} style={{ fontSize: "larger" }}>{t.nav.home}</Link></li>
                  <li><Link href={`/${locale}/about`} style={{ fontSize: "larger" }}>{t.nav.about}</Link></li>
                  <li><Link href={`/${locale}/service`} style={{ fontSize: "larger" }}>{t.nav.services}</Link></li>
                  <li><Link href={`/${locale}/contact`} style={{ fontSize: "larger" }}>{t.nav.contact}</Link></li>
                </ul>
              </div>

              <div className="nav-right-part nav-right-part-desktop" style={{ display: "flex", gap: 8 }}>
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* banner */}
      <BannerSlider
        t1={t.banner.t1}
        d1={t.banner.d1}
        t2={t.banner.t2}
        d2={t.banner.d2}
      />

      {/* about */}
      <div
        className="about-area-2 half-bg-right pd-top-120 pd-bottom-120"
        style={{ background: "url(/assets/img/home-3/13.png)" }}
        data-aos="flip-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className="container" data-aos="fade-right">
          <div className="about-area-inner">
            <div className="row">
              <div className="col-lg-5">
                <div className="about-thumb-wrap mb-lg-0 mb-4">
                  <img className="hover-bg rounded" src="/assets/img/8.png" alt="img" />
                </div>
              </div>

              <div className="col-lg-7 align-self-center" data-aos="flip-down">
                <div className="about-inner-wrap ms-0 ps-lg-4 mt-0">
                  <div className="section-title mb-0">
                    <h6 className="sub-title text-base mb-3">
                      <svg className="me-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" width="20" height="2" fill="#2c4397"></rect>
                        <rect y="10" width="40" height="2" fill="#2c4397"></rect>
                      </svg>
                      {t.about.badge}
                    </h6>
                    <h2 className="title mb-2">{t.about.title}</h2>
                    {/* Giữ nguyên đoạn mô tả dài, có thể đưa vào dict khi cần */}
                    <p className="mb-4">
                      Expeditors Logistics Consultancy LLC specializes in supplying industrial products and services across
                      different regions of Dubai. With a strong focus on meeting the current industrial requirements of the
                      market, we offer customized solutions to ensure utmost customer satisfaction.
                      <br /><br />Our expertise lies in delivering technology-driven solutions and a diverse range of products
                      and equipment that meet international standards and market specifications. Situated in Dubai, one of
                      the largest industrial cities globally, our mission is to be a reliable and efficient supplier, catering
                      to the industrial and commercial needs of clients within the government and private sectors in Dubai and
                      the Middle East
                    </p>

                    <div className="row">
                      <div className="col-md-8">
                        <div className="media border-bottom-1 pb-3 mb-3">
                          <div className="media-left me-3">
                            <img src="/assets/img/10.png" alt="img" />
                          </div>
                          <div className="media-body" data-aos="fade-left">
                            <h5>Efficient Handling Solutions</h5>
                            <p className="mb-0">
                              Embrace streamlined logistics with our cutting-edge mechanical arm technology, ensuring swift
                              and precise package handling for seamless deliveries.
                            </p>
                          </div>
                        </div>

                        <div className="media">
                          <div className="media-left me-3">
                            <img src="/assets/img/11.png" alt="img" />
                          </div>
                          <div className="media-body" data-aos="fade-right">
                            <h5>Tracking and visibility</h5>
                            <p className="mb-0">
                              Stay informed with live updates, keeping track of your shipments&apos; locations and status with ease.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="btn-wrap border-top-0">
                      <Link className="btn btn-base mb-md-0 mb-4" href={`/${locale}/about`}>
                        Load More <i className="fa fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* counters */}
      <div
        className="contact-area"
        style={{ backgroundImage: "url(/assets/img/home-3/40.png)" }}
        data-aos="slide-up"
        data-aos-duration="800"
      >
        <div className="container">
          <div className="fact-counter-area style-2 bg-black">
            <div className="row justify-content-center">
              {[
                { img: "/assets/img/Deliveries (1).png", value: "500", label: "Deliveries" },
                { img: "/assets/img/years experience.png", value: "10", label: "Years Experience" },
                { img: "/assets/img/winning awards.png", value: "5", label: "Winning Awards" },
                { img: "/assets/img/Team Members.png", value: "50", label: "Team Members" },
              ].map((c, idx) => (
                <div key={idx} className="col-lg-3 col-md-6 fact-counter-item">
                  <div className="single-fact-wrap text-center" style={{ borderRadius: 10, overflow: "hidden" }}>
                    <div className="thumb mb-3">
                      <img src={c.img} alt="img" />
                    </div>
                    <h2 className="mb-0 text-white"><span className="counter">{c.value}</span>+</h2>
                    <p>{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div
        className="portfolio-area pd-top-115"
        style={{ background: "url(/assets/img/portfolio/bg.png)" }}
        data-aos="flip-down"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title style-white">
                <h4 className="subtitle style-2">
                  <svg className="me-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" width="20" height="2" fill="#2c4397"></rect>
                    <rect y="10" width="40" height="2" fill="#2c4397"></rect>
                  </svg>
                </h4>
                <h2 className="title">{t.services.title}</h2>
                <h4 className="title" style={{ fontSize: 16 }}>{t.services.swipe}</h4>
              </div>
            </div>
          </div>

          {/* giữ markup Swiper để vendor khởi tạo */}
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {[
                { img: "/assets/img/bernd-dittrich-eCc7FjMoR74-unsplash.jpg", title: "TRANSPORTATION, LOGISTICS & CUSTOM CLEARANCE", href: "#" },
                { img: "/assets/img/mika-baumeister-74tW4FXP4Hw-unsplash.jpg", title: "MANPOWER SUPPLY", href: "#" },
                { img: "/assets/img/eugen-str-CrhsIRY3JWY-unsplash.jpg", title: "EQUIPMENT RENTAL SUPPLY", href: "#" },
                { img: "/assets/img/gabriel-santos-GBVDilE8yvI-unsplash.jpg", title: "VEHICLE RENTAL", href: "#" },
                { img: "/assets/img/scott-blake-x-ghf9LjrVg-unsplash (1).jpg", title: "CIVIL WORKS", href: "#" },
                { img: "/assets/img/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg", title: "ELECTRICAL WORKS", href: "#" },
                { img: "/assets/img/thisisengineering-raeng-WDCE0T4khsE-unsplash.jpg", title: "MECHANICAL WORKS", href: "#" },
                { img: "/assets/img/etienne-girardet-sgYamIzhAhg-unsplash.jpg", title: "MATERIAL SUPPLY", href: "#" },
                { img: "/assets/img/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg", title: "EVENT MANAGEMENT", href: "#" },
                { img: "/assets/img/immo-renovation-UqNEbyRQ660-unsplash.jpg", title: "REFURBISHMENT/ RENOVATION WORKS", href: "#" },
              ].map((s, idx) => (
                <div key={idx} className="swiper-slide">
                  <div className="single-portfolio-wrap">
                    <div className="thumb">
                      <img src={s.img} style={{ borderRadius: 10 }} alt="img" />
                    </div>
                    <div className="portfolio-details">
                      <div className="details"><h4>{s.title}</h4></div>
                      <a href={s.href} className="icon"><i className="fa fa-plus" /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="swiper-button-prev button">
              <img src="/assets/img/left-arrow.png" alt="img" />
            </div>
            <div className="swiper-button-next button">
              <img src="/assets/img/right-arrow.png" alt="img" />
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="wcu-area bg-overlay" style={{ background: "url(/assets/img/wcu/bg.png)" }} data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine">
        <img className="img-1" src="/assets/img/1.png" alt="img" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-6 order-lg-2">
              <div className="video-thumb-wrap">
                <img src="/assets/img/video.png" alt="img" style={{ borderRadius: "4%" }} />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 order-lg-1">
              <div className="section-title style-white mb-0" data-aos="slide-left">
                <h2 className="title">
                  <svg className="me-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" width="20" height="2" fill="#2c4397"></rect>
                    <rect y="10" width="40" height="2" fill="#2c4397"></rect>
                  </svg>
                  {t.why.title}
                </h2>
                <p className="content">
                  Discover a partnership built on unwavering commitment to excellence, a seamless blend of cutting-edge
                  technology and expert human touch, and a track record of delivering outstanding logistics solutions that
                  elevate your business to new heights of success.
                </p>
              </div>

              {[
                { icon: "/assets/img/icon-1.png", h: "Reliable and Timely Deliveries", p: "Trust us for on-time shipments, ensuring your goods reach their destination securely." },
                { icon: "/assets/img/icon-2.png", h: "Seamless Supply Chain Management", p: "We streamline operations, reducing costs and ensuring efficient handling of your goods." },
                { icon: "/assets/img/icon-3.png", h: "Customer-Centric Solutions", p: "Experience personalized logistics support, tailored to meet your specific needs and preferences." },
              ].map((w, i) => (
                <div key={i} className="single-wcu-wrap">
                  <div className="icon"><img src={w.icon} alt="img" /></div>
                  <div className="details">
                    <h6>{w.h}</h6>
                    <p>{w.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* work process */}
      <div className="work-process-area pd-top-120 pd-bottom-120 position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6 className="sub-title text-base mb-3">
                  <svg className="me-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" width="20" height="2" fill="#2c4397"></rect>
                    <rect y="10" width="40" height="2" fill="#2c4397"></rect>
                  </svg>
                  {t.work.badge}
                  <svg className="ms-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="2" transform="matrix(-1 0 0 1 20 0)" fill="#2c4397"></rect>
                    <rect width="40" height="2" transform="matrix(-1 0 0 1 40 10)" fill="#2c4397"></rect>
                  </svg>
                </h6>
                <h2 className="title">{t.work.title}</h2>
              </div>
            </div>
          </div>

          <div className="bg work-process-bg bg-cover" style={{ backgroundImage: "url(/assets/img/home-3/26.png)" }}>
            <div className="row">
              {[
                { img: "/assets/img/22.png", title: "Customer Onboarding", no: "01" },
                { img: "/assets/img/23.png", title: "Task Allocation", no: "02" },
                { img: "/assets/img/24.png", title: "Service completion", no: "03" },
                { img: "/assets/img/25.png", title: "Customer Review", no: "04" },
              ].map((step, idx) => (
                <div key={idx} className="col-lg-3 col-md-6">
                  <div className="single-work-process-inner text-center">
                    <div className="thumb"><div className="icon"><img src={step.img} alt="img" /></div></div>
                    <div className="details">
                      <h6>{step.title}</h6>
                      <div className="count">{step.no}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* footer */}
      <footer className="footer-area" data-aos="zoom-out" data-aos-duration="800" data-aos-easing="ease-in-sine">
        <div className="footer-top" style={{ backgroundImage: "url(/assets/img/footer/bg.png)" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-footer-top">
                  <div className="icon"><img src="/assets/img/map-marker.png" alt="img" /></div>
                  <div className="details">
                    <h6>OFFICE ADDRESS:</h6>
                    <p>Expeditors International Contracting Company Jeddah, Hindawiyah</p>
                    <br />
                    <p>Expeditors Logistics Consultancy<br /> Dubai, Karama</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-footer-top">
                  <div className="icon"><img src="/assets/img/phone.png" alt="img" /></div>
                  <div className="details">
                    <h6>CONTACT US:</h6>
                    <p>info@expeditorsint.com</p>
                    <p>info@expeditorsglobal.com</p>
                    <p>+966 575311289</p>
                    <p>+966 556328009</p>
                    <p>+971 581444350</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-footer-top after-none">
                  <div className="icon"><img src="/assets/img/clock.png" alt="img" /></div>
                  <div className="details">
                    <h6>WORKING HOURS:</h6>
                    <p>Sunday - Thursday</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="/assets/img/logo-white.png" alt="img" style={{ width: 200, height: 100 }} />
                </div>
                <div className="details">
                  <p>
                    Expeditors International Contracting Company is a trusted supplier of industrial products and services
                    in Dubai. We specialize in providing customized solutions and a diverse range of products that meet
                    international standards.
                  </p>
                  <ul className="social-media style-border">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-whatsapp" /></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">{t.footer.useful}</h4>
                <ul>
                  <li><Link href={`/${locale}`}><i className="fa fa-arrow-right" /> {t.nav.home}</Link></li>
                  <li><Link href={`/${locale}/about`}><i className="fa fa-arrow-right" /> {t.nav.about}</Link></li>
                  <li><Link href={`/${locale}/service`}><i className="fa fa-arrow-right" /> {t.nav.services}</Link></li>
                  <li><Link href={`/${locale}/contact`}><i className="fa fa-arrow-right" /> {t.nav.contact}</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">{t.footer.ourServices}</h4>
                <ul>
                  <li><a href="#"><i className="fa fa-arrow-right" /> ELECTRICAL WORKS</a></li>
                  <li><a href="#"><i className="fa fa-arrow-right" /> MANPOWER SUPPLY</a></li>
                  <li><a href="#"><i className="fa fa-arrow-right" /> MECHANICAL WORKS</a></li>
                  <li><a href="#"><i className="fa fa-arrow-right" /> VEHICLE RENTAL</a></li>
                  <li><a href="#"><i className="fa fa-arrow-right" /> CIVIL WORKS</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-md-6">
              <div className="widget widget_nav_menu">
                <ul>
                  <li><a href="#"><i className="fa fa-arrow-right" /> TRANSPORTATION, LOGISTICS &amp; CUSTOM CLEARANCE</a></li>
                  <li><a href="#"><i className="fa fa-arrow-right" /> MATERIAL SUPPLY</a></li>
                  <li><a href="#"><i className="fa fa-arrow-right" /> EVENT MANAGEMENT</a></li>
                  <li><a href="#"><i className="fa fa-arrow-right" /> VEHICLE RENTAL</a></li>
                  <li><a href="#"><i className="fa fa-arrow-right" /> REFURBISHMENT/ RENOVATION WORKS</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* footer bottom */}
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-lg-start text-center">
              <div className="copyright-area">
                <p>© Copyright 2023 By <a href="#">Expeditors Global</a>, All right reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* back to top */}
      <div className="back-to-top">
        <span className="back-top"><i className="fa fa-angle-up" /></span>
      </div>
    </>
  );
}
