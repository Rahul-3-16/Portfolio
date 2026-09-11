import { useState, useEffect, useRef } from "react";

import thumb1 from "@/imports/2026-09-09_00-24-53.jpg.jpeg";
import thumb2 from "@/imports/anime_2025_1.jpg.jpeg";
import thumb3 from "@/imports/jjk_rise_fall.jpg.jpeg";
import thumb4 from "@/imports/op_challenge.jpg-1.jpeg";
import thumb5 from "@/imports/ch_1133.jpg.jpeg";
import thumb6 from "@/imports/file_00000000133c71f8b60c17c598720d64-1.png";
import showreelVideo from "@/imports/video-2.mp4";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Designs", href: "#designs" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@OtakuTamil_OT",
  instagram: "https://www.instagram.com/fables.tamil?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  email: "mailto:s.rahulprofessionals@gmail.com",
};

const PROJECTS = [
  {
    id: 1,
    title: "Isquad",
    client: "Client Project",
    category: "REELS · SOCIAL MEDIA",
    desc: "Dynamic social content edit with sharp pacing and high-energy transitions built for engagement.",
    featured: true,
    video: `${import.meta.env.BASE_URL}clients/isquad.mp4`,
    thumb: "https://images.unsplash.com/photo-1536240478700-b869ad10e2ab?w=1200&h=700&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "TheMadChef – Sambar Chicken",
    client: "Client Project",
    category: "REELS · STORYTELLING",
    desc: "Food storytelling edit with warm colour grading, sensory sound design, and appetizing visual rhythm.",
    featured: false,
    video: `${import.meta.env.BASE_URL}clients/themadchef.mp4`,
    thumb: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Tringring",
    client: "Client Project",
    category: "REELS · SHORT-FORM",
    desc: "Fast-cut Reels-ready edit optimised for high retention, snappy pacing, and vertical viewing.",
    featured: false,
    video: `${import.meta.env.BASE_URL}clients/tringring.mp4`,
    thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Meiyazhagan Edit",
    client: "Client Project",
    category: "REELS · CLIENT WORK",
    desc: "Cinematic character-driven edit with emotional pacing, musical synchronisation, and precise colour treatment.",
    featured: false,
    video: `${import.meta.env.BASE_URL}clients/meiyazhagan.mp4`,
    thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop&auto=format",
  },
];

const DESIGNS = [
  { src: thumb1, alt: "YouTube thumbnail – Change your Instagram & YouTube", label: "THUMBNAIL", title: "Change! Thumbnail" },
  { src: thumb2, alt: "YouTube thumbnail – Anime 2025 edition", label: "THUMBNAIL", title: "Anime 2025" },
  { src: thumb3, alt: "JJK Rise and Fall thumbnail", label: "THUMBNAIL", title: "JJK – Rise & Fall" },
  { src: thumb4, alt: "One Piece challenge thumbnail", label: "THUMBNAIL", title: "OP Challenge" },
  { src: thumb5, alt: "One Piece Robin Chapter 1133 breakdown thumbnail", label: "THUMBNAIL", title: "Robin Ch.1133 Breakdown" },
  { src: thumb6, alt: "WLB Repair Services logo design", label: "LOGO", title: "WLB Repair Services" },
];

const SERVICES = [
  { icon: "▶", title: "Long-Form Editing", desc: "YouTube videos, storytelling, pacing, transitions, sound design and engaging visual structure.", tag: "YOUTUBE · LONG-FORM" },
  { icon: "⚡", title: "Shorts & Reels", desc: "Fast-paced short-form content designed to capture attention and maintain retention.", tag: "SHORTS · REELS" },
  { icon: "✦", title: "Creative Editing", desc: "Dynamic cuts, transitions, visual effects, captions, music and creative storytelling.", tag: "VFX · MOTION" },
  { icon: "◉", title: "Thumbnail & Graphic Design", desc: "Eye-catching thumbnails, posters, flyers and logos with strong visual hierarchy.", tag: "DESIGN · BRANDING" },
];

const TOOLS = [
  { name: "Adobe Premiere Pro", short: "Pr", color: "#9999FF" },
  { name: "CapCut", short: "CC", color: "#a855f7" },
  { name: "Adobe Photoshop", short: "Ps", color: "#31A8FF" },
  { name: "Canva", short: "Cv", color: "#c084fc" },
];

