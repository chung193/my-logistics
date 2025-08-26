import PageBreadcrumb from "@/components/PageBreadcrumb";
export default function ContactPage() {
    return (
        <>
            <PageBreadcrumb pageName="Contact Us" />
            <div className="container">
                <div className="contact-area mg-top-120 mb-120">
                    <div className="row g-0 justify-content-center">
                        <div className="col-lg-7">
                            <form className="contact-form text-center">
                                <h3>GET A QUOTE</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-input-inner">
                                            <label>

                                                <i className="fa fa-user" />
                                            </label>
                                            <input type="text" placeholder="Your name" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input-inner">
                                            <label>
                                                <i className="fa fa-envelope" />
                                            </label>
                                            <input type="text" placeholder="Your email" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input-inner">
                                            <label>

                                                <i className="fas fa-calculator" />
                                            </label>
                                            <input type="text" placeholder=" Phone number" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-select-inner">
                                            <label>

                                                <i className="far fa-file-alt" />
                                            </label>

                                            {/* Hidden select (for nice-select plugin markup) */}
                                            <select className="single-select" style={{ display: "none" }}>
                                                <option>Subject</option>
                                                <option value="1">Some option</option>
                                                <option value="2">Another option</option>
                                            </select>

                                            {/* Visible fake select structure */}
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
                                    </div>

                                    <div className="col-12">
                                        <div className="single-input-inner">
                                            <label>

                                                <i className="fas fa-pencil-alt" />
                                            </label>
                                            <textarea placeholder="Write massage"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <a className="btn btn-base" href="#">
                                            {" "}
                                            SEND MESSAGE{" "}
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-5">
                            <div className="contact-information-wrap">
                                <h3 className="contact-heading" style={{ color: "#2c4397" }}>
                                    CONTACT INFORMATION
                                </h3>

                                <div className="single-contact-info-wrap">
                                    <h6 className="contact-label">Contact Number:</h6>
                                    <div className="media">
                                        <div className="icon contact-icon-phone">

                                            <i className="fa fa-phone-alt" />
                                        </div>
                                        <div className="media-body">
                                            <p className="contact-text">+91 97 4660 9023</p>
                                            <p className="contact-text">+91 97 4660 9023</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-contact-info-wrap">
                                    <h6 className="contact-label">Mail Address:</h6>
                                    <div className="media">
                                        <div className="icon contact-icon-envelope">
                                            <i className="fa fa-envelope" />
                                        </div>
                                        <div className="media-body">
                                            <p className="contact-text">info@expeditorsint.com</p>
                                            <p className="contact-text">info@expeditorsglobal.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-contact-info-wrap mb-0">
                                    <h6 className="contact-label">Office Location:</h6>
                                    <div className="media">
                                        <div className="icon contact-icon-map">

                                            <i className="fa fa-map-marker-alt" />
                                        </div>
                                        <div className="media-body">
                                            <p className="contact-text">
                                                Office No.504, 5th Floor, Mina Commercial Center, Grand Hotel Building, Hindawiya Dist.
                                                Mina Road, Jeddah 22321, KSA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* col-right */}
                    </div>
                </div>
            </div>
            <div className="contact-g-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd"
                />
            </div>
        </>
    );
}