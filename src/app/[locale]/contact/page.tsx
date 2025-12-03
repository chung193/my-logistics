import PageBreadcrumb from "@/components/PageBreadcrumb";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

type Props = {
    params: any | Promise<any>;
    searchParams?: any | Promise<any>;
};

export default async function ContactPage({ params }: Props) {
    const { locale } = params;
    const t = await getDictionary(locale);
    return (
        <>
            <PageBreadcrumb pageName={t.footer.contact_us_breadcrumb} />
            <div className="container">
                <div className="contact-area mg-top-120 mb-120">
                    <div className="row g-0 justify-content-center">
                        <div className="col-lg-7">
                            <form className="contact-form text-center">
                                <h3>{t.footer.get_a_quote}</h3>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="single-input-inner">
                                            <label>

                                                <i className="fa fa-user" />
                                            </label>
                                            <input type="text" placeholder={t.footer.your_name} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input-inner">
                                            <label>
                                                <i className="fa fa-envelope" />
                                            </label>
                                            <input type="text" placeholder={t.footer.your_email} />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input-inner">
                                            <label>

                                                <i className="fas fa-calculator" />
                                            </label>
                                            <input type="text" placeholder={t.footer.phone_number} />
                                        </div>
                                    </div>

                                    {/* <div className="col-md-6">
                                        <div className="single-select-inner">
                                            <label>

                                                <i className="far fa-file-alt" />
                                            </label>

                                    <select className="single-select" style={{ display: "none" }}>
                                        <option>Subject</option>
                                        <option value="1">Some option</option>
                                        <option value="2">Another option</option>
                                    </select>

                                    <div className="nice-select single-select" tabIndex={0}>
                                        <span className="current">Subject</span>
                                        <ul className="list">
                                            <li data-value="Subject" className="option selected">
                                                Subject
                                            </li>
                                            <li data-value="1" className="option">
                                                Some option
                                            </li>
                                            <li data-value="2" className="option">
                                                Another option
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                        </div> */}

                                    <div className="col-12">
                                        <div className="single-input-inner">
                                            <label>

                                                <i className="fas fa-pencil-alt" />
                                            </label>
                                            <textarea placeholder={t.footer.write_message}></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <a className="btn btn-base" href="#">
                                            {" "}
                                            {t.footer.send_message}{" "}
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-5">
                            <div className="contact-information-wrap">
                                <h3 className="contact-heading" style={{ color: "#2c4397" }}>
                                    {t.footer.contact_information}
                                </h3>

                                <div className="single-contact-info-wrap">
                                    <h6 className="contact-label">{t.footer.contact_number}</h6>
                                    <div className="media">
                                        <div className="icon contact-icon-phone">

                                            <i className="fa fa-phone-alt" />
                                        </div>
                                        <div className="media-body">
                                            <p className="contact-text">{t.footer.phone1}</p>
                                            <p className="contact-text">{t.footer.phone2}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-contact-info-wrap">
                                    <h6 className="contact-label">{t.footer.mail_address}</h6>
                                    <div className="media">
                                        <div className="icon contact-icon-envelope">
                                            <i className="fa fa-envelope" />
                                        </div>
                                        <div className="media-body">
                                            <p className="contact-text">{t.footer.email1}</p>
                                            <p className="contact-text">{t.footer.email2}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-contact-info-wrap mb-0">
                                    <h6 className="contact-label">{t.footer.office_location}</h6>
                                    <div className="media">
                                        <div className="icon contact-icon-map">

                                            <i className="fa fa-map-marker-alt" />
                                        </div>
                                        <div className="media-body">
                                            <p className="contact-text">
                                                {t.footer.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* col-right */}
                    </div >
                </div >
            </div >
            <div className="contact-g-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.2575342719074!2d106.66635682502593!3d20.841668580761187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7bca432acb4f%3A0x1e6850f2cadfc7e1!2zVMOyYSBuaMOgIELhuqFjaCDEkOG6sW5n!5e1!3m2!1sen!2s!4v1760076786114!5m2!1sen!2s" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
}