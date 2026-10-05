import React from "react";
import { FileCheck, Boxes } from "lucide-react";

const points = [
  {
    icon: FileCheck,
    title: "Sertifikasi SLO Resmi",
    desc: "Bantuan pengurusan Sertifikat Laik Operasi untuk legalitas dan keselamatan instalasi bangunan.",
  },
  {
    icon: Boxes,
    title: "Material Berkualitas SNI",
    desc: "Hanya tembaga murni, MCB/MCCB original berstandar IEC, dan komponen proteksi bersertifikat.",
  },
];

export default function About() {
  return (
    <section
      id="tentang"
      className="bg-gradient-to-b from-white to-[#F1F5F9] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div>
            <div className="font-mono text-[12px] tracking-[0.18em] text-[#0284C7] uppercase mb-3">// TENTANG PERUSAHAAN</div>
            <h2 className="text-[30px] lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#0F172A] leading-[1.15]">
              Komitmen Keamanan & Standar Rekayasa Tinggi
            </h2>
          </div>
          <p className="max-w-[440px] text-[15px] text-[#64748B] leading-relaxed">
            Kami bukan sekadar tukang kabel biasa, melainkan tim rekayasa kelistrikan berpengalaman dengan sertifikasi K3 resmi dan alat uji terkalibrasi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#CBD5E1] bg-[#F1F5F9]">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a26a4?auto=format&fit=crop&w=1200&q=80"
              alt="Teknisi kelistrikan bersertifikat di workshop"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 font-mono text-[11px] tracking-[0.15em] text-[#0284C7] bg-white/90 border border-[#0284C7]/40 rounded px-3 py-1.5">
              [ TIM TEKNISI BERSERTIFIKAT ]
            </div>
          </div>

          <div>
            <h3 className="text-[22px] lg:text-[24px] font-bold text-[#0F172A] mb-4">
              Integrasi Penuh Standar PUIL 2020 & Regulasi Keselamatan K3
            </h3>
            <p className="text-[14px] text-[#475569] leading-relaxed mb-8">
              Setiap pengerjaan instalasi dan perbaikan melewati uji beban menyeluruh, pemeriksaan kebocoran isolasi Megger test, thermography scan panel, serta pendataan balancing fasa R-S-T guna mencegah lonjakan arus dan bahaya kebakaran.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E2E8F0] p-6 rounded-md shadow-[0_8px_20px_rgba(15,23,42,0.06)]"
                >
                  <div className="w-10 h-10 rounded-md bg-[#0284C7]/10 border border-[#0284C7]/30 grid place-items-center text-[#0284C7] mb-4">
                    <p.icon size={18} />
                  </div>
                  <div className="text-[16px] font-bold text-[#0F172A] mb-2">{p.title}</div>
                  <div className="text-[13px] text-[#475569] leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}