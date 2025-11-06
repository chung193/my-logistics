
import Link from "next/link";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

type Props = {
    params: any | Promise<any>;
    searchParams?: any | Promise<any>;
};

export default async function VisionPage({ params }: Props) {
    const { locale } = params;
    const t = await getDictionary(locale);
    return (
        <>
            {/* breadcrumb start */}
            <PageBreadcrumb pageName={t.pages.vision.title} />
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
                                        <h3 style={{ color: "#2c4397" }}>{t.pages.vision.subtitle}</h3>
                                        <p className="content left-line small-font">
                                            {t.pages.vision.summary}
                                        </p>
                                        <p className="content small-font" style={{ whiteSpace: 'pre-line' }}>
                                            {t.pages.vision.content}
                                        </p>




                                    </div>
                                </div>
                            </div>
                        </div>{/* row */}
                    </div>
                </div>
            </div>


        </>
    );
}
