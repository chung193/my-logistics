import Link from "next/link";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import ServicesList from "@/components/ServicesList";

export default async function ContractLogisticsPage({ params }: { params: { locale: Locale } }) {
    const { locale } = params;
    const t = await getDictionary(locale);
    return (
        <>
            {/* breadcrumb start */}
            <PageBreadcrumb pageName={t.pages.contract_logistics.title} />
            {/* breadcrumb end */}
            {/* skill-area end */}
            <div className="container py-4 py-lg-5">
                <div className="row g-4 align-items-start">
                    {/* Hero image / media */}
                    <div className="col-12 col-lg-8">
                        <div className="card border-0 h-100">
                            <div className="ratio ratio-16x9">
                                <img
                                    src='https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/567164366_25401664799418225_2845080607569691660_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=WBhBIsI06dEQ7kNvwEF3qbs&_nc_oc=AdlwGtKeD_UVs_9zZQ2YOD_IRVr5JLRNiNaKrO_efmI3hjRdDIBkmRS0P9WyQCgKGug&_nc_zt=23&_nc_ht=scontent.fhan5-6.fna&_nc_gid=V6q-X-h2EsQR257_npiA6w&oh=00_AfcCOykk5-5dUQ2mmBxe49yU6dRmGJH94LMuDMLSsiL3Zw&oe=68F80EEF'
                                    alt={t.pages.contract_logistics.title}
                                    className="img-fluid object-fit-cover"
                                    style={{ width: "100%", height: "100%", borderRadius: ".5rem .5rem .5rem .5rem" }}
                                />
                            </div>

                            {/* Title & description */}
                            <div className="row mt-4 mt-lg-12">
                                <div className="col-12 col-lg-12">
                                    <h2 className="fw-bold text-uppercase mb-3">{t.pages.contract_logistics.title}</h2>
                                    <p className="text-muted" style={{ textAlign: "justify" }}>{t.pages.contract_logistics.summary}</p>
                                    <p className="text-muted" style={{ textAlign: "justify" }}>{t.pages.contract_logistics.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Service list */}
                    <ServicesList params={{ locale }} />
                </div>
            </div>
        </>
    );
}
