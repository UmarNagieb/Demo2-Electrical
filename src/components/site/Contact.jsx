import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const meta = [
  { icon: Phone, label: "HOTLINE DARURAT & WHATSAPP", val: "+62 812-8800-9944 (Fast Response)" },
  { icon: Mail, label: "EMAIL PROPOSAL & TENDER", val: "proyek@solusikelistrikanpro.id" },
  { icon: MapPin, label: "WORKSHOP & ENGINEERING OFFICE", val: "Jl. Raya TB Simatupang No. 88, Jakarta Selatan" },
];

const layananOptions = [
  "Instalasi Baru & Rewiring",
  "Perbaikan & Trouble Clearing (Darurat)",
  "Audit Beban & Thermal Scan",
  "Grounding & Penangkal Petir",
  "Perawatan Preventif Berkala",
  "Lainnya",
];

export default function Contact() {
  const [form, setForm] = useState({ nama: "", whatsapp: "", jenis_layanan: "", alamat: "", pesan: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const message = [
      "Permintaan konsultasi instalasi listrik",
      `Nama: ${form.nama}`,
      `WhatsApp: ${form.whatsapp}`,
      `Layanan: ${form.jenis_layanan}`,
      form.alamat && `Lokasi: ${form.alamat}`,
      form.pesan && `Pesan: ${form.pesan}`,
    ].filter(Boolean).join("\n");
    const whatsappUrl = `https://wa.me/6281288009944?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank");

    if (!whatsappWindow) {
      setError("WhatsApp tidak dapat dibuka. Silakan hubungi kami langsung di +62 812-8800-9944.");
      return;
    }

    whatsappWindow.opener = null;
    setSuccess(true);
    setForm({ nama: "", whatsapp: "", jenis_layanan: "", alamat: "", pesan: "" });
  };

  return (
    <section
      id="kontak"
      className="bg-gradient-to-b from-white to-[#EFF6FF] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="font-mono text-[12px] tracking-[0.18em] text-[#0284C7] uppercase mb-3">// KONSULTASI & ESTIMASI BIAYA</div>
          <h2 className="text-[32px] lg:text-[48px] font-extrabold tracking-[-0.025em] text-[#0F172A] leading-[1.15] mb-5">
            Diskusikan Kebutuhan Instalasi Anda dengan Teknisi Bersertifikat
          </h2>
          <p className="text-[16px] text-[#475569] leading-relaxed mb-9 max-w-[520px]">
            Dapatkan evaluasi teknis, survei lokasi langsung, dan penawaran biaya transparan tanpa biaya tersembunyi. Layanan konsultasi awal bebas pungutan biaya.
          </p>
          <div className="flex flex-col gap-5">
            {meta.map((m, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="w-11 h-11 shrink-0 rounded-md bg-[#0284C7]/10 border border-[#0284C7]/30 grid place-items-center text-[#0284C7] shadow-[0_2px_8px_rgba(2,132,199,0.1)]">
                  <m.icon size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-[0.12em] text-[#64748B] uppercase">{m.label}</span>
                  <span className="text-[14px] font-semibold text-[#0F172A]">{m.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-lg p-8 lg:p-10 shadow-[0_16px_40px_rgba(15,23,42,0.1)]">
          <div className="flex justify-between items-center pb-5 border-b border-[#E2E8F0] mb-7">
            <div className="text-[15px] font-bold text-[#0F172A] tracking-wide">FORMULIR PENGAJUAN LAYANAN TEKNIS</div>
            <span className="font-mono text-[11px] text-[#10B981] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" /> SURVEY TERSEDIA
            </span>
          </div>

          {success ? (
            <div className="text-center py-10">
              <CheckCircle2 size={56} className="mx-auto text-[#10B981] mb-4" />
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-2">Pesan WhatsApp Siap Dikirim</h3>
              <p className="text-[14px] text-[#64748B] mb-6">
                Pesan Anda sudah disiapkan di WhatsApp. Tekan tombol Kirim di WhatsApp untuk meneruskan permintaan kepada tim kami.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="text-[13px] font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
              >
                Kirim permintaan lain →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-[11px] font-mono tracking-[0.1em] uppercase text-[#475569] mb-2">Nama Pemesan / Perusahaan</label>
                <input
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  required
                  placeholder="Contoh: Ir. Aditia Pratama"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3.5 text-[#0F172A] text-[14px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono tracking-[0.1em] uppercase text-[#475569] mb-2">Nomor WhatsApp Aktif</label>
                <input
                  name="whatsapp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="081x-xxxx-xxxx"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3.5 text-[#0F172A] text-[14px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono tracking-[0.1em] uppercase text-[#475569] mb-2">Kategori Layanan</label>
                <select
                  name="jenis_layanan"
                  value={form.jenis_layanan}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3.5 text-[#0F172A] text-[14px] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-colors"
                >
                  <option value="">Pilih kebutuhan instalasi</option>
                  {layananOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-mono tracking-[0.1em] uppercase text-[#475569] mb-2">Alamat / Lokasi Pengerjaan</label>
                <input
                  name="alamat"
                  value={form.alamat}
                  onChange={handleChange}
                  placeholder="Kota atau area survei"
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3.5 text-[#0F172A] text-[14px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono tracking-[0.1em] uppercase text-[#475569] mb-2">Pesan Tambahan (Opsional)</label>
                <textarea
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Jelaskan kebutuhan teknis Anda..."
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-3.5 text-[#0F172A] text-[14px] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-colors resize-none"
                />
              </div>

              {error && <div className="text-[13px] text-[#DC2626] bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-md px-4 py-3">{error}</div>}

              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-[14px] px-6 py-4 rounded-md transition-colors shadow-[0_4px_14px_rgba(245,158,11,0.3)]"
              >
                Kirim Permintaan Survei & Penawaran <Send size={15} />
              </button>
              <p className="text-[11px] font-mono text-center text-[#94A3B8] tracking-wide">PESAN DITERUSKAN KE WHATSAPP • KIRIM UNTUK MENYELESAIKAN</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}