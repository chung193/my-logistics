import Link from "next/link";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

type Props = {
    params: any | Promise<any>;
    searchParams?: any | Promise<any>;
};

export default async function ServicePage({ params }: Props) {
    const { locale } = params;
    const t = await getDictionary(locale);
    return (
        <>
            <PageBreadcrumb pageName={t.services.title} />
            <div className="service-area style-2 pd-top-115 pd-bottom-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <h4 className="subtitle">{t.services.title} </h4>
                                <h2 className="title">{t.services.services_for_you}</h2>
                                <p>{t.services.intro_services}</p>
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
                                    <h5>{t.pages.services_ocean.title} </h5>
                                    <p>{t.pages.services_ocean.summary}</p>
                                    <div className="btn-wrap">
                                        <Link
                                            className="read-more-text rounded"
                                            href={`/${locale}/services_ocean`}
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
                                    <h5>{t.pages.services_air.title}</h5>
                                    <p>{t.pages.services_air.summary}</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href={`/${locale}/services_air`}>
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
                                    <h5>{t.pages.services_road_rail.title}</h5>
                                    <p>{t.pages.services_road_rail.summary}</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href={`/${locale}/services_road_rail`}>
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
                                    <h5>{t.pages.contract_logistics.title}</h5>
                                    <p>{t.pages.contract_logistics.summary}</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href={`/${locale}/contract_logistics`}>
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
                                    <h5>{t.pages.customers_partners.title}</h5>
                                    <p>{t.pages.customers_partners.summary}</p>
                                    <div className="btn-wrap">
                                        <Link className="read-more-text" href={`/${locale}/customs_brokerage`}>
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
            </div >
        </>
    );
}