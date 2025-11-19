// app/[locale]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import BannerSlider from '@/components/BannerSlider';
import Loading from "@/components/Loading";
import PageProps from "next";

// Thu hẹp từ string -> Locale
function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

// (Tùy chọn, hữu ích cho static export)
// export const dynamic = 'error';
// export const fetchCache = 'force-cache';
// export const revalidate = false;

// Nếu bạn muốn static export, thêm generateStaticParams:
export function generateStaticParams() {
  return (locales as readonly string[]).map((l) => ({ locale: l }));
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;       // <- BẮT BUỘC await theo Next 15.5
  if (!isLocale(locale)) notFound();

  const t = await getDictionary(locale);

  return (
    <>
      {/* preloader */}
      <Loading />

      {/* overlay */}
      <div className="body-overlay" id="body-overlay"></div>

      {/* banner */}
      <BannerSlider
        t1={t.banner.t1}
        d1={t.banner.d1}
        t2={t.banner.t2}
        d2={t.banner.d2}
        locale={params.locale}
      />

      {/* about */}
      <div
        className="about-area-2 half-bg-right pd-top-120 pd-bottom-120"
        style={{ background: "url(/assets/img/home-3/13.png)" }}
        data-aos="flip-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <div className="container" data-aos="fade-right">
          <div className="about-area-inner">
            <div className="row">
              <div className="col-lg-5">
                <div className="about-thumb-wrap mb-lg-0 mb-4">
                  <img className="hover-bg rounded" src="/assets/img/8.png" alt="img" />
                </div>
              </div>

              <div className="col-lg-7 align-self-center" data-aos="flip-down">
                <div className="about-inner-wrap ms-0 ps-lg-4 mt-0">
                  <div className="section-title mb-0">
                    <h6 className="sub-title text-base mb-3">
                      <svg className="me-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" width="20" height="2" fill="#2c4397"></rect>
                        <rect y="10" width="40" height="2" fill="#2c4397"></rect>
                      </svg>
                      {t.about.badge}
                    </h6>
                    <h2 className="title mb-2">{t.about.title}</h2>
                    <p className="mb-4">
                      {t.pages.about.content}
                    </p>

                    <div className="row">
                      <div className="col-md-8">

                        <div className="media border-bottom-1 pb-3 mb-3">
                          <div className="media-left me-3">
                            <img src="/assets/img/vision.png" alt="img" width="40" />
                          </div>
                          <div className="media-body" data-aos="fade-left">
                            <h5><a href={`/${locale}/vision`}>{t.nav.vision}</a></h5>
                            <p className="mb-0"></p>
                          </div>
                        </div>

                        <div className="media border-bottom-1 pb-3 mb-3">
                          <div className="media-left me-3">
                            <img src="/assets/img/mission.png" alt="img" width="40" />
                          </div>
                          <div className="media-body" data-aos="fade-right">
                            <h5><a href={`/${locale}/mission`}>{t.nav.mission}</a></h5>
                            <p className="mb-0">
                            </p>
                          </div>
                        </div>

                        <div className="media border-bottom-1 pb-3 mb-3">
                          <div className="media-left me-3">
                            <img src="/assets/img/strategy.png" alt="img" width="40" />
                          </div>
                          <div className="media-body" data-aos="fade-right">
                            <h5><a href={`/${locale}/strategy`}>{t.nav.strategy}</a></h5>
                            <p className="mb-0">
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* counters */}
      <div
        className="contact-area"
        style={{ backgroundImage: "url(/assets/img/home-3/40.png)" }
        }
        data-aos="slide-up"
        data-aos-duration="800"
      >
        <div className="container">
          <div className="fact-counter-area style-2 bg-black">
            <div className="row justify-content-center">
              {[
                { img: "/assets/img/Deliveries (1).png", value: "500", label: "Deliveries" },
                { img: "/assets/img/years experience.png", value: "10", label: "Years Experience" },
                { img: "/assets/img/winning awards.png", value: "5", label: "Winning Awards" },
                { img: "/assets/img/Team Members.png", value: "50", label: "Team Members" },
              ].map((c, idx) => (
                <div key={idx} className="col-lg-3 col-md-6 fact-counter-item">
                  <div className="single-fact-wrap text-center" style={{ borderRadius: 10, overflow: "hidden" }}>
                    <div className="thumb mb-3">
                      <img src={c.img} alt="img" />
                    </div>
                    <h2 className="mb-0 text-white"><span className="counter">{c.value}</span>+</h2>
                    <p>{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >

      {/* services */}
      < div
        className="portfolio-area pd-top-115"
        style={{ background: "url(/assets/img/portfolio/bg.png)" }
        }
        data-aos="flip-down"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title style-white">
                <h4 className="subtitle style-2">
                  <svg className="me-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" width="20" height="2" fill="#2c4397"></rect>
                    <rect y="10" width="40" height="2" fill="#2c4397"></rect>
                  </svg>
                </h4>
                <h2 className="title">{t.services.title}</h2>
                <h4 className="title" style={{ fontSize: 16 }}>{t.services.swipe}</h4>
              </div>
            </div>
          </div>

          {/* giữ markup Swiper để vendor khởi tạo */}
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {[
                { img: "/assets/img/bernd-dittrich-eCc7FjMoR74-unsplash.jpg", title: t.pages.contract_logistics.title, href: `/${locale}/contract_logistics` },
                { img: "/assets/img/eugen-str-CrhsIRY3JWY-unsplash.jpg", title: t.pages.customers_partners.title, href: `/${locale}/customs_brokerage` },
                { img: "/assets/img/gabriel-santos-GBVDilE8yvI-unsplash.jpg", title: t.pages.services_air.title, href: `/${locale}/services_air` },
                { img: "/assets/img/scott-blake-x-ghf9LjrVg-unsplash (1).jpg", title: t.pages.services_ocean.title, href: `/${locale}/services_ocean` },
                { img: "/assets/img/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg", title: t.pages.services_road_rail.title, href: `/${locale}/services_road_rail` },
              ].map((s, idx) => (
                <div key={idx} className="swiper-slide">
                  <div className="single-portfolio-wrap">
                    <div className="thumb">
                      <img src={s.img} style={{ borderRadius: 10 }} alt="img" />
                    </div>
                    <div className="portfolio-details">
                      <div className="details"><h4>{s.title}</h4></div>
                      <a href={s.href} className="icon"><i className="fa fa-plus" /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="swiper-button-prev button">
              <img src="/assets/img/left-arrow.png" alt="img" />
            </div>
            <div className="swiper-button-next button">
              <img src="/assets/img/right-arrow.png" alt="img" />
            </div>
          </div>
        </div>
      </div >

      {/* why choose us */}
      <div className="wcu-area bg-overlay" style={{ background: "url(/assets/img/wcu/bg.png)" }
      } data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-in-sine" >
        <img className="img-1" src="/assets/img/1.png" alt="img" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-6 order-lg-2">
              <div className="video-thumb-wrap">
                <img src="/assets/img/video.png" alt="img" style={{ borderRadius: "4%" }} />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 order-lg-1">
              <div className="section-title style-white mb-0" data-aos="slide-left">
                <h2 className="title">
                  <svg className="me-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" width="20" height="2" fill="#2c4397"></rect>
                    <rect y="10" width="40" height="2" fill="#2c4397"></rect>
                  </svg>
                  {t.why.title}
                </h2>
                {/* <p className="content">
                  Discover a partnership built on unwavering commitment to excellence, a seamless blend of cutting-edge
                  technology and expert human touch, and a track record of delivering outstanding logistics solutions that
                  elevate your business to new heights of success.
                </p> */}
              </div>

              {[
                { icon: "/assets/img/icon-1.png", h: t.why.title1, p: t.why.content1 },
                { icon: "/assets/img/icon-2.png", h: t.why.title2, p: t.why.content2 },
                { icon: "/assets/img/icon-3.png", h: t.why.title3, p: t.why.content3 },
                { icon: "/assets/img/icon-3.png", h: t.why.title4, p: t.why.content4 },
              ].map((w, i) => (
                <div key={i} className="single-wcu-wrap">
                  <div className="icon"><img src={w.icon} alt="img" /></div>
                  <div className="details">
                    <h6>{w.h}</h6>
                    <p>{w.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >

      {/* work process */}
      {/*  <div className="work-process-area pd-top-120 pd-bottom-120 position-relative" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6 className="sub-title text-base mb-3">
                  <svg className="me-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" width="20" height="2" fill="#2c4397"></rect>
                    <rect y="10" width="40" height="2" fill="#2c4397"></rect>
                  </svg>
                  {t.work.badge}
                  <svg className="ms-2" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="2" transform="matrix(-1 0 0 1 20 0)" fill="#2c4397"></rect>
                    <rect width="40" height="2" transform="matrix(-1 0 0 1 40 10)" fill="#2c4397"></rect>
                  </svg>
                </h6>
                <h2 className="title">{t.work.title}</h2>
              </div>
            </div>
          </div> */}

      {/* <div className="bg work-process-bg bg-cover" style={{ backgroundImage: "url(/assets/img/home-3/26.png)" }}>
            <div className="row">
              {[
                { img: "/assets/img/22.png", title: "Customer Onboarding", no: "01" },
                { img: "/assets/img/23.png", title: "Task Allocation", no: "02" },
                { img: "/assets/img/24.png", title: "Service completion", no: "03" },
                { img: "/assets/img/25.png", title: "Customer Review", no: "04" },
              ].map((step, idx) => (
                <div key={idx} className="col-lg-3 col-md-6">
                  <div className="single-work-process-inner text-center">
                    <div className="thumb"><div className="icon"><img src={step.img} alt="img" /></div></div>
                    <div className="details">
                      <h6>{step.title}</h6>
                      <div className="count">{step.no}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
           </div >
      </div >
           */}
    </>
  );
}
