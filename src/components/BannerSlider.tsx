'use client';

import { useEffect } from 'react';
import { usePathname, useParams } from 'next/navigation';

declare global {
    interface Window {
        $: any;
        jQuery: any;
        AOS?: { init?: () => void; refresh?: () => void };
    }
}

async function waitForOwl(maxTry = 30, intervalMs = 100) {
    for (let i = 0; i < maxTry; i++) {
        const hasOwl = !!window?.$?.fn?.owlCarousel;
        if (hasOwl) return true;
        await new Promise((r) => setTimeout(r, intervalMs));
    }
    return false;
}

type BannerSliderProps = {
    t1: string;
    d1: string;
    t2: string;
    d2: string;
    locale: string; // hoặc 'vi' | 'en' | ... tuỳ anh
};

//Dữ liệu banner song ngữ
const banner = {
    slider: {
        vi: {
            t1: "EXPEDITORS GLOBAL: MỞ KHÓA GIÁ TRỊ Ở MỌI BƯỚC CỦA CHUỖI CUNG ỨNG",
            t2: "CÁCH TỐT HƠN, GIÚP CHUỖI CUNG ỨNG BỀN VỮNG HƠN MỖI NGÀY",
            t3: "EXPEDITORS GLOBAL – THIẾT KẾ LIỀN MẠCH CÁC GIẢI PHÁP PHÙ HỢP NHẤT CHO BẠN.",
        },
        en: {
            t1: "EXPEDITORS GLOBAL: UNLOCKING VALUE AT EVERY STEP OF THE SUPPLY CHAIN",
            t2: "A BETTER WAY, MAKING THE SUPPLY CHAIN MORE SUSTAINABLE EVERY DAY",
            t3: "EXPEDITORS GLOBAL – SEAMLESSLY DESIGNING THE MOST SUITABLE SOLUTIONS FOR YOU.",
        },
    },
};

export default function BannerSlider({
    t1,
    d1,
    t2,
    d2,
    locale,
}: BannerSliderProps) {
    const pathname = usePathname();
    const params = useParams();

    // Lấy locale từ URL (mặc định vi) — ưu tiên params, nếu không có dùng prop, cuối cùng mặc định 'vi'
    const resolvedLocale = (params?.locale as string) || locale || 'vi';
    const t = banner.slider[resolvedLocale as keyof typeof banner.slider] || banner.slider.vi;

    useEffect(() => {
        (async () => {
            const ok = await waitForOwl();
            if (!ok) return;

            const $ = window.$ || window.jQuery;
            const $el = $('.banner-slider');

            try {
                if ($el.hasClass('owl-loaded')) {
                    $el.trigger('destroy.owl.carousel');
                    $el.removeClass('owl-loaded');
                    $el.find('.owl-stage-outer').children().unwrap();
                }
            } catch { }

            try {
                $el.owlCarousel({
                    items: 1,
                    loop: true,
                    nav: true,
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    navText: [
                        '<img src="/assets/img/left-arrow.png">',
                        '<img src="/assets/img/right-arrow.png">',
                    ],
                });
            } catch { }

            try {
                window?.AOS?.refresh?.();
            } catch { }
        })();

        return () => {
            try {
                const $ = window.$ || window.jQuery;
                const $el = $('.banner-slider');
                if ($el?.length) $el.trigger('destroy.owl.carousel');
            } catch { }
        };
    }, [pathname]);

    // ✅ text nút theo ngôn ngữ
    const btnExplore = resolvedLocale === 'vi' ? 'Xem dịch vụ' : 'Explore Services';
    const btnContact = resolvedLocale === 'vi' ? 'Liên hệ' : 'Contact Us';

    return (
        <div className="banner-area banner-area-2">
            <div className="banner-slider owl-carousel">

                {/* Slide 1 */}
                <div className="item" style={{ backgroundImage: 'url(/assets/img/banner/2.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="banner-inner style-white">
                                    <h2 className="b-animate-2 title">{t.t1}</h2>
                                    <p className="b-animate-3 content" style={{ fontSize: 18 }}>
                                        {t.t2}
                                    </p>
                                    <div className="btn-wrap">
                                        <a className="btn btn-base b-animate-4" href="/service">
                                            {btnExplore}
                                        </a>
                                        <a className="btn btn-white b-animate-4" href="/contact">
                                            {btnContact}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="item" style={{ backgroundImage: 'url(/assets/img/banner/3.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="banner-inner style-white">
                                    <h2 className="b-animate-2 title">{t.t3}</h2>
                                    <p className="b-animate-3 content" style={{ fontSize: 18 }}>
                                        {t.t2}
                                    </p>
                                    <div className="btn-wrap">
                                        <a className="btn btn-base b-animate-4" href="/service">
                                            {btnExplore}
                                        </a>
                                        <a className="btn btn-white b-animate-4" href="/contact">
                                            {btnContact}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
