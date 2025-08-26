import Link from "next/link";
import PageBreadcrumb from "@/components/PageBreadcrumb";

export default function ServicePage() {
    return (
        <>
            <PageBreadcrumb pageName="Our Services" />
            <div className="service-area style-2 pd-top-115 pd-bottom-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <h4 className="subtitle">SERVICES</h4>
                                <h2 className="title">OUR SERVICE FOR YOU</h2>
                                <p>ONE SENTENCE ABOUT THE SERVICES</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {/* 1 */}
                        <div className="col-lg-4 rounded">
                            <div className="single-service-wrap rounded">
                                <div className="thumb rounded">
                                    <img
                                        src="/assets/img/service/bernd-dittrich-eCc7FjMoR74-unsplash.jpg"
                                        alt="img"
                                        style={{ borderRadius: "3%" }}
                                    />
                                    <div className="icon">
                                        <img
                                            src="/assets/img/service/Transportation & Logistics.png"
                                            alt="img"
                                        />
                                    </div>
                                </div>
                                <div className="details">
                                    <h5>TRANSPORTATION, LOGISTICS &amp; CUSTOM CLEARANCE</h5>
                                    <p>Intrinsicly exploit e-business imperative with emerging human capital.</p>
                                    <div className="btn-wrap">
                                        <Link
                                            className="read-more-text rounded"
                                            href={encodeURI("/TRANSPORTATION, LOGISTICS & CUSTOM CLEARANCE.html")}
                                        >
                                            READ MORE
                                            <span>
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="col-lg-4">
                            <div className="single-service-wrap">
                                <div className="thumb">
                                    <img
                                        src="/assets/img/service/mika-baumeister-74tW4FXP4Hw-unsplash.jpg"
                                        alt="img"
                                        style={{ borderRadius: "3%" }}
                                    />
                                    <div className="icon">
                                        <img
                                            src="/assets/img/service/labor.png"
                                            alt="img"
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </div>
                                </div>
                                <div className="details">
                                    <h5>MANPOWER SUPPLY</h5>
                                    <p>Intrinsicly exploit e-business imperative with emerging human capital.</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href="/MANPOWER SUPPLY.html">
                                            READ MORE
                                            <span>
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="col-lg-4">
                            <div className="single-service-wrap">
                                <div className="thumb">
                                    <img
                                        src="/assets/img/service/eugen-str-CrhsIRY3JWY-unsplash.jpg"
                                        alt="img"
                                        style={{ borderRadius: "3%" }}
                                    />
                                    <div className="icon">
                                        <img
                                            src="/assets/img/service/Equipment rental supply.png"
                                            alt="img"
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </div>
                                </div>
                                <div className="details">
                                    <h5>EQUIPMENT RENTAL SUPPLY</h5>
                                    <p>Intrinsicly exploit e-business imperative with emerging human capital.</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href="/EQUIPMENT RENTAL SUPPLY.html">
                                            READ MORE
                                            <span>
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="col-lg-4">
                            <div className="single-service-wrap">
                                <div className="thumb">
                                    <img
                                        src="/assets/img/service/gabriel-santos-GBVDilE8yvI-unsplash.jpg"
                                        alt="img"
                                        style={{ borderRadius: "3%" }}
                                    />
                                    <div className="icon">
                                        <img
                                            src="/assets/img/service/vehicles rental.png"
                                            alt="img"
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </div>
                                </div>
                                <div className="details">
                                    <h5>VEHICLE RENTAL</h5>
                                    <p>Intrinsicly exploit e-business imperative with emerging human capital.</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href="/VEHICLE RENTAL.html">
                                            READ MORE
                                            <span>
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="col-lg-4">
                            <div className="single-service-wrap">
                                <div className="thumb">
                                    <img
                                        src="/assets/img/service/scott-blake-x-ghf9LjrVg-unsplash (1).jpg"
                                        alt="img"
                                        style={{ borderRadius: "3%" }}
                                    />
                                    <div className="icon">
                                        <img
                                            src="/assets/img/service/civil.png"
                                            alt="img"
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </div>
                                </div>
                                <div className="details">
                                    <h5>CIVIL WORKS</h5>
                                    <p>Intrinsicly exploit e-business imperative with emerging human capital.</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href="/CIVIL WORKS.html">
                                            READ MORE
                                            <span>
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="col-lg-4">
                            <div className="single-service-wrap">
                                <div className="thumb">
                                    <img
                                        src="/assets/img/service/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg"
                                        alt="img"
                                        style={{ borderRadius: "3%" }}
                                    />
                                    <div className="icon">
                                        <img
                                            src="/assets/img/service/electrical works.png"
                                            alt="img"
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </div>
                                </div>
                                <div className="details">
                                    <h5>ELECTRICAL WORKS</h5>
                                    <p>Intrinsicly exploit e-business imperative with emerging human capital.</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href="/ELECTRICAL WORKS.html">
                                            READ MORE
                                            <span>
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 7 */}
                        <div className="col-lg-4">
                            <div className="single-service-wrap">
                                <div className="thumb">
                                    <img
                                        src="/assets/img/service/thisisengineering-raeng-WDCE0T4khsE-unsplash.jpg"
                                        alt="img"
                                        style={{ borderRadius: "3%" }}
                                    />
                                    <div className="icon">
                                        <img
                                            src="/assets/img/service/mechanical works.png"
                                            alt="img"
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </div>
                                </div>
                                <div className="details">
                                    <h5>MECHANICAL WORKS</h5>
                                    <p>Intrinsicly exploit e-business imperative with emerging human capital.</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href="/MECHANICAL WORKS.html">
                                            READ MORE
                                            <span>
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 8 */}
                        <div className="col-lg-4">
                            <div className="single-service-wrap">
                                <div className="thumb">
                                    <img
                                        src="/assets/img/service/etienne-girardet-sgYamIzhAhg-unsplash.jpg"
                                        alt="img"
                                        style={{ borderRadius: "3%" }}
                                    />
                                    <div className="icon">
                                        <img
                                            src="/assets/img/service/material supply.png"
                                            alt="img"
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </div>
                                </div>
                                <div className="details">
                                    <h5>MATERIAL SUPPLY</h5>
                                    <p>Intrinsicly exploit e-business imperative with emerging human capital.</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href="/MATERIAL SUPPLY.html">
                                            READ MORE
                                            <span>
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 9 */}
                        <div className="col-lg-4">
                            <div className="single-service-wrap">
                                <div className="thumb">
                                    <img
                                        src="/assets/img/service/chuttersnap-aEnH4hJ_Mrs-unsplash.jpg"
                                        alt="img"
                                        style={{ borderRadius: "3%" }}
                                    />
                                    <div className="icon">
                                        <img
                                            src="/assets/img/service/event.png"
                                            alt="img"
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </div>
                                </div>
                                <div className="details">
                                    <h5>EVENT MANAGEMENT</h5>
                                    <p>Intrinsicly exploit e-business imperative with emerging human capital.</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href="/EVENT MANAGEMENT.html">
                                            READ MORE
                                            <span>
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 10 */}
                        <div className="col-lg-4">
                            <div className="single-service-wrap">
                                <div className="thumb">
                                    <img
                                        src="/assets/img/service/immo-renovation-UqNEbyRQ660-unsplash.jpg"
                                        alt="img"
                                        style={{ borderRadius: "3%" }}
                                    />
                                    <div className="icon">
                                        <img
                                            src="/assets/img/service/renovation.png"
                                            alt="img"
                                            style={{ width: 50, height: 50 }}
                                        />
                                    </div>
                                </div>
                                <div className="details">
                                    <h5>REFURBISHMENT / RENOVATION WORKS</h5>
                                    <p>Intrinsicly exploit e-business imperative with emerging human capital.</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href="/RENOVATION WORKS.html">
                                            READ MORE
                                            <span>
                                                <i className="fa fa-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end grid */}
                    </div>
                </div>
            </div>
        </>
    );
}