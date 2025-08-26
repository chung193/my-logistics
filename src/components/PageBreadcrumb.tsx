export default async function PageBreadcrumb({ pageName = '' }) {
    return (
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
                                <h2 className="page-title">{pageName}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

