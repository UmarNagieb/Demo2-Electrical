import React from "react";
import { Star, Quote } from "lucide-react";

const items = [
  {
    quote:
      "Pengerjaan rewiring seluruh lantai kantor kami diselesaikan tanpa mengganggu jam operasional server. Dokumentasi diagram jalurnya sangat rapi dan teknisi menjelaskan pembagian beban dengan sangat rinci.",
    name: "Bambang Haryanto, ST",
    role: "Building Manager • Menara Sentral Niaga",
  },
  {
    quote:
      "Sempat terjadi korsleting berat saat hujan lebat. Tim teknisi Solusi Kelistrikan Pro tiba dalam waktu 35 menit dan langsung menemukan titik kabel konslet dengan alat penguji khusus. Sangat profesional.",
    name: "dr. Ratna Kartika",
    role: "Pemilik Klinik Pratama Husada",
  },
  {
    quote:
      "Nilai tahanan grounding rumah saya sebelumnya mencapai 8.5 Ohm yang merusak inverter AC. Setelah direkayasa ulang dengan sistem multi-grounding, terukur stabil di 0.7 Ohm. Garansinya jelas dan terpercaya.",
    name: "Michael Wijaya",
    role: "Pemilik Rumah • Pantai Indah Kapuk",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="bg-gradient-to-b from-[#F1F5F9] to-white border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div>
            <div className="font-mono text-[12px] tracking-[0.18em] text-[#0284C7] uppercase mb-3">// KEPERCAYAAN KLIEN</div>
            <h2 className="text-[30px] lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#0F172A] leading-[1.15]">
              Dipercaya oleh Pengelola Properti & Pemilik Bisnis
            </h2>
          </div>
          <p className="max-w-[440px] text-[15px] text-[#64748B] leading-relaxed">
            Komitmen kami terhadap kerapian instalasi dan transparansi spesifikasi teknis diakui para mitra.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-[#E2E8F0] rounded-lg p-8 flex flex-col justify-between shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <Quote size={28} className="text-[#0284C7]/40" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                </div>
                <p className="text-[14px] text-[#334155] leading-relaxed mb-6">"{t.quote}"</p>
              </div>
              <div className="border-t border-[#F1F5F9] pt-5">
                <div className="text-[14px] font-bold text-[#0F172A]">{t.name}</div>
                <div className="text-[12px] text-[#64748B] mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}