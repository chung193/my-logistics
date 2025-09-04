import type { Locale } from "@/lib/i18n";
import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";

export default async function Footer({ params }: { params: { locale: Locale } }) {
    const { locale } = params;
    const t = await getDictionary(locale);
    return (
        <>
            {/* footer */}
            <footer className="footer-area" data-aos="zoom-out" data-aos-duration="800" data-aos-easing="ease-in-sine">
                <div className="footer-top" style={{ backgroundImage: "url(/assets/img/footer/bg.png)" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-footer-top">
                                    <div className="icon">
                                        <img src="/assets/img/map-marker.png" alt="img" />
                                    </div>
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
                                    <img src="/assets/img/logo-white.png" alt="img" style={{ width: 223, height: 89 }} />
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
            </footer >

            {/* footer bottom */}
            < div className="footer-bottom-area" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-lg-start text-center">
                            <div className="copyright-area">
                                <p>© Copyright 2023 By <a href="#">Expeditors Global</a>, All right reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
