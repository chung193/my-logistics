"use client";
import { useEffect, useState, useRef, type KeyboardEvent, type TouchEvent } from 'react';

// app/page.tsx — homepage with working mobile menu (Next.js App Router + Tailwind)
// Paste into a Next.js 14 project with Tailwind enabled.


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <Hero />
      <TrustedBar />
      <Services />
      <Stats />
      <Industries />
      <CTA />
      <SiteFooter />
    </main>
  );
}

function SiteHeader() {
  const nav = [
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#technology", label: "Technology" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const [open, setOpen] = useState(false);

  // Close menu on md+ resize or route hash change
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-blue-700" aria-hidden />
          <span className="font-bold tracking-tight">Global Logistics</span>
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((i) => (
            <a key={i.href} className="hover:text-blue-700" href={i.href}>{i.label}</a>
          ))}
          <a className="ml-2 px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800" href="#contact">Get in touch</a>
        </nav>
        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-slate-100"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Overlay (click to close) */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 py-3 flex flex-col gap-3">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="py-2 text-slate-800 hover:text-blue-700" onClick={() => setOpen(false)}>
              {i.label}
            </a>
          ))}
          <a href="#contact" className="mt-1 px-4 py-3 rounded-md bg-blue-700 text-white text-center font-medium hover:bg-blue-800">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  // Accessible, auto-rotating hero slideshow (no extra deps)
  const slides = [
    {
      id: 1,
      title: 'Smarter global logistics, delivered with care',
      desc: 'Air & ocean freight, customs brokerage, and end‑to‑end supply chain visibility.',
      cta1: { href: '#services', label: 'Explore services' },
      cta2: { href: '#contact', label: 'Talk to an expert' },
      // Visual theme per slide (replace with real images if you wish)
      bg: 'from-blue-900 via-blue-800 to-blue-700',
    },
    {
      id: 2,
      title: 'Global network. Local expertise.',
      desc: '300+ locations, proactive exception management, and customer‑first operations.',
      cta1: { href: '#industries', label: 'See industries' },
      cta2: { href: '#contact', label: 'Request a consult' },
      bg: 'from-indigo-900 via-sky-800 to-cyan-700',
    },
    {
      id: 3,
      title: 'Compliance‑first customs & trade',
      desc: 'Clearance across major markets with robust policies and audit readiness.',
      cta1: { href: '#services', label: 'Customs services' },
      cta2: { href: '#contact', label: 'Speak to a specialist' },
      bg: 'from-slate-900 via-blue-900 to-blue-700',
    },
  ];

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const autoMs = 5000;

  // Auto-advance
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), autoMs);
    return () => clearInterval(id);
  }, [playing, slides.length]);

  // Respect prefers-reduced-motion
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (m.matches) setPlaying(false);
  }, []);

  // Keyboard nav
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % slides.length);
    if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  // Touch swipe (simple)
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const onTouchStart = (e: TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
    setPlaying(false);
  };
  const onTouchMove = (e: TouchEvent) => {
    if (startX.current !== null) {
      deltaX.current = e.touches[0].clientX - startX.current;
    }
  };
  const onTouchEnd = () => {
    const threshold = 50;
    if (Math.abs(deltaX.current) > threshold) {
      setIndex((i) => (i + (deltaX.current < 0 ? 1 : -1) + slides.length) % slides.length);
    }
    setPlaying(true);
    startX.current = null;
    deltaX.current = 0;
  };

  return (
    <section className="relative">
      <div className="container mx-auto max-w-7xl px-0 md:px-4 py-0 md:py-4">
        {/* Slider frame */}
        <div
          className="relative overflow-hidden rounded-none md:rounded-2xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Hero slideshow"
          onKeyDown={onKeyDown}
        >
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-out select-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
            onMouseEnter={() => setPlaying(false)}
            onMouseLeave={() => setPlaying(true)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {slides.map((s, i) => (
              <article
                key={s.id}
                className="w-full shrink-0"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
              >
                {/* Background */}
                <div className={`relative min-h-[60vh] md:min-h-[68vh] bg-gradient-to-b ${s.bg}`}>
                  {/* Decorative blobs */}
                  <div className="absolute -right-40 -top-32 w-[540px] h-[540px] rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute -left-40 -bottom-24 w-[480px] h-[480px] rounded-full bg-cyan-300/20 blur-3xl" />

                  {/* Content */}
                  <div className="relative z-10 text-white px-4 md:px-8">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-12 py-16 md:py-24">
                      <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight" aria-live="polite">
                          {s.title}
                        </h1>
                        <p className="mt-5 text-lg text-white/90">{s.desc}</p>
                        <div className="mt-8 flex gap-3">
                          <a href={s.cta1.href} className="px-5 py-3 rounded-lg bg-white text-blue-900 font-medium hover:bg-slate-100">{s.cta1.label}</a>
                          <a href={s.cta2.href} className="px-5 py-3 rounded-lg ring-1 ring-white/60 text-white hover:bg-white/10">{s.cta2.label}</a>
                        </div>
                      </div>
                      {/* Placeholder visual per slide */}
                      <div className="relative">
                        <div className="aspect-[16/10] rounded-2xl bg-white/5 ring-1 ring-white/20 shadow-2xl overflow-hidden">
                          <div className="w-full h-full grid grid-cols-6 gap-2 p-4">
                            {Array.from({ length: 18 }).map((_, k) => (
                              <div key={k} className="h-8 rounded bg-white/20" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-black/30 text-white hover:bg-black/40 focus:outline-none"
            aria-label="Previous slide"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full bg-black/30 text-white hover:bg-black/40 focus:outline-none"
            aria-label="Next slide"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          {/* Dots & Play/Pause */}
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
            <button
              onClick={() => setPlaying((p) => !p)}
              className="mr-2 px-2 py-1 text-[11px] rounded bg-black/30 text-white hover:bg-black/40"
              aria-label={playing ? 'Pause autoplay' : 'Play autoplay'}
            >{playing ? 'Pause' : 'Play'}</button>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'} hover:bg-white/80`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => { setIndex(i); setPlaying(false); }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 py-8 flex flex-wrap items-center justify-center gap-8 text-slate-500">
        {['Fortune 500', 'S&P 500', 'Global network', 'Customs expertise', '24/7 support'].map((t, i) => (
          <div key={i} className="text-sm flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-700" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { title: 'Air Freight', desc: 'Time‑definite air solutions with visibility and control.', icon: AirIcon },
    { title: 'Ocean Freight', desc: 'FCL/LCL options and carrier management at scale.', icon: ShipIcon },
    { title: 'Customs Brokerage', desc: 'Compliance-first clearance across major markets.', icon: ShieldIcon },
    { title: 'Order Management', desc: 'PO to final mile with proactive exceptions.', icon: BoxesIcon },
    { title: 'Transcon & Trucking', desc: 'Domestic distribution and intermodal options.', icon: TruckIcon },
    { title: 'Trade Compliance', desc: 'Policy, duty mitigation, and audit readiness.', icon: ScaleIcon },
  ];
  return (
    <section id="services" className="container mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Core services</h2>
        <p className="text-slate-600 mt-2">A complete menu built for complex global supply chains.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <i.icon className="w-10 h-10 text-blue-700" />
              <div>
                <h3 className="font-semibold text-lg">{i.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{i.desc}</p>
              </div>
            </div>
            <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-blue-700 hover:opacity-90 text-sm">Learn more
              <svg viewBox="0 0 24 24" className="w-4 h-4"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const data = [
    { kpi: '350+', label: 'Locations' },
    { kpi: '100+', label: 'Countries' },
    { kpi: '17k+', label: 'Employees' },
    { kpi: '24/7', label: 'Customer support' },
  ];
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">A global network built for reliability</h2>
          <p className="text-slate-600 mt-3">Visibility, compliance, and on‑time performance supported by our own technology stack and experienced local teams.</p>
          <ul className="mt-5 space-y-2 text-slate-700 text-sm">
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-blue-700" /> Exception management and alerts</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-blue-700" /> Multi‑modal solutions with single point of contact</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5 text-blue-700" /> Compliance-first customs brokerage</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.map((d) => (
            <div key={d.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="text-4xl font-extrabold text-blue-700">{d.kpi}</div>
              <div className="mt-2 text-sm text-slate-600">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const items = [
    'Retail & Fashion', 'Automotive', 'Technology', 'Aerospace', 'Healthcare', 'Industrial'
  ];
  return (
    <section id="industries" className="container mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Industries we serve</h2>
        <p className="text-slate-600 mt-2">Tailored solutions for sector‑specific challenges and compliance needs.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t) => (
          <div key={t} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="h-36 bg-gradient-to-br from-blue-50 to-slate-50" />
            <div className="p-5">
              <h3 className="font-semibold">{t}</h3>
              <p className="text-sm text-slate-600 mt-1">Solution briefs, case studies, and compliance resources.</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-blue-700 hover:opacity-90 text-sm mt-3">Explore
                <svg viewBox="0 0 24 24" className="w-4 h-4"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />
      <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tell us about your supply chain</h2>
        <p className="text-slate-600 mt-3">Get a no‑obligation consult with a logistics specialist within 1 business day.</p>
        <form className="mx-auto mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-3xl" onSubmit={(e) => e.preventDefault()}>
          <input required placeholder="Full name" className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input required type="email" placeholder="Work email" className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input placeholder="Company" className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input placeholder="Phone (optional)" className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <textarea placeholder="What do you ship / lanes / volumes?" className="sm:col-span-2 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" rows={4} />
          <button className="sm:col-span-2 mt-2 px-5 py-3 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800" type="submit">Request consultation</button>
        </form>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto max-w-7xl px-4 py-10 text-sm text-slate-600 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-blue-700" aria-hidden />
            <span className="font-semibold">Global Logistics</span>
          </div>
          <p className="mt-3">© {new Date().getFullYear()} Global Logistics. All rights reserved.</p>
        </div>
        <div className="md:col-span-2 grid sm:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="#about" className="hover:text-blue-700">About</a></li>
              <li><a href="#careers" className="hover:text-blue-700">Careers</a></li>
              <li><a href="#news" className="hover:text-blue-700">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Resources</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="#blog" className="hover:text-blue-700">Blog</a></li>
              <li><a href="#docs" className="hover:text-blue-700">Documentation</a></li>
              <li><a href="#support" className="hover:text-blue-700">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Legal</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="#privacy" className="hover:text-blue-700">Privacy</a></li>
              <li><a href="#terms" className="hover:text-blue-700">Terms</a></li>
              <li><a href="#cookies" className="hover:text-blue-700">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Minimal inline icons (no dependencies) ---
function AirIcon(props: any) { return (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M2 12h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M7 7l3 5-3 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>) }
function ShipIcon(props: any) { return (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M3 10l9-5 9 5v4a8 8 0 01-8 8 8 8 0 01-8-8v-4z" stroke="currentColor" strokeWidth="2" /></svg>) }
function ShieldIcon(props: any) { return (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="2" /></svg>) }
function BoxesIcon(props: any) { return (<svg viewBox="0 0 24 24" fill="none" {...props}><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" /></svg>) }
function TruckIcon(props: any) { return (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M3 7h11v7H3z" stroke="currentColor" strokeWidth="2" /><path d="M14 10h4l3 3v1h-7V10z" stroke="currentColor" strokeWidth="2" /><circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="2" /><circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="2" /></svg>) }
function ScaleIcon(props: any) { return (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M12 3v18M3 9h18" stroke="currentColor" strokeWidth="2" /><path d="M6 9l-3 5h6l-3-5zm12 0l-3 5h6l-3-5z" stroke="currentColor" strokeWidth="2" /></svg>) }
function CheckIcon(props: any) { return (<svg viewBox="0 0 24 24" fill="none" {...props}><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>) }