const STATS = [
  { value: "5+", label: "Years", sub: "Creating and editing content for own channels and pages" },
  { value: "4", label: "Client Projects", sub: "Isquad, TheMadChef, Tringring & Meiyazhagan" },
  { value: "3×", label: "Content Types", sub: "Long-form videos, Shorts & Reels" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-8 h-px" style={{ background: "var(--accent)" }} />
      <span className="text-xs font-semibold tracking-[0.25em] uppercase body-font" style={{ color: "var(--accent)" }}>
        {children}
      </span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(6,6,15,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="display-font text-xl tracking-widest" style={{ color: "var(--text-primary)", fontWeight: 900, letterSpacing: "0.12em" }}>
          RAHUL
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href}
              className="text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200 body-font"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-bright)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-white/10 pr-3">
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:border-[rgba(224,64,251,0.6)] border border-white/10 transition-all hover:bg-[rgba(224,64,251,0.12)] hover:shadow-[0_0_12px_rgba(224,64,251,0.35)]"
              title="YouTube (@OtakuTamil_OT)"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:border-[rgba(224,64,251,0.6)] border border-white/10 transition-all hover:bg-[rgba(224,64,251,0.12)] hover:shadow-[0_0_12px_rgba(224,64,251,0.35)]"
              title="Instagram (@fables.tamil)"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="w-8 h-8 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:border-[rgba(224,64,251,0.6)] border border-white/10 transition-all hover:bg-[rgba(224,64,251,0.12)] hover:shadow-[0_0_12px_rgba(224,64,251,0.35)]"
              title="Email (s.rahulprofessionals@gmail.com)"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ background: "rgba(224,64,251,0.08)", border: "1px solid rgba(224,64,251,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", animation: "pulse-dot 2s ease-in-out infinite" }} />
            <span className="text-xs font-semibold tracking-widest uppercase body-font" style={{ color: "#4ade80" }}>Available</span>
          </div>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--text-primary)" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-5" style={{ background: "rgba(6,6,15,0.97)" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase body-font"
              style={{ color: "var(--text-muted)" }}>{l.label}</a>
          ))}
          <div className="flex items-center gap-4 pt-3 border-t border-white/10">
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer"
              className="text-xs body-font text-white/80 hover:text-white flex items-center gap-1.5">
              <span>YouTube</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </a>
            <span className="text-white/20">·</span>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
              className="text-xs body-font text-white/80 hover:text-white flex items-center gap-1.5">
              <span>Instagram</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </a>
            <span className="text-white/20">·</span>
            <a href={SOCIAL_LINKS.email}
              className="text-xs body-font text-white/80 hover:text-white">
              Email
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden" style={{ paddingBottom: "10vh" }}>
      {/* Purple glow bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 55% at 65% 35%, rgba(200,0,255,0.15) 0%, transparent 65%), radial-gradient(ellipse 45% 50% at 15% 75%, rgba(224,64,251,0.08) 0%, transparent 60%)",
      }} />
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.035 }}>
        {[15, 30, 45, 60, 75, 90].map(p => (
          <div key={p} className="absolute top-0 bottom-0 w-px" style={{ left: `${p}%`, background: "white" }} />
        ))}
      </div>
      {/* Ghost text */}
      <div className="absolute top-1/3 right-8 md:right-16 display-font text-[22vw] font-black select-none pointer-events-none leading-none"
        style={{ color: "transparent", WebkitTextStroke: "1px rgba(224,64,251,0.07)", fontWeight: 900 }}>
        RK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <SectionLabel>Video Editor · Designer</SectionLabel>
            <h1 className="display-font leading-[0.9] mb-6 animate-fade-up"
              style={{ fontSize: "clamp(4rem, 12vw, 9rem)", fontWeight: 900, letterSpacing: "-0.01em" }}>
              <span style={{ color: "var(--text-primary)" }}>RAHUL</span><br />
              <span style={{
                color: "var(--accent-bright)",
                textShadow: "0 0 40px rgba(224,64,251,0.75), 0 0 80px rgba(224,64,251,0.3)",
              }}>VIDEO</span><br />
              <span style={{ color: "var(--text-primary)" }}>EDITOR</span>
            </h1>
            <p className="body-font text-base md:text-lg mb-10 animate-fade-up delay-200" style={{ color: "var(--text-muted)", maxWidth: "44ch", lineHeight: 1.7 }}>
              I turn raw footage into content people want to watch.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <a href="#work"
                className="px-7 py-3.5 display-font tracking-widest text-sm uppercase transition-all duration-300"
                style={{ background: "var(--accent)", color: "white", fontWeight: 700, letterSpacing: "0.12em", boxShadow: "0 0 30px rgba(200,0,255,0.5)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent-bright)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(224,64,251,0.75)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(200,0,255,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                WATCH MY WORK
              </a>
              <a href="#contact"
                className="px-7 py-3.5 display-font tracking-widest text-sm uppercase transition-all duration-300"
                style={{ background: "transparent", color: "var(--text-primary)", fontWeight: 700, letterSpacing: "0.12em", border: "1px solid var(--border)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-bright)"; (e.currentTarget as HTMLElement).style.color = "var(--accent-bright)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(224,64,251,0.2)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                LET'S WORK TOGETHER
              </a>
            </div>
            {/* Social */}
            <div className="flex gap-4 mt-10 animate-fade-up delay-400">
              {[
                {
                  label: "YouTube",
                  href: SOCIAL_LINKS.youtube,
                  isExternal: true,
                  path: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",
                },
                {
                  label: "Instagram",
                  href: SOCIAL_LINKS.instagram,
                  isExternal: true,
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
                {
                  label: "Email",
                  href: SOCIAL_LINKS.email,
                  isExternal: false,
                  path: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
                },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.isExternal ? "_blank" : undefined}
                  rel={s.isExternal ? "noopener noreferrer" : undefined}
                  title={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    border: "1px solid var(--border)",
                    background: "rgba(10, 10, 24, 0.6)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-bright)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(224,64,251,0.18)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(224,64,251,0.4)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(10, 10, 24, 0.6)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--text-muted)" }}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden md:flex justify-end animate-fade-in delay-300">
            <div className="relative" style={{ width: 340, height: 460 }}>
              <div className="absolute inset-0 rounded-sm overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=680&h=920&fit=crop&auto=format"
                  alt="Video editor at work" className="w-full h-full object-cover"
                  style={{ filter: "grayscale(20%) contrast(1.05) saturate(0.9)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,6,15,0.8) 0%, transparent 60%)" }} />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-sm pointer-events-none"
                style={{ border: "1px solid rgba(224,64,251,0.4)", boxShadow: "0 0 30px rgba(224,64,251,0.15)" }} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
          <span className="text-xs tracking-widest uppercase body-font" style={{ color: "var(--text-dim)" }}>Scroll</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, var(--accent-bright), transparent)" }} />
        </div>
      </div>
    </section>
  );
}

function Showreel() {
  const { ref, inView } = useInView();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Handled browser autoplay or quick hover leave
          });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      videoRef.current.requestFullscreen?.();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  return (
    <section id="showreel" ref={ref} className="py-24 md:py-36"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Showreel</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="display-font leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 900, color: "var(--text-primary)" }}>
              WATCH<br />
              <span style={{ color: "var(--accent-bright)", textShadow: "0 0 40px rgba(224,64,251,0.65)" }}>THE EDIT</span>
            </h2>
            <p className="body-font max-w-xs" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
              A quick look at my editing style, pacing, transitions, storytelling and visual approach.
            </p>
          </div>
          <div
            className="relative w-full overflow-hidden cursor-pointer group rounded-xl"
            style={{
              aspectRatio: "16/9",
              background: "#0a0a18",
              border: `1px solid ${isPlaying ? "rgba(224,64,251,0.5)" : "var(--border)"}`,
              boxShadow: isPlaying ? "0 0 50px rgba(224,64,251,0.2)" : "none",
              transition: "border-color 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src={showreelVideo}
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isPlaying ? "scale-[1.01] brightness-100" : "scale-100 brightness-75"
              }`}
            />

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                isPlaying ? "opacity-30" : "opacity-70"
              }`}
              style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(6,6,15,0.75) 100%)" }}
            />

            {/* Play Button & Hover Prompt (fades out during hover/play) */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 pointer-events-none ${
                isPlaying ? "opacity-0 scale-90" : "opacity-100 scale-100"
              }`}
            >
              <div
                className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 60px rgba(224,64,251,0.75), 0 0 120px rgba(200,0,255,0.4)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <span
                className="mt-4 display-font text-xs tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(10, 10, 24, 0.8)",
                  color: "white",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Hover to Play
              </span>
            </div>

            {/* Top Bar Badges */}
            <div className="absolute top-6 left-6 flex items-center gap-2 pointer-events-none">
              <span
                className="display-font text-xs tracking-widest uppercase px-3 py-1.5"
                style={{ background: "var(--accent)", color: "white", fontWeight: 700 }}
              >
                SHOWREEL 2024
              </span>
              {isPlaying && (
                <span
                  className="flex items-center gap-1.5 px-3 py-1 text-[11px] tracking-wider uppercase display-font font-bold rounded-full"
                  style={{
                    background: "rgba(10, 10, 24, 0.8)",
                    border: "1px solid rgba(224,64,251,0.4)",
                    color: "var(--accent-bright)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: "var(--accent-bright)", boxShadow: "0 0 8px var(--accent-bright)" }}
                  />
                  Playing
                </span>
              )}
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
              {/* Audio Toggle */}
              <button
                type="button"
                onClick={toggleMute}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs tracking-wider transition-all duration-200 cursor-pointer hover:border-fuchsia-400"
                style={{
                  background: "rgba(10, 10, 24, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(8px)",
                }}
                title={isMuted ? "Unmute audio" : "Mute audio"}
              >
                {isMuted ? (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                    <span className="body-font text-[11px] tracking-widest font-semibold uppercase">UNMUTE</span>
                  </>
                ) : (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--accent-bright)" }}>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                    <span className="body-font text-[11px] tracking-widest font-semibold uppercase" style={{ color: "var(--accent-bright)" }}>SOUND ON</span>
                  </>
                )}
              </button>

              {/* Fullscreen Button */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-2 rounded-full text-white transition-all duration-200 cursor-pointer hover:scale-105"
                style={{
                  background: "rgba(10, 10, 24, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(8px)",
                }}
                title="Fullscreen"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              </button>
            </div>

            {/* Bottom Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
              <div
                className="h-full transition-all duration-100"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, var(--accent), var(--accent-bright))",
                  boxShadow: "0 0 10px var(--accent-bright)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReelModal({
  project,
  onClose,
}: {
  project: typeof PROJECTS[0];
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full flex flex-col md:flex-row bg-[#0b0b1a] border border-[rgba(224,64,251,0.35)] rounded-2xl overflow-hidden shadow-2xl max-h-[90vh]"
        style={{ boxShadow: "0 0 80px rgba(224,64,251,0.3)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Left / Center Video Player (9:16 vertical reel) */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[380px] md:min-h-[580px]">
          <video
            ref={videoRef}
            src={project.video}
            autoPlay
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full max-h-[75vh] object-contain cursor-pointer"
            onClick={togglePlay}
          />

          {/* Center Play indicator if paused */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
              onClick={togglePlay}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full"
                style={{ background: "var(--accent)", boxShadow: "0 0 40px rgba(224,64,251,0.8)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
          )}

          {/* Video bottom scrubber */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
            <div
              className="h-full"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, var(--accent), var(--accent-bright))",
                boxShadow: "0 0 10px var(--accent-bright)",
              }}
            />
          </div>
        </div>

        {/* Right Info Panel */}
        <div className="w-full md:w-80 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-[#0d0d1e]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span
                className="display-font text-xs tracking-widest uppercase px-2.5 py-1 rounded font-bold"
                style={{ background: "var(--accent)", color: "white" }}
              >
                {project.category}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-1 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                title="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <p className="body-font text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              {project.client}
            </p>
            <h3 className="display-font text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="body-font text-sm text-white/70 leading-relaxed mb-6">
              {project.desc}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase display-font transition-all duration-200 cursor-pointer"
                style={{ background: "var(--accent)", color: "white" }}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white/80 hover:text-white border border-white/15 bg-white/5 transition-colors cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? "🔇 Muted" : "🔊 Sound On"}
              </button>
            </div>
            <span className="text-[11px] text-center text-white/40 body-font">
              Press Esc or click outside to exit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onSelect,
}: {
  project: typeof PROJECTS[0];
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      const p = videoRef.current.play();
      if (p !== undefined) {
        p.then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const next = !videoRef.current.muted;
    videoRef.current.muted = next;
    setIsMuted(next);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  return (
    <div
      className="relative overflow-hidden cursor-pointer rounded-2xl group flex flex-col justify-between"
      style={{
        aspectRatio: "9/16",
        background: "var(--card)",
        border: `1px solid ${hovered ? "rgba(224,64,251,0.65)" : "var(--border)"}`,
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 16px 50px rgba(224,64,251,0.3), 0 0 0 1px rgba(224,64,251,0.25)"
          : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
    >
      {/* Video element - plays on hover */}
      <video
        ref={videoRef}
        src={project.video}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
          hovered ? "scale-105" : "scale-100"
        }`}
      />

      {/* Ambient gradient overlays */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(6,6,15,0.95) 0%, rgba(6,6,15,0.35) 40%, rgba(6,6,15,0.2) 70%, rgba(6,6,15,0.7) 100%)",
          opacity: hovered ? 0.75 : 0.88,
        }}
      />

      {/* Top Header inside card */}
      <div className="relative z-10 p-4 flex items-center justify-between w-full">
        <span
          className="display-font text-[10px] tracking-widest uppercase px-2.5 py-1 rounded font-bold"
          style={{
            background: "var(--accent)",
            color: "white",
            boxShadow: "0 0 15px rgba(224,64,251,0.5)",
          }}
        >
          {project.category}
        </span>

        {/* Audio Mute/Unmute button */}
        <button
          type="button"
          onClick={toggleMute}
          className="p-2 rounded-full transition-all duration-200 cursor-pointer hover:border-fuchsia-400"
          style={{
            background: "rgba(10, 10, 24, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(6px)",
            color: isMuted ? "rgba(255,255,255,0.7)" : "var(--accent-bright)",
          }}
          title={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      </div>

      {/* Center Play hint (visible when not playing) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 pointer-events-none ${
          isPlaying ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <div
          className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
          style={{
            width: 52,
            height: 52,
            background: "var(--accent)",
            boxShadow: "0 0 30px rgba(224,64,251,0.75)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
        <span
          className="mt-3 text-[10px] tracking-widest uppercase display-font px-2.5 py-1 rounded-full text-white/80"
          style={{
            background: "rgba(10, 10, 24, 0.75)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(6px)",
          }}
        >
          Hover to Play
        </span>
      </div>

      {/* Bottom Content Info */}
      <div className="relative z-10 p-5 w-full flex flex-col justify-end">
        <p className="body-font text-[11px] tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
          {project.client}
        </p>
        <h3 className="display-font font-black text-white text-lg leading-tight mb-2">
          {project.title}
        </h3>
        <p
          className="body-font text-xs leading-relaxed transition-all duration-300"
          style={{
            color: "rgba(255,255,255,0.65)",
            maxHeight: hovered ? "4.5em" : "2.8em",
            overflow: "hidden",
          }}
        >
          {project.desc}
        </p>

        {/* Watch project CTA */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10">
          <span
            className="display-font text-[11px] font-bold tracking-widest uppercase"
            style={{ color: "var(--accent-bright)" }}
          >
            WATCH REEL
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            style={{ color: "var(--accent-bright)" }}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15 overflow-hidden z-20">
        <div
          className="h-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, var(--accent), var(--accent-bright))",
            boxShadow: "0 0 8px var(--accent-bright)",
          }}
        />
      </div>
    </div>
  );
}

