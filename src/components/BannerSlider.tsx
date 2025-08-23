'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

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

export default function BannerSlider({
    t1,
    d1,
    t2,
    d2,
}: {
    t1: string; d1: string; t2: string; d2: string;
}) {
    const pathname = usePathname();

    useEffect(() => {
        (async () => {
            const ok = await waitForOwl();
            if (!ok) return;

            const $ = window.$ || window.jQuery;
            const $el = $('.banner-slider');

            // destroy cũ (nếu có) để tránh init chồng
            try {
                if ($el.hasClass('owl-loaded')) {
                    $el.trigger('destroy.owl.carousel');
                    $el.removeClass('owl-loaded');
                    $el.find('.owl-stage-outer').children().unwrap();
                }
            } catch { }

            // init lại
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

            // refresh AOS cho chắc
            try {
                window?.AOS?.refresh?.();
            } catch { }
        })();

        // cleanup khi unmount
        return () => {
            try {
                const $ = window.$ || window.jQuery;
                const $el = $('.banner-slider');
                if ($el?.length) $el.trigger('destroy.owl.carousel');
            } catch { }
        };
    }, [pathname]);

    return (
        <div className="banner-area banner-area-2">
            <div className="banner-slider owl-carousel">
                {/* slide 1 */}
                <div className="item" style={{ background: 'url(/assets/img/banner/2.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="banner-inner style-white">
                                    <h2 className="b-animate-2 title" dangerouslySetInnerHTML={{ __html: t1.replace(/\n/g, '<br/>') }} />
                                    <p className="b-animate-3 content" style={{ fontSize: 18 }}>
                                        {d1}
                                    </p>
                                    <div className="btn-wrap">
                                        <a className="btn btn-base b-animate-4" href="/service">Explore The Services</a>
                                        <a className="btn btn-white b-animate-4" href="/contact">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* slide 2 */}
                <div className="item" style={{ background: 'url(/assets/img/banner/3.png)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="banner-inner style-white">
                                    <h2 className="b-animate-2 title" dangerouslySetInnerHTML={{ __html: t2.replace(/\n/g, '<br/>') }} />
                                    <p className="b-animate-3 content" style={{ fontSize: 20 }}>
                                        {d2}
                                    </p>
                                    <div className="btn-wrap">
                                        <a className="btn btn-base b-animate-4" href="/service">Explore The Services</a>
                                        <a className="btn btn-white b-animate-4" href="/contact">Contact Us</a>
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
