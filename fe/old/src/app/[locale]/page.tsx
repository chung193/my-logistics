import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import { locales, type Locale } from "@/lib/i18n";

import BannerSlider from "@/components/BannerSlider";
import Loading from "@/components/Loading";

/** Helper kiểm tra locale hợp lệ */
function isLocale(x: string): x is Locale {
  return (locales as readonly string[]).includes(x);
}

/** generateStaticParams: tạo các route /vi, /en,... */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Page component */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Next types hiện tại đang coi params là Promise, nên mình await
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const t = await getDictionary(locale);

  return (
    <>
      {/* preloader */}
      <Loading />

      {/* =============== BANNER =============== */}
      <BannerSlider
        t1={t.banner.t1}
        d1={t.banner.d1}
        t2={t.banner.t2}
        d2={t.banner.d2}
        locale={locale}
      />

      {/* =============== ABOUT =============== */}
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
                  <img
                    className="hover-bg rounded"
                    src="/assets/img/8.png"
                    alt="img"
                  />
                </div>
              </div>

              <div className="col-lg-7 align-self-center" data-aos="flip-down">
                <div className="about-inner-wrap ms-0 ps-lg-4 mt-0">
                  <div className="section-title mb-0">
                    <h6 className="sub-title text-base mb-3">
                      <svg
                        className="me-2"
                        width="40"
                        height="12"
                        viewBox="0 0 40 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="20" width="20" height="2" fill="#2c4397"></rect>
                        <rect
                          y="10"
                          width="40"
                          height="2"
                          fill="#2c4397"
                        ></rect>
                      </svg>
                      {t.about.badge}
                    </h6>

                    <h2 className="title mb-2">{t.about.title}</h2>

                    <p className="mb-4">{t.pages.about.content}</p>

                    <div className="row">
                      <div className="col-md-8">
                        {[
                          {
                            img: "/assets/img/vision.png",
                            href: `/${locale}/vision`,
                            label: t.nav.vision,
                          },
                          {
                            img: "/assets/img/mission.png",
                            href: `/${locale}/mission`,
                            label: t.nav.mission,
                          },
                          {
                            img: "/assets/img/strategy.png",
                            href: `/${locale}/strategy`,
                            label: t.nav.strategy,
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="media border-bottom-1 pb-3 mb-3"
                          >
                            <div className="media-left me-3">
                              <img src={item.img} alt="img" width="40" />
                            </div>
                            <div className="media-body">
                              <h5>
                                <a href={item.href}>{item.label}</a>
                              </h5>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== SERVICES =============== */}
      <div
        className="portfolio-area pd-top-115"
        style={{ background: "url(/assets/img/portfolio/bg.png)" }}
        data-aos="flip-down"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title style-white">
                <h4 className="subtitle style-2">
                  <svg
                    className="me-2"
                    width="40"
                    height="12"
                    viewBox="0 0 40 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="20" width="20" height="2" fill="#2c4397"></rect>
                    <rect
                      y="10"
                      width="40"
                      height="2"
                      fill="#2c4397"
                    ></rect>
                  </svg>
                </h4>
                <h2 className="title">{t.services.title}</h2>
                <h4 className="title" style={{ fontSize: 16 }}>
                  {t.services.swipe}
                </h4>
              </div>
            </div>
          </div>

          <div className="swiper-container">
            <div className="swiper-wrapper">
              {[
                {
                  img: "/assets/img/bernd-dittrich-eCc7FjMoR74-unsplash.jpg",
                  title: t.pages.contract_logistics.title,
                  href: `/${locale}/contract_logistics`,
                },
                {
                  img: "/assets/img/eugen-str-CrhsIRY3JWY-unsplash.jpg",
                  title: t.pages.customers_partners.title,
                  href: `/${locale}/customs_brokerage`,
                },
                {
                  img: "/assets/img/gabriel-santos-GBVDilE8yvI-unsplash.jpg",
                  title: t.pages.services_air.title,
                  href: `/${locale}/services_air`,
                },
                {
                  img: "/assets/img/scott-blake-x-ghf9LjrVg-unsplash (1).jpg",
                  title: t.pages.services_ocean.title,
                  href: `/${locale}/services_ocean`,
                },
                {
                  img: "/assets/img/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg",
                  title: t.pages.services_road_rail.title,
                  href: `/${locale}/services_road_rail`,
                },
              ].map((s, idx) => (
                <div key={idx} className="swiper-slide">
                  <div className="single-portfolio-wrap">
                    <div className="thumb">
                      <img
                        src={s.img}
                        style={{ borderRadius: 10 }}
                        alt="img"
                      />
                    </div>
                    <div className="portfolio-details">
                      <div className="details">
                        <h4>{s.title}</h4>
                      </div>
                      <a href={s.href} className="icon">
                        <i className="fa fa-plus" />
                      </a>
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
      </div>

      {/* Các section còn lại (why, counters, ...) anh giữ nguyên như file cũ */}
    </>
  );
}
