import React, { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#galeri", label: "Galeri Proyek" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[72px]">
        <a href="#beranda" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#0284C7] to-[#0369A1] grid place-items-center text-white shadow-[0_4px_12px_rgba(2,132,199,0.35)] group-hover:scale-105 transition-transform">
            <Zap size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[17px] font-extrabold tracking-tight text-[#0F172A]">SOLUSI KELISTRIKAN PRO</span>
            <span className="text-[10px] font-mono tracking-[0.18em] text-[#64748B] uppercase">Engineering & Electrical Services</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-semibold tracking-wide text-[#475569] hover:text-[#0F172A] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontak"
          className="hidden lg:inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-[13px] tracking-wide px-5 py-3 rounded-md transition-colors shadow-[0_4px_14px_rgba(245,158,11,0.3)]"
        >
          Hubungi Teknisi
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-[#0F172A] p-2"
          aria-label="Buka menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-6 py-6 flex flex-col gap-4 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-semibold text-[#475569] hover:text-[#0F172A] py-2 border-b border-[#F1F5F9]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center bg-[#F59E0B] text-white font-bold px-5 py-3 rounded-md"
          >
            Hubungi Teknisi
          </a>
        </div>
      )}
    </header>
  );
}