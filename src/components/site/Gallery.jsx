import React from "react";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1581094288338-2314dd207765?auto=format&fit=crop&w=1200&q=80",
    title: "Pabrik Manufaktur & Pergudangan Logistik",
    loc: "Kawasan Industri Cikarang • Kapasitas 250 kVA",
    badge: "PROYEK SELESAI",
    span: "lg:col-span-7",
  },
  {
    img: "https://images.unsplash.com/photo-1565608087341-404b25292e59?auto=format&fit=crop&w=1000&q=80",
    title: "Hunian Mewah 3 Lantai & Backup Genset",
    loc: "Pondok Indah, Jakarta Selatan • Daya 33.000 VA",
    badge: "PROYEK SELESAI",
    span: "lg:col-span-5",
  },
  {
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af08?auto=format&fit=crop&w=1400&q=80",
    title: "Gedung Perkantoran & Data Center Tier 2",
    loc: "CBD Surabaya • Proteksi Surge Arrester Kelas I+II",
    badge: "PROYEK SELESAI",
    span: "lg:col-span-12",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeri"
      className="bg-gradient-to-b from-white to-[#F1F5F9] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div>
            <div className="font-mono text-[12px] tracking-[0.18em] text-[#0284C7] uppercase mb-3">// DOKUMENTASI PROYEK</div>
            <h2 className="text-[30px] lg:text-[44px] font-extrabold tracking-[-0.025em] text-[#0F172A] leading-[1.15]">
              Galeri Pekerjaan & Bukti Pengerjaan Lapangan
            </h2>
          </div>
          <p className="max-w-[440px] text-[15px] text-[#64748B] leading-relaxed">
            Portofolio nyata pengerjaan panel distribusi, sistem kabel gedung, dan instalasi residensial bertingkat.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-7">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group ${p.span} bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,0.08)]`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.12em] text-[#0284C7] bg-white/90 border border-[#0284C7]/40 rounded px-2.5 py-1 backdrop-blur-sm">
                  {p.badge}
                </div>
              </div>
              <div className="p-6 flex justify-between items-center bg-white border-t border-[#F1F5F9]">
                <div>
                  <div className="text-[16px] font-bold text-[#0F172A]">{p.title}</div>
                  <div className="text-[12px] font-mono text-[#64748B] mt-1">{p.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}