function Work() {
  const { ref, inView } = useInView();
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="work" ref={ref} className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Selected Work</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="display-font leading-none mb-4"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, color: "var(--text-primary)" }}>
                FOUR CLIENT<br /><span style={{ color: "var(--accent-bright)", textShadow: "0 0 30px rgba(224,64,251,0.55)" }}>PROJECTS</span>
              </h2>
              <p className="body-font" style={{ color: "var(--text-muted)", maxWidth: "50ch", lineHeight: 1.7 }}>
                Short-form &amp; social media edits engineered for retention, high energy, and engagement.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="display-font text-xs tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70">
                ✨ Hover to Preview Reels
              </span>
            </div>
          </div>

          {/* 4-Reel Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map(p => (
              <ProjectCard key={p.id} project={p} onSelect={() => setSelectedProject(p)} />
            ))}
          </div>
        </div>
      </div>

      {/* Reel Cinema Modal */}
      {selectedProject && (
        <ReelModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function Designs() {
  const { ref, inView } = useInView();
  const [filter, setFilter] = useState<"ALL" | "THUMBNAIL" | "LOGO">("ALL");
  const [activeModal, setActiveModal] = useState<typeof DESIGNS[0] | null>(null);

  const filteredDesigns = filter === "ALL"
    ? DESIGNS
    : DESIGNS.filter(d => d.label === filter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="designs" ref={ref} className="py-24 md:py-36"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Designs</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="display-font leading-none mb-4"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, color: "var(--text-primary)" }}>
                THUMBNAILS<br />
                <span style={{ color: "var(--accent-bright)", textShadow: "0 0 30px rgba(224,64,251,0.55)" }}>&amp; GRAPHICS</span>
              </h2>
              <p className="body-font" style={{ color: "var(--text-muted)", maxWidth: "50ch", lineHeight: 1.7 }}>
                Thumbnails, logos, flyers and posters — designed to stop the scroll.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl self-start md:self-auto"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)" }}>
              {[
                { label: "All Work", value: "ALL", count: DESIGNS.length },
                { label: "Thumbnails", value: "THUMBNAIL", count: DESIGNS.filter(d => d.label === "THUMBNAIL").length },
                { label: "Logos", value: "LOGO", count: DESIGNS.filter(d => d.label === "LOGO").length },
              ].map(tab => {
                const isActive = filter === tab.value;
                return (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setFilter(tab.value as any)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase display-font transition-all duration-200 cursor-pointer flex items-center gap-1.5"
                    style={{
                      background: isActive ? "var(--accent)" : "transparent",
                      color: isActive ? "white" : "var(--text-muted)",
                      boxShadow: isActive ? "0 0 20px rgba(224,64,251,0.4)" : "none",
                    }}
                  >
                    <span>{tab.label}</span>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded-full"
                      style={{
                        background: isActive ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.06)",
                        color: isActive ? "white" : "var(--text-dim)",
                      }}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Symmetrical 3-Column Grid without empty space */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDesigns.map((design, i) => (
              <DesignCard
                key={design.title + i}
                design={design}
                onClick={() => setActiveModal(design)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col bg-[#0b0b1a] border border-[rgba(224,64,251,0.35)] rounded-2xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 0 70px rgba(224,64,251,0.3)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080814]">
              <div className="flex items-center gap-3">
                <span
                  className="display-font text-xs tracking-widest uppercase px-2.5 py-1 rounded"
                  style={{ background: "rgba(124,58,237,0.85)", color: "white", fontWeight: 700 }}
                >
                  {activeModal.label}
                </span>
                <h3 className="display-font text-sm md:text-base font-bold text-white tracking-wide">
                  {activeModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                title="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Image */}
            <div className="w-full flex items-center justify-center p-4 md:p-6 bg-black/40">
              <img
                src={activeModal.src}
                alt={activeModal.alt}
                className="max-w-full max-h-[70vh] object-contain rounded-xl border border-white/10 shadow-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-white/10 bg-[#080814] flex items-center justify-between text-xs text-white/60 body-font">
              <span>{activeModal.alt}</span>
              <span className="text-[11px] uppercase tracking-wider text-white/40">Click outside or press Esc to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function DesignCard({
  design,
  onClick,
}: {
  design: typeof DESIGNS[0];
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden cursor-pointer rounded-xl group"
      style={{
        aspectRatio: "16/9",
        background: "var(--card)",
        border: `1px solid ${hovered ? "rgba(224,64,251,0.6)" : "var(--border)"}`,
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 40px rgba(224,64,251,0.22), 0 0 0 1px rgba(224,64,251,0.2)"
          : "none",
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={design.src}
        alt={design.alt}
        className={`w-full h-full ${design.label === "LOGO" ? "object-contain p-4" : "object-cover"} transition-transform duration-500`}
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(6,6,15,0.92) 0%, rgba(6,6,15,0.25) 50%, transparent 100%)",
          opacity: hovered ? 1 : 0.45,
        }}
      />

      {/* Category badge */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span
          className="display-font text-[11px] tracking-widest uppercase px-2.5 py-1 rounded"
          style={{
            background: "rgba(124,58,237,0.85)",
            color: "white",
            fontWeight: 700,
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(224,64,251,0.4)",
          }}
        >
          {design.label}
        </span>
      </div>

      {/* Expand icon on hover */}
      <div
        className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 pointer-events-none"
        style={{
          background: "rgba(10, 10, 24, 0.8)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "white",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.8)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      </div>

      {/* Title & Click hint on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300 pointer-events-none"
        style={{
          transform: hovered ? "translateY(0)" : "translateY(8px)",
          opacity: hovered ? 1 : 0,
        }}
      >
        <p className="display-font font-bold text-white text-base leading-snug">
          {design.title}
        </p>
        <span className="text-xs body-font text-fuchsia-300/80 mt-1 block">
          Click to expand preview ↗
        </span>
      </div>
    </div>
  );
}

function About() {
  const { ref, inView } = useInView();
  return (
    <section id="about" ref={ref} className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <SectionLabel>About</SectionLabel>
              <h2 className="display-font mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900, color: "var(--text-primary)", lineHeight: 0.95 }}>
                CONTENT NERD.<br />
                <span style={{ color: "var(--accent-bright)", textShadow: "0 0 30px rgba(224,64,251,0.55)" }}>STORYTELLER.</span>
              </h2>
              <p className="body-font text-base mb-4" style={{ color: "var(--text-muted)", lineHeight: 1.85, maxWidth: "50ch" }}>
                Video editor &amp; designer with <strong style={{ color: "var(--text-primary)" }}>5+ years</strong> of creating content for my own channels and pages. I make{" "}
                <strong style={{ color: "var(--text-primary)" }}>long-form videos</strong>,{" "}
                <strong style={{ color: "var(--text-primary)" }}>Shorts</strong> &amp;{" "}
                <strong style={{ color: "var(--text-primary)" }}>Reels</strong>, and design{" "}
                <strong style={{ color: "var(--text-primary)" }}>thumbnails, posters, flyers, and logos</strong> with sharp pacing, clean visuals, and good vibes.
              </p>
              <p className="body-font text-sm mb-8" style={{ color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                Premiere Pro &nbsp;·&nbsp; CapCut &nbsp;·&nbsp; Photoshop &nbsp;·&nbsp; Canva
              </p>
              <div className="flex flex-wrap gap-2">
                {["Video Editing", "Long-Form", "Shorts", "Reels", "Thumbnails", "Logos", "Flyers", "Storytelling", "Sharp Pacing"].map(t => (
                  <span key={t} className="body-font text-xs tracking-widest uppercase px-3 py-1.5"
                    style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {STATS.map((s, i) => (
                <div key={i} className="flex gap-6 items-start"
                  style={{ paddingBottom: "2rem", borderBottom: i < STATS.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div className="display-font font-black leading-none"
                    style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: "var(--accent-bright)", fontWeight: 900, textShadow: "0 0 30px rgba(224,64,251,0.55)", minWidth: "3rem" }}>
                    {s.value}
                  </div>
                  <div>
                    <div className="display-font font-800 mb-1 uppercase tracking-widest text-sm"
                      style={{ color: "var(--text-primary)", fontWeight: 800 }}>{s.label}</div>
                    <div className="body-font text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { ref, inView } = useInView();
  return (
    <section id="services" ref={ref} className="py-24 md:py-36"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Services</SectionLabel>
          <h2 className="display-font mb-16" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, color: "var(--text-primary)", lineHeight: 0.95 }}>
            WHAT<br /><span style={{ color: "var(--accent-bright)", textShadow: "0 0 30px rgba(224,64,251,0.55)" }}>I DO</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
            {SERVICES.map((s, i) => <ServiceCard key={i} service={s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="p-8 md:p-10 transition-all duration-300 cursor-default"
      style={{ background: hovered ? "rgba(200,0,255,0.06)" : "var(--bg)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="display-font text-3xl mb-6 transition-all duration-300"
        style={{ transform: hovered ? "scale(1.1)" : "scale(1)", color: "var(--accent-bright)", textShadow: hovered ? "0 0 20px rgba(224,64,251,0.75)" : "none" }}>
        {service.icon}
      </div>
      <div className="body-font text-xs tracking-widest uppercase mb-3" style={{ color: "var(--text-dim)" }}>{service.tag}</div>
      <h3 className="display-font font-800 mb-4 uppercase" style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-primary)" }}>{service.title}</h3>
      <p className="body-font text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>{service.desc}</p>
      <div className="mt-6 h-px transition-all duration-500"
        style={{ background: "var(--accent-bright)", transform: `scaleX(${hovered ? 1 : 0})`, transformOrigin: "left", boxShadow: hovered ? "0 0 12px rgba(224,64,251,0.75)" : "none" }} />
    </div>
  );
}

function Tools() {
  const { ref, inView } = useInView();
  return (
    <section id="tools" ref={ref} className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Tools</SectionLabel>
          <h2 className="display-font mb-12" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, color: "var(--text-primary)", lineHeight: 0.95 }}>
            I WORK WITH
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TOOLS.map((t) => <ToolCard key={t.name} tool={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: typeof TOOLS[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="p-6 transition-all duration-300 cursor-default"
      style={{
        border: `1px solid ${hovered ? "rgba(224,64,251,0.45)" : "var(--border)"}`,
        background: hovered ? "rgba(200,0,255,0.08)" : "transparent",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 0 30px rgba(224,64,251,0.15)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="display-font font-black text-2xl mb-4 flex items-center justify-center"
        style={{ width: 48, height: 48, background: tool.color + "22", color: tool.color, fontWeight: 900, borderRadius: 4 }}>
        {tool.short}
      </div>
      <div className="body-font text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{tool.name}</div>
    </div>
  );
}

function Contact() {
  const { ref, inView } = useInView();
  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,0,255,0.1) 0%, transparent 70%)" }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="display-font mb-6"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)", fontWeight: 900, color: "var(--text-primary)", lineHeight: 0.9 }}>
            HAVE A<br />
            <span style={{ color: "var(--accent-bright)", textShadow: "0 0 60px rgba(224,64,251,0.75)" }}>VIDEO IN</span><br />
            MIND?
          </h2>
          <p className="body-font text-lg mb-12" style={{ color: "var(--text-muted)", maxWidth: "40ch", margin: "0 auto 3rem" }}>
            Let's turn your footage into something people actually want to watch.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: "CONTACT ME", href: SOCIAL_LINKS.email, primary: true, external: false },
              { label: "YOUTUBE", href: SOCIAL_LINKS.youtube, primary: false, external: true },
              { label: "INSTAGRAM", href: SOCIAL_LINKS.instagram, primary: false, external: true },
              { label: "EMAIL", href: SOCIAL_LINKS.email, primary: false, external: false },
            ].map(b => (
              <a
                key={b.label}
                href={b.href}
                target={b.external ? "_blank" : undefined}
                rel={b.external ? "noopener noreferrer" : undefined}
                className="px-8 py-4 display-font tracking-widest text-sm uppercase transition-all duration-300 flex items-center gap-2"
                style={{
                  background: b.primary ? "var(--accent)" : "transparent",
                  color: b.primary ? "white" : "var(--text-primary)",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  border: b.primary ? "1px solid var(--accent)" : "1px solid var(--border)",
                  boxShadow: b.primary ? "0 0 30px rgba(200,0,255,0.4)" : "none",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  if (b.primary) { el.style.background = "var(--accent-bright)"; el.style.boxShadow = "0 0 50px rgba(224,64,251,0.65)"; }
                  else { el.style.borderColor = "var(--accent-bright)"; el.style.color = "var(--accent-bright)"; el.style.boxShadow = "0 0 20px rgba(224,64,251,0.2)"; }
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  if (b.primary) { el.style.background = "var(--accent)"; el.style.boxShadow = "0 0 30px rgba(200,0,255,0.4)"; }
                  else { el.style.borderColor = "var(--border)"; el.style.color = "var(--text-primary)"; el.style.boxShadow = "none"; }
                  el.style.transform = "translateY(0)";
                }}>
                <span>{b.label}</span>
                {b.external && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="display-font text-lg tracking-widest uppercase mb-1"
            style={{ fontWeight: 900, color: "var(--text-primary)" }}>RAHUL — VIDEO EDITOR</div>
          <div className="body-font text-xs italic" style={{ color: "var(--text-muted)" }}>"Editing stories. Creating impact."</div>
        </div>
        <div className="flex gap-6">
          {[
            { label: "YouTube", href: SOCIAL_LINKS.youtube, external: true },
            { label: "Instagram", href: SOCIAL_LINKS.instagram, external: true },
            { label: "Email", href: SOCIAL_LINKS.email, external: false },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noopener noreferrer" : undefined}
              className="body-font text-xs tracking-widest uppercase transition-colors duration-200 flex items-center gap-1.5"
              style={{ color: "var(--text-dim)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-bright)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-dim)")}
            >
              <span>{s.label}</span>
              {s.external && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              )}
            </a>
          ))}
        </div>
        <div className="body-font text-xs" style={{ color: "var(--text-dim)" }}>
          © {new Date().getFullYear()} Rahul. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Showreel />
      <Work />
      <Designs />
      <About />
      <Services />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}
