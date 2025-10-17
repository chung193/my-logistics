
import Link from "next/link";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

type Props = {
    params: any | Promise<any>;
    searchParams?: any | Promise<any>;
};

export default async function AboutPage({ params }: Props) {
    const { locale } = params;
    const t = await getDictionary(locale);
    return (
        <>
            {/* breadcrumb start */}
            <PageBreadcrumb pageName={t.pages.mission.title} />
            {/* breadcrumb end */}

            {/* about area start */}
            <div className="about-area pd-top-120 pd-bottom-240">
                <div className="container">
                    <div className="about-area-inner">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-thumb-wrap">
                                    <img className="img-1" src="/assets/img/about/shape.png" alt="img" />
                                    <img className="img-2" src="/assets/img/about/1.png" alt="img" />
                                    <img className="img-3" src="/assets/img/about/2.png" alt="img" />
                                    <div className="exprience-wrap">
                                        <img src="/assets/img/about/shape-3.png" alt="img" />
                                        <div className="details">
                                            <h1>10</h1>
                                            <p>YEARS EXPERIENCE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 align-self-center">
                                <div className="about-inner-wrap">
                                    <div className="section-title mb-0">
                                        <h3 style={{ color: "#2c4397" }}>{t.pages.mission.subtitle}</h3>
                                        <p className="content left-line small-font">
                                            {t.pages.mission.summary}
                                        </p>
                                        <p className="content small-font" style={{ whiteSpace: 'pre-line' }}>
                                            {t.pages.mission.content}
                                        </p>

                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="list-inner-wrap mb-lg-0 mb-4">
                                                    <li>
                                                        <img src="/assets/img/icon/check.png" alt="img" />
                                                        Unlimited Revisions
                                                    </li>
                                                    <li>
                                                        <img src="/assets/img/icon/check.png" alt="img" />
                                                        Best Fitness Excercise
                                                    </li>
                                                    <li>
                                                        <img src="/assets/img/icon/check.png" alt="img" />
                                                        Combine Fitness and
                                                    </li>
                                                    <li>
                                                        <img src="/assets/img/icon/check.png" alt="img" />
                                                        Best Solutions
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 align-self-center">
                                                <div className="thumb">
                                                    <img src="/assets/img/about/3.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="btn-wrap">
                                            <Link className="btn btn-base" href="/about">
                                                ABOUT MORE
                                            </Link>
                                            {/* author block was commented out in original */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* row */}
                    </div>
                </div>
            </div>

            <div className="about-area-2 bg-black pd-top-120 mb-5">
                <div className="container">
                    <div className="about-area-inner">
                        <div className="row">
                            <div className="col-lg-5 order-lg-2">
                                <div className="about-thumb-wrap mb-lg-0 mb-5">
                                    <img
                                        className="hover-bg margin-bottom--150"
                                        src="/assets/img/home-3/21.png"
                                        alt="img"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7 order-lg-1 align-self-center">
                                <div className="about-inner-wrap ms-0 ps-lg-4 pb-5 mb-4">
                                    <div className="section-title style-white mb-0">
                                        <h6 className="sub-title text-base mb-3">
                                            <svg
                                                className="me-2"
                                                width="40"
                                                height="12"
                                                viewBox="0 0 40 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect x="20" width="20" height="2" fill="#1869FE"></rect>
                                                <rect y="10" width="40" height="2" fill="#1869FE"></rect>
                                            </svg>
                                            What We Offer
                                        </h6>
                                        <h2 className="title mb-4 pb-2">
                                            We Provide timely &amp; Cost-effective delivery
                                        </h2>

                                        <div className="media border-bottom-1-dark pb-3 mb-3">
                                            <div className="media-left me-3">
                                                <img src="/assets/img/home-3/19.png" alt="img" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="text-white">Real-Time Tracking</h6>
                                                <p className="mb-0 text-white">
                                                    Stay informed with live tracking, knowing the precise location and status of your shipment.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="media border-bottom-1-dark pb-3 mb-3">
                                            <div className="media-left me-3">
                                                <img src="/assets/img/home-3/20.png" alt="img" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="text-white">Security For Cargo</h6>
                                                <p className="mb-0 text-white">
                                                    Ensuring utmost safety, we safeguard your cargo with stringent security measures.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="media">
                                            <div className="media-left me-3">
                                                <img src="/assets/img/home-3/19.png" alt="img" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="text-white">Competitive Pricing</h6>
                                                <p className="mb-0 text-white">
                                                    Get cost-effective logistics without compromising quality - our competitive pricing fits your budget.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* about-inner-wrap */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />

            {/* fact-area start */}
            <div className="fact-area" style={{ background: "#f9f9f9", borderRadius: 10 }}>
                <div className="container">
                    <div
                        className="fact-counter-area"
                        style={{ background: "url(/assets/img/fact/bg.png)", borderRadius: 10 }}
                    >
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-fact-wrap">
                                    <h2>
                                        <span className="counter">10</span>+
                                    </h2>
                                    <h5>Years of Experience</h5>
                                    <p>
                                        Over 10 years of experience in the logistics industry, providing reliable and efficient services.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-fact-wrap">
                                    <h2>
                                        <span className="counter">2000</span>+
                                    </h2>
                                    <h5>Successful Deliveries</h5>
                                    <p>
                                        Successful deliveries, ensuring on-time and secure transportation of goods.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-fact-wrap">
                                    <h2>
                                        <span className="counter">500</span>+
                                    </h2>
                                    <h5>Satisfied Clients</h5>
                                    <p>
                                        Proudly serving them satisfied clients, building lasting partnerships through exceptional service.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-fact-wrap after-none">
                                    <h2>
                                        <span className="counter">50</span>+
                                    </h2>
                                    <h5>Dedicated Team</h5>
                                    <p>
                                        Logistics professionals, driven by a passion for excellence and customer satisfaction..
                                    </p>
                                </div>
                            </div>
                        </div>{/* row */}
                    </div>
                </div>
            </div>
            {/* fact-area end */}

            <br />

            {/* skill-area start */}
            <div
                className="wcu-area-2 pd-top-115"
                style={{ backgroundImage: "url(/assets/img/wcu/bg-2.png)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title style-white text-center">
                                <h4 className="title">
                                    <svg className="me-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="20" width="20" height="2" fill="#1869FE"></rect>
                                        <rect y="10" width="40" height="2" fill="#1869FE"></rect>
                                    </svg>
                                    Why Choose Us
                                    <svg className="ms-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="20" height="2" transform="matrix(-1 0 0 1 20 0)" fill="#1869FE"></rect>
                                        <rect width="40" height="2" transform="matrix(-1 0 0 1 40 10)" fill="#1869FE"></rect>
                                    </svg>
                                </h4>
                                <p className="content">
                                    Experience a trusted partner that prioritizes efficiency, reliability, and personalized solutions to elevate your business.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-wcu-wrap style-2">
                                <div className="icon">
                                    <img src="/assets/img/wcu/icon-4.png" alt="img" />
                                </div>
                                <div className="details">
                                    <h6>FAST TRANSPORTION SERVICE</h6>
                                    <p>
                                        Swift and efficient transportation solutions to ensure your cargo reaches its destination in record time.
                                    </p>
                                </div>
                            </div>

                            <div className="single-wcu-wrap style-2">
                                <div className="icon">
                                    <img src="/assets/img/wcu/icon-5.png" alt="img" />
                                </div>
                                <div className="details">
                                    <h6>SAFETY AND RELIABILITY</h6>
                                    <p>
                                        Rest assured knowing that your cargo is in safe hands, delivered reliably and securely to its destination.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="thumb text-center">
                                <img
                                    src="/assets/img/wcu/worldwide-delivery-world-globe-with-cardboard-boxes-location-pointer-shopping-online-delivery-ecommerce-concept-blue-background-3d-illustration-removebg-preview.png"
                                    alt="img"
                                />
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-wcu-wrap style-2">
                                <div className="icon">
                                    <img src="/assets/img/wcu/icon-6.png" alt="img" />
                                </div>
                                <div className="details">
                                    <h6>24/7 ONLINE SUPPORT</h6>
                                    <p>
                                        Our dedicated team is available round-the-clock to provide prompt assistance and support for all your logistics needs.
                                    </p>
                                </div>
                            </div>

                            <div className="single-wcu-wrap style-2">
                                <div className="icon">
                                    <img src="/assets/img/wcu/icon-7.png" alt="img" />
                                </div>
                                <div className="details">
                                    <h6>ONLINE TRACKING</h6>
                                    <p>
                                        Enhance interactive metrics for reliable services. Proactively unleash fully researched.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>{/* row */}
                </div>
            </div>
            {/* skill-area end */}

        </>
    );
}
