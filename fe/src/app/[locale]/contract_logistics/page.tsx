import Link from "next/link";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";
import ServicesList from "@/components/ServicesList";

type Props = {
    params: any | Promise<any>;
    searchParams?: any | Promise<any>;
};

export default async function ContractLogisticsPage({ params }: Props) {
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
                            <img
                                src='/img/img (5).jpg'
                                alt={t.pages.contract_logistics.title}
                                className="img-fluid object-fit-cover"
                                style={{ width: "100%", height: "100%", borderRadius: ".5rem .5rem .5rem .5rem" }}
                            />

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
                    <ServicesList locale={params.locale} t={t} />
                </div>
            </div>
        </>
    );
}
