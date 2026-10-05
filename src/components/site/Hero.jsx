import React from "react";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";

const stats = [
  { number: "1.450+", tag: "PROYEK SELESAI", desc: "Perumahan, pabrik, perhotelan & data center." },
  { number: "< 0.8Ω", tag: "KUALITAS GROUNDING", desc: "Jauh di bawah batas toleransi PUIL (≤ 5 Ohm)." },
  { number: "36 Bulan", tag: "GARANSI INSTALASI", desc: "Didukung perawatan preventif & audit berkala." },
];

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative pt-[72px] overflow-hidden bg-white"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 85% 15%, rgba(2,132,199,0.08) 0%, transparent 55%), radial-gradient(circle at 10% 85%, rgba(245,158,11,0.05) 0%, transparent 40%), linear-gradient(180deg,#FFFFFF 0%,#F1F5F9 100%)",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pt-24 pb-20">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[#D97706] bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full px-4 py-1.5 mb-8">
          <ShieldCheck size={13} /> Sertifikasi Kompetensi ESDM & K3 Kemnaker
        </div>

        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-16 items-center">
          <div>
            <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0F172A] mb-6">
              Instalasi Daya Presisi.{" "}
              <span className="text-[#0284C7]">Keamanan Maksimal</span> untuk Rumah & Bisnis.
            </h1>
            <p className="text-[17px] lg:text-[18px] text-[#475569] leading-relaxed mb-9 max-w-[620px]">
              Mitra rekayasa kelistrikan profesional untuk residensial premium, gedung komersial, dan industri. Mengutamakan kepatuhan proteksi beban, penangkal petir, serta keandalan operasional tanpa downtime.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-[14px] px-6 py-3.5 rounded-md transition-colors shadow-[0_4px_14px_rgba(245,158,11,0.3)]"
              >
                Ajukan Estimasi Proyek <ArrowRight size={16} />
              </a>
              <a
                href="#galeri"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-semibold text-[14px] px-6 py-3.5 rounded-md border border-[#CBD5E1] transition-colors"
              >
                Lihat Dokumentasi Pekerjaan
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] border border-[#CBD5E1] rounded-xl p-8 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`pb-5 ${i !== stats.length - 1 ? "border-b border-[#E2E8F0] mb-5" : ""}`}
              >
                <div className="text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-none">{s.number}</div>
                <div className="text-[11px] font-mono tracking-[0.12em] text-[#0284C7] uppercase mt-2">{s.tag}</div>
                <div className="text-[13px] text-[#64748B] mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono tracking-wide text-[#64748B]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" /> SIAGA DISPATCH 24/7
            </span>
            <span className="hidden sm:inline">STANDAR PUIL 2020 & SNI 0225:2020</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#0284C7]" /> RESPON &lt; 35 MENIT</span>
            <span className="flex items-center gap-1.5"><Award size={12} className="text-[#D97706]" /> REG. 9120.3012.88-ESDM</span>
          </div>
        </div>
      </div>
    </section>
  );
}