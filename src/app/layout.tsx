// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Expeditors Global",
  description: "Expeditors Global landing page",
  icons: {
    icon: "/assets/img/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zxx" className="fontawesome-i2svg-active fontawesome-i2svg-complete">
      <head>
        {/* CSS trong public/assets */}
        <link rel="stylesheet" href="/assets/vendor.css" />
        <link rel="stylesheet" href="/assets/style.css" />
        <link rel="stylesheet" href="/assets/responsive.css" />
        <link rel="stylesheet" href="/assets/aos.css" />

        <style>{`
          body { width: 100%; overflow-x: hidden; overflow-y: hidden; }
          .navbar-nav.menu-open li a { font-size: larger; }
          .single-fact-wrap { border-radius: 10px !important; overflow: hidden; }
        `}</style>
      </head>
      <body /* data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0" */>
        {children}

        {/* JS trong public/assets */}
        <Script src="/assets/vendor.js" strategy="afterInteractive" />
        <Script src="/assets/main.js" strategy="afterInteractive" />
        <Script src="/assets/aos.js" strategy="afterInteractive" />
        <Script id="aos-init" strategy="afterInteractive">{`window.AOS && AOS.init();`}</Script>
      </body>
    </html>
  );
}
