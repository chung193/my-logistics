
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            {/* preloader area start */}
            <div className="preloader" id="preloader" style={{ display: "none" }}>
                <div className="preloader-inner">
                    <div className="spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                </div>
            </div>
            {/* preloader area end */}

            {/* search popup start*/}
            <div className="body-overlay" id="body-overlay"></div>
            {/* search popup end*/}

            {/* navbar start */}
            <header className="navbar-area navbar-area-3">
                <div className="row g-0">
                    <nav className="navbar navbar-expand-lg px-4">
                        <div className="container nav-container p-0 pt-2 pb-2">
                            <div className="responsive-mobile-menu">
                                <Link className="main-logo" href="/">
                                    <img
                                        src="/assets/img/home-3/2.png"
                                        alt="img"
                                        style={{ width: 200, height: 100 }}
                                    />
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
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.9062 14.6562C15.9688 14.7188 16 14.8125 16 14.9062C16 15.0312 15.9688 15.125 15.9062 15.1875L15.1875 15.875C15.0938 15.9688 15 16 14.9062 16C14.7812 16 14.7188 15.9688 14.6562 15.875L10.8438 12.0938C10.7812 12.0312 10.75 11.9375 10.75 11.8438V11.4062C10.1562 11.9062 9.5 12.3125 8.78125 12.5938C8.03125 12.875 7.28125 13 6.5 13C5.3125 13 4.21875 12.7188 3.21875 12.125C2.21875 11.5625 1.4375 10.7812 0.875 9.78125C0.28125 8.78125 0 7.6875 0 6.5C0 5.3125 0.28125 4.25 0.875 3.25C1.4375 2.25 2.21875 1.46875 3.21875 0.875C4.21875 0.3125 5.3125 0 6.5 0C7.6875 0 8.75 0.3125 9.75 0.875C10.75 1.46875 11.5312 2.25 12.125 3.25C12.6875 4.25 13 5.3125 13 6.5C13 7.3125 12.8438 8.0625 12.5625 8.78125C12.2812 9.53125 11.9062 10.1875 11.4062 10.75H11.8438C11.9375 10.75 12.0312 10.7812 12.0938 10.8438L15.9062 14.6562ZM6.5 11.5C7.375 11.5 8.21875 11.2812 9 10.8438C9.75 10.4062 10.375 9.78125 10.8125 9C11.25 8.25 11.5 7.40625 11.5 6.5C11.5 5.625 11.25 4.78125 10.8125 4C10.375 3.25 9.75 2.625 9 2.1875C8.21875 1.75 7.375 1.5 6.5 1.5C5.59375 1.5 4.75 1.75 4 2.1875C3.21875 2.625 2.59375 3.25 2.15625 4C1.71875 4.78125 1.5 5.625 1.5 6.5C1.5 7.40625 1.71875 8.25 2.15625 9C2.59375 9.78125 3.21875 10.4062 4 10.8438C4.75 11.2812 5.59375 11.5 6.5 11.5Z"
                                            fill="#080C24"
                                        ></path>
                                    </svg>
                                </a>
                                <Link className="btn btn-base" href="/contact">
                                    <span> </span> Get A Quote
                                </Link>
                            </div>

                            <div className="collapse navbar-collapse" id="logisk_main_menu">
                                <ul className="navbar-nav menu-open text-lg-end">
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/service">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="nav-right-part nav-right-part-desktop">
                                <Link className="btn btn-base" href="/contact">
                                    <span> </span> Contact Us
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            {/* navbar end */}

            {/* breadcrumb start */}
            <div
                className="breadcrumb-area bg-overlay-2"
                style={{
                    backgroundImage: "url('/assets/img/banner/breadcrumb.png')",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-inner">
                                <div className="section-title mb-0">
                                    <h2 className="page-title">ABOUT US</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                        <h3 style={{ color: "#2c4397" }}>ABOUT US</h3>

                                        <p className="content left-line small-font">
                                            Expeditors International Contracting Company is a trusted supplier of industrial
                                            products and services in Dubai. We specialize in providing customized solutions
                                            and a diverse range of products that meet international standards. Our mission is
                                            to be a reliable and efficient supplier, serving the industrial and commercial
                                            needs of clients in Dubai and the Middle East. With a focus on quality and
                                            customer satisfaction, our experienced team delivers technology-driven solutions
                                            and value-added services. We strive for continuous improvement and aim to
                                            establish ourselves as a leading provider of industrial supplies in the region.
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

            {/* footer area start */}
            <footer className="footer-area">
                <div
                    className="footer-top"
                    style={{ backgroundImage: "url(/assets/img/footer/bg.png)" }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-footer-top">
                                    <div className="icon">
                                        <img src="/assets/img/icon/map-marker.png" alt="img" />
                                    </div>
                                    <div className="details">
                                        <h6>OFFICE ADDRESS:</h6>
                                        <p>Expeditors International Contracting Company Jeddah, Hindawiyah</p>
                                        <br />
                                        <p>
                                            Expeditors Logistics Consultancy
                                            <br /> Dubai, Karama
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-footer-top">
                                    <div className="icon">
                                        <img src="/assets/img/icon/phone.png" alt="img" />
                                    </div>
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
                                    <div className="icon">
                                        <img src="/assets/img/icon/clock.png" alt="img" />
                                    </div>
                                    <div className="details">
                                        <h6>WORKING HOURS:</h6>
                                        <p>Sunday - Thursday</p>
                                    </div>
                                </div>
                            </div>
                        </div>{/* row */}
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="widget widget_about">
                                <div className="thumb">
                                    <img
                                        src="/assets/img/logo-white.png"
                                        alt="img"
                                        style={{ width: 200, height: 100 }}
                                    />
                                </div>
                                <div className="details">
                                    <p>
                                        Expeditors International Contracting Company is a trusted supplier of industrial products and services in Dubai. We specialize in providing customized solutions and a diverse range of products that meet international standards.
                                    </p>
                                    <ul className="social-media style-border">
                                        <li>
                                            <a href="#">
                                                {/* facebook svg */}
                                                <svg aria-hidden="true" focusable="false" viewBox="0 0 320 512">
                                                    <path
                                                        fill="currentColor"
                                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {/* twitter svg */}
                                                <svg aria-hidden="true" focusable="false" viewBox="0 0 512 512">
                                                    <path
                                                        fill="currentColor"
                                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299..."
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {/* whatsapp svg */}
                                                <svg aria-hidden="true" focusable="false" viewBox="0 0 448 512">
                                                    <path
                                                        fill="currentColor"
                                                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222..."
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                {/* linkedin svg */}
                                                <svg aria-hidden="true" focusable="false" viewBox="0 0 448 512">
                                                    <path
                                                        fill="currentColor"
                                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8..."
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* columns with nav menus */}
                        <div className="col-xl-2 col-md-6">
                            <div className="widget widget_nav_menu">
                                <h4 className="widget-title">USEFULL LINKS</h4>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/service">Services</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6">
                            <div className="widget widget_nav_menu">
                                <h4 className="widget-title">OUR SERVICES</h4>
                                <ul>
                                    <li><a href="#">ELECTRICAL WORKS</a></li>
                                    <li><a href="#">MANPOWER SUPPLY</a></li>
                                    <li><a href="#">MECHANICAL WORKS</a></li>
                                    <li><a href="#">VEHICLE RENTAL</a></li>
                                    <li><a href="#">CIVIL WORKS</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6">
                            <div className="widget widget_nav_menu">
                                <ul>
                                    <li><a href="#">TRANSPORTATION, LOGISTICS &amp; CUSTOM CLEARANCE</a></li>
                                    <li><a href="#">MATERIAL SUPPLY</a></li>
                                    <li><a href="#">EVENT MANAGEMENT</a></li>
                                    <li><a href="#">VEHICLE RENTAL</a></li>
                                    <li><a href="#">REFURBISHMENT/ RENOVATION WORKS</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>{/* row */}
                </div>
            </footer>
            {/* footer area end */}

            {/* footer-bottom area start */}
            <div className="footer-bottom-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-lg-start text-center">
                            <div className="copyright-area">
                                <p>
                                    © Copyright 2023 By <a href="#">Expeditors Global</a>, All right reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="back-to-top" style={{ display: "none" }}>
                <span className="back-top">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 320 512">
                        <path
                            fill="currentColor"
                            d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
                        />
                    </svg>
                </span>
            </div>
        </>
    );
}
