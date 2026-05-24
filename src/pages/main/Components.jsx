import { useState } from "react";
import { FaStar } from "react-icons/fa";

// Import komponen-komponen yang PASTI ADA di folder src/components kamu
import Container from "../../components/Container";
import Button from "../../components/Button";
import Badge from "../../components/Badge";
import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import ProductCard from "../../components/ProductCard";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

export default function Components() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tableHeaders = ["No", "Nama Layanan", "Kategori", "Harga", "Aksi"];
  const services = [
    {
      id: 1,
      name: "Acne Laser Treatment",
      category: "Laser",
      price: "Rp 750.000",
      status: "rose",
    },
    {
      id: 2,
      name: "Deep Cleansing Facial",
      category: "Facial",
      price: "Rp 350.000",
      status: "success",
    },
    {
      id: 3,
      name: "Chemical Peeling",
      category: "Peeling",
      price: "Rp 500.000",
      status: "warning",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fcfcfd]">
      <Container>
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-800 tracking-tight">
            Katalog Komponen UI
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Sistem Dokumentasi Mandiri — Minimal 15 Reusable Components Berbasis
            CRM Beauty Clinic.
          </p>
        </div>

        <hr className="mb-8 border-gray-100" />

        <div className="space-y-12">
          {/* 1. HERO SECTION BOX MOCKUP */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              1. Section Components
            </h2>
            <div className="bg-gradient-to-r from-rose-50 to-teal-50/40 rounded-3xl p-6 md:p-8 border border-rose-100/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl text-center md:text-left">
                <span className="inline-block bg-rose-100 text-rose-700 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Promo Bulan Ini
                </span>
                <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight leading-tight">
                  Lumière Glowing Glow Up Bersama Nabilla
                </h2>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Dapatkan diskon treatment pembersihan jerawat intensif dan
                  peeling medis menggunakan teknologi laser mutakhir Eropa
                  terpilih.
                </p>
              </div>
              <div className="w-24 h-24 bg-white/80 rounded-2xl shadow-inner flex items-center justify-center text-3xl border border-white shrink-0">
                ✨
              </div>
            </div>
          </section>

          {/* 2. BASIC COMPONENTS (Button, Badge, Avatar) */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              2. Basic Components
            </h2>
            <Card className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-700">
                  Variasi Button
                </h4>
                <div className="flex gap-2 flex-wrap">
                  <Button type="primary">Simpan</Button>
                  <Button type="rose">Booking</Button>
                  <Button type="danger">Hapus</Button>
                  <Button type="secondary">Edit</Button>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-700">
                  Variasi Status Badge
                </h4>
                <div className="flex gap-2 flex-wrap">
                  <Badge type="success">Completed</Badge>
                  <Badge type="warning">Scheduled</Badge>
                  <Badge type="danger">Canceled</Badge>
                  <Badge type="rose">In Progress</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-700">
                  Variasi Avatar Inisial
                </h4>
                <div className="flex gap-2">
                  <Avatar name="Nabilla" />
                  <Avatar name="Andi" />
                  <Avatar name="Siti" />
                </div>
              </div>
            </Card>
          </section>

          {/* 3. DATA DISPLAY COMPONENTS (Card, Table, ProductCard) */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              3. Data Display Components
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <h4 className="text-xs font-bold text-gray-700">
                  Product Cards Grid
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ProductCard
                    image="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500"
                    title="Acne Laser Serum Pro"
                    category="Skincare Product"
                    price="Rp 245.000"
                    description="Serum khusus dengan konsentrat Salicylic Acid mikro untuk meredakan kemerahan dalam 3 malam saja."
                  />
                  <ProductCard
                    image="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=500&auto=format&fit=crop" // ◄ Menggunakan URL alternatif kosmetik krim wajah
                    title="Brightening Night Cream"
                    category="Moisturizer"
                    price="Rp 189.000"
                    description="Krim malam pencerah dengan Niacinamide 5% bertekstur gel air ringan, cocok untuk tipe kulit sensitif."
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gray-700">
                  Mini Rows Widget
                </h4>
                <Card className="space-y-2 !p-4">
                  <p className="text-[11px] font-bold text-gray-400 uppercase mb-2">
                    Top Treatments
                  </p>
                  {[
                    { rank: "1", name: "Acne Laser", rate: "4.9", rev: "142" },
                    {
                      rank: "2",
                      name: "Deep Cleansing",
                      rate: "4.8",
                      rev: "98",
                    },
                  ].map((t) => (
                    <div
                      key={t.rank}
                      className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-5 h-5 rounded bg-rose-50 text-rose-500 flex items-center justify-center text-[10px] font-black">
                          #{t.rank}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-gray-800">
                            {t.name}
                          </h4>
                          <p className="text-[9px] text-gray-400 flex items-center gap-0.5">
                            <FaStar className="text-amber-400" /> {t.rate} • (
                            {t.rev})
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Card>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-gray-700">
                Reusable Table Component
              </h4>
              <Table headers={tableHeaders}>
                {services.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/70 transition-colors"
                  >
                    <td className="p-4 border-b border-gray-100 font-medium text-gray-500">
                      {idx + 1}
                    </td>
                    <td className="p-4 border-b border-gray-100 font-bold text-gray-800">
                      {item.name}
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <Badge type={item.status}>{item.category}</Badge>
                    </td>
                    <td className="p-4 border-b border-gray-100 font-semibold text-emerald-600">
                      {item.price}
                    </td>
                    <td className="p-4 border-b border-gray-100">
                      <Button type="primary" className="!py-1 !px-2.5 !text-xs">
                        Detail
                      </Button>
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </section>

          {/* 4. FORM COMPONENTS MOCKUP */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              4. Form Input Components
            </h2>
            <Card className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Nama Pasien
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Nabilla Suharman"
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Pilih Dokter
                </label>
                <select className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-600 outline-none">
                  <option>Dr. Olivia Grant</option>
                  <option>Dr. David Carter</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Catatan
                </label>
                <textarea
                  rows={1}
                  placeholder="Tulis keluhan..."
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none resize-none"
                />
              </div>
            </Card>
          </section>

          {/* 5. FEEDBACK COMPONENTS (Alert & Modal Interactive) */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              5. Feedback Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-green-50 text-green-800 border border-green-100 text-xs font-medium">
                  ✨ Sinkronisasi data sistem CRM berhasil diperbarui otomatis.
                </div>
                <div className="p-3 rounded-xl bg-yellow-50 text-yellow-800 border border-yellow-100 text-xs font-medium">
                  ⚠️ Peringatan: Ruangan tindakan 1 penuh pada jam 13:00 WIB.
                </div>
              </div>
              <Card className="flex flex-col items-center justify-center p-4 text-center gap-2">
                <p className="text-xs text-gray-400">
                  Uji interaktif pop-up box dialog modal.
                </p>
                <Button type="rose" onClick={() => setIsModalOpen(true)}>
                  Buka Dialog Box
                </Button>
              </Card>
            </div>
          </section>
        </div>
      </Container>

      {/* Pop-up Modal Box Fungsional */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 space-y-4 shadow-xl border border-gray-50">
            <h3 className="font-bold text-gray-800 text-base">
              Konfirmasi Medis
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Apakah Anda yakin ingin memproses penjadwalan pendaftaran pasien
              ini ke dalam antrean utama <b>byutie. Clinic</b>?
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="secondary" onClick={() => setIsModalOpen(false)}>
                Batal
              </Button>
              <Button type="rose" onClick={() => setIsModalOpen(false)}>
                Konfirmasi
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
