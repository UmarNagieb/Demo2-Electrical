import React from "react";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#0284C7] to-[#0369A1] grid place-items-center text-white">
                <Zap size={20} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[16px] font-extrabold tracking-tight text-white">SOLUSI KELISTRIKAN PRO</span>
                <span className="text-[10px] font-mono tracking-[0.18em] text-[#94A3B8] uppercase">Engineering & Electrical Services</span>
              </div>
            </div>
            <p className="text-[13px] text-[#94A3B8] leading-relaxed max-w-[400px]">
              Mitra rekayasa kelistrikan profesional untuk residensial premium, gedung komersial, dan industri di wilayah Jabodetabek dan sekitarnya. Berstandar PUIL 2020 & sertifikasi K3.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#38BDF8] mb-4">LAYANAN</div>
            <ul className="flex flex-col gap-2.5 text-[13px] text-[#94A3B8]">
              <li><a href="#layanan" className="hover:text-white transition-colors">Instalasi Baru & Rewiring</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Perbaikan Darurat 24 Jam</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Audit Beban & Thermal Scan</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Grounding & Penangkal Petir</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#38BDF8] mb-4">KONTAK</div>
            <ul className="flex flex-col gap-3 text-[13px] text-[#94A3B8]">
              <li className="flex items-start gap-2.5"><Phone size={14} className="mt-0.5 text-[#F59E0B] shrink-0" /> +62 812-8800-9944</li>
              <li className="flex items-start gap-2.5"><Mail size={14} className="mt-0.5 text-[#F59E0B] shrink-0" /> proyek@solusikelistrikanpro.id</li>
              <li className="flex items-start gap-2.5"><MapPin size={14} className="mt-0.5 text-[#F59E0B] shrink-0" /> TB Simatupang No. 88, Jakarta Selatan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E293B] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[12px] font-mono text-[#64748B]">
          <div>© 2025 PT SOLUSI KELISTRIKAN PRO INDONESIA. SELURUH HAK CIPTA DILINDUNGI.</div>
          <div className="flex items-center gap-3 text-center">
            <span className="text-[#94A3B8]">SERTIFIKAT K3 ESDM • ISO 9001:2015 • PUIL 2020</span>
          </div>
        </div>
      </div>
    </footer>
  );
}