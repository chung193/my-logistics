import type { Locale } from "@/lib/i18n";
import Link from "next/link";
import { getDictionary } from "@/lib/getDictionary";

export default async function Footer({ params }: { params: { locale: Locale } }) {
    const { locale } = params;
    const t = await getDictionary(locale);
    return (
        <>
            {/* footer */}
            <footer className="footer-area pb-0" data-aos="zoom-out" data-aos-duration="800" data-aos-easing="ease-in-sine">
                <div className="footer-top" style={{ backgroundImage: "url(/assets/img/footer/bg.png)" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-footer-top">
                                    <div className="icon">
                                        <img src="/assets/img/map-marker.png" alt="img" />
                                    </div>
                                    <div className="details">
                                        <h6>{t.footer.office_address}</h6>
                                        <p>{t.footer.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-footer-top">
                                    <div className="icon"><img src="/assets/img/phone.png" alt="img" /></div>
                                    <div className="details">
                                        <h6>{t.footer.contact_us}</h6>
                                        <p>{t.footer.person1}</p>
                                        <p>{t.footer.email1}</p>
                                        <p>{t.footer.phone1}</p>
                                        <p>{t.footer.person2}</p>
                                        <p>{t.footer.email2}</p>
                                        <p>{t.footer.phone2}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-footer-top after-none">
                                    <div className="icon"><img src="/assets/img/clock.png" alt="img" /></div>
                                    <div className="details">
                                        <h6>{t.footer.working_hours}</h6>
                                        <p>{t.footer.hours}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-top footer-bottom bg-white mb-0 pb-0">
                    <div className="container ">
                        <div className="row">
                            <div className="col-xl-4 col-md-6">
                                <div className="widget widget_about">
                                    <div className="thumb">
                                        <img src="/assets/img/logo-white.png" alt="img" style={{ width: 223, height: 89 }} />
                                    </div>
                                    <div className="details">
                                        <p className="slogan">
                                            {t.footer.slogan}
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
                                    <h4 className="widget-title footer-title">{t.footer.useful}</h4>
                                    <ul>
                                        <li><Link href={`/${locale}/`}><i className="fa fa-arrow-right" /> {t.nav.home}</Link></li>
                                        <li><Link href={`/${locale}/about`}><i className="fa fa-arrow-right" /> {t.nav.about}</Link></li>
                                        <li><Link href={`/${locale}/services`}><i className="fa fa-arrow-right" /> {t.nav.services}</Link></li>
                                        <li><Link href={`/${locale}/contact`}><i className="fa fa-arrow-right" /> {t.nav.contact}</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-md-6">
                                <div className="widget widget_nav_menu">
                                    <h4 className="widget-title footer-title">{t.footer.ourServices}</h4>
                                    <ul>
                                        <li><a href={`/${locale}/services_ocean`}><i className="fa fa-arrow-right" /> {t.pages.services_ocean.title}</a></li>
                                        <li><a href={`/${locale}/services_air`}><i className="fa fa-arrow-right" /> {t.pages.services_air.title}</a></li>
                                        <li><a href={`/${locale}/services_road_rail`}><i className="fa fa-arrow-right" /> {t.pages.services_road_rail.title}</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-2 col-md-6">
                                <div className="widget widget_nav_menu">
                                    <ul>
                                        <li><a href={`/${locale}/contract_logistics`}><i className="fa fa-arrow-right" /> {t.pages.contract_logistics.title}</a></li>
                                        <li><a href={`/${locale}/customs_brokerage`}><i className="fa fa-arrow-right" /> {t.pages.customs_brokerage.title}</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

            {/* footer bottom */}
            < div className="footer-bottom-area" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-lg-start text-center">
                            <div className="copyright-area">
                                <p>© Copyright 2025 By <a href="#">Expeditors Global</a>, All right reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
