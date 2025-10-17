import Link from "next/link";

export default async function ServicesList({ locale, t }: { locale: string; t: any }) {
    return (
        <>
            <aside className="col-12 col-lg-4">
                <div className="card border-0 services-list-shadow">
                    <div className="card-body p-3 p-lg-4">
                        <h4 className="widget-title">
                            {t.services_list}
                            <span className="dot"></span>
                        </h4>
                        <ul className="category-items">

                            <li>
                                <Link
                                    href={`/${locale}/services_ocean`}
                                    aria-label={t.pages.services_ocean.title}
                                    title={t.pages.services_ocean.title}
                                >
                                    {t.pages.services_ocean.title}
                                    <span><i className="fa fa-arrow-right" /></span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={`/${locale}/services_ocean`}
                                    aria-label={t.pages.services_air.title}
                                    title={t.pages.services_air.title}
                                >
                                    {t.pages.services_air.title}
                                    <span><i className="fa fa-arrow-right" /></span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${locale}/services_road_rail`}
                                    aria-label={t.pages.services_road_rail.title}
                                    title={t.pages.services_road_rail.title}
                                >
                                    {t.pages.services_road_rail.title}
                                    <span><i className="fa fa-arrow-right" /></span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${locale}/contract_logistics`}
                                    aria-label={t.pages.contract_logistics.title}
                                    title={t.pages.contract_logistics.title}
                                >
                                    {t.pages.contract_logistics.title}
                                    <span><i className="fa fa-arrow-right" /></span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${locale}/customs_brokerage`}
                                    aria-label={t.pages.customs_brokerage.title}
                                    title={t.pages.customs_brokerage.title}
                                >
                                    {t.pages.customs_brokerage.title}
                                    <span><i className="fa fa-arrow-right" /></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
            {/* Local tweaks for this page only */}
            <style>{`
                    .services-list-shadow {
                        background: rgba(8, 12, 36, 0.1);
                        margin-bottom: 2rem;
                        border-radius: 10px;
                    }
                    .widget-title {
                        margin-bottom: 48px;
                        font-weight: 700;
                        font-size: 24px;
                        line-height: 31px;
                        position: relative;
                        display: inline-block;  
                        text-transform: uppercase;  
                    }
                    .dot{
                        position: absolute;
                        height: 3px;
                        width: 3px;
                        background:#0C1118;
                        bottom: -14.5px;
                        left: 65px;
                    }
                    .widget-title span:after {
                        content: "";
                        position: absolute;
                        width: 3px;
                        height: 3px;
                        bottom: 0px;
                        left: 8px;
                        background: #0C1118;
                    }
                    .widget-title:after {
                        content: "";
                        position: absolute;
                        width: 60px;
                        height: 3px;
                        bottom: -16px;
                        left: 0;
                        background: #ea1c57;
                        -webkit-transform: translate(0, -50%);
                        transform: translate(0, -50%);
                    }
                        .category-items {
                            padding-left: 0;
                            padding-bottom: 0;
                            margin-bottom: 0px;
                            margin-top: 0px;
                            list-style-type: none;
                        }

                         .category-items li{
                            list-style: none;
                            -webkit-transition: 0.6s;
                            transition: 0.6s;
                            margin-bottom: 10px;
                            margin-top: 0px;
                        }
                        .category-items li a {
                            position: relative;
                            color: #3D455E;
                            padding: 18px 20px;
                            display: flex;
                            font-weight: 600;
                            font-size: 16px;
                            line-height: 19px;
                            border-radius: 0px;
                            text-transform: uppercase;  
                            background: rgba(8, 12, 36, 0.1);
                        }

                        .category-items li a:hover {
                            color: #ffffff;
                        }

                         .category-items li:hover{
                            background: #ea1c57;
                        }

                        .category-items li a span {
                            display: inline-block;
                            margin-left: auto;
                        }
                `}
            </style>
        </>
    );
}