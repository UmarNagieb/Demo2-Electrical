import React from "react";
import { Cable, AlertTriangle, ScanLine } from "lucide-react";

const services = [
  {
    code: "LAYANAN 01 // INSTALASI",
    icon: Cable,
    title: "Instalasi Baru & Rewiring Total",
    desc: "Perancangan tata letak kabel tersembunyi berpipa conduit tahan api, perakitan panel distribusi utama (MDB), pembagian grup sirkuit terukur, dan instalasi penerangan arsitektural.",
    specs: ["Panel 1 Fasa & 3 Fasa Bersertifikasi", "Penyeimbangan Beban Sirkuit Otomatis", "Garansi Pengerjaan 3 Tahun Penuh"],
  },
  {
    code: "LAYANAN 02 // DARURAT 24 JAM",
    icon: AlertTriangle,
    title: "Perbaikan & Trouble Clearing",
    desc: "Respon cepat penanganan korsleting mendadak, MCB sering anjlok tanpa sebab jelas, bau hangus pada box sekring, kabel terbakar, hingga gangguan fasa netral.",
    specs: ["Unit Reaksi Cepat Siap Siaga", "Deteksi Titik Rusak via Digital Tester", "Penggantian Suku Cadang Original di Tempat"],
  },
  {
    code: "LAYANAN 03 // PREVENTIF",
    icon: ScanLine,
    title: "Audit Beban & Thermal Scan",
    desc: "Pemeriksaan kesehatan panel dengan kamera termal inframerah untuk menemukan titik panas (hotspot) sebelum memicu percikan api, ditambah uji tahanan isolasi tanah.",
    specs: ["Laporan Resmi Thermography Imaging", "Grounding Rod & Surge Arrester Lightning", "Rekomendasi Efisiensi Daya Listrik"],
  },
];

export default function Services() {
  return (
    <section
      id="layanan"
      className="bg-gradient-to-b from-[#F1F5F9] to-white border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div>
            <div className="font-mono text-[12px] tracking-[0.18em] text-[#0284C7] uppercase mb-3">// LAYANAN UNGGULAN</div>
            <h2 className="text-[30px] lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#0F172A] leading-[1.15]">
              Solusi Kelistrikan Terpadu & Bergaransi
            </h2>
          </div>
          <p className="max-w-[440px] text-[15px] text-[#64748B] leading-relaxed">
            Penanganan komprehensif mulai dari perancangan diagram satu garis hingga audit proteksi berkala.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white border border-[#E2E8F0] rounded-lg p-9 transition-all duration-300 hover:border-[#0284C7] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(2,132,199,0.12)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-md bg-[#0284C7]/10 border border-[#0284C7]/30 grid place-items-center text-[#0284C7] group-hover:scale-110 transition-transform">
                  <s.icon size={22} />
                </div>
                <div className="font-mono text-[10px] tracking-[0.12em] text-[#D97706]">{s.code}</div>
              </div>
              <h3 className="text-[21px] font-bold tracking-tight text-[#0F172A] mb-3">{s.title}</h3>
              <p className="text-[14px] text-[#475569] leading-relaxed mb-6">{s.desc}</p>
              <div className="pt-5 border-t border-[#E2E8F0] flex flex-col gap-2.5">
                {s.specs.map((sp, j) => (
                  <div key={j} className="flex items-center gap-2 font-mono text-[12px] text-[#475569]">
                    <span className="text-[#0284C7]">▸</span> {sp}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}