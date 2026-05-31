import { useState } from "react";
import { FaStar } from "react-icons/fa";

// Import komponen layout dasar bawaan project CRM kamu
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Avatar from "../../components/Avatar";
import ProductCard from "../../components/ProductCard";

// Import komponen dasar bawaan proyek kamu (Aman dari error ui/shadcn)
import { Button } from "../../components/ui/Button"; 
import Badge from "../../components/Badge";        
import Card from "../../components/Card";          
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/Table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/Select";

export default function Components() {
  // State sederhana untuk memicu buka/tutup Modal Native React
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      name: "Acne Laser Treatment",
      category: "Laser",
      price: "Rp 750.000",
      status: "destructive", 
    },
    {
      id: 2,
      name: "Deep Cleansing Facial",
      category: "Facial",
      price: "Rp 350.000",
      status: "default",
    },
    {
      id: 3,
      name: "Chemical Peeling",
      category: "Peeling",
      price: "Rp 500.000",
      status: "outline",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#fcfcfd]">
      <Container>
        <div className="mb-6">
          <h1 className="text-2xl font-black text-gray-800 tracking-tight">
            Katalog Komponen UI CRM
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Sistem Documentation Mandiri — Penerapan Modul Standar Terintegrasi.
          </p>
        </div>

        <hr className="mb-8 border-gray-100" />

        <div className="space-y-12">
          {/* 1. SECTION COMPONENTS (HERO BOX) */}
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
                  Dapatkan diskon treatment pembersihan jerawat intensif dan peeling medis menggunakan teknologi laser mutakhir Eropa terpilih.
                </p>
              </div>
              <div className="w-24 h-24 bg-white/80 rounded-2xl shadow-inner flex items-center justify-center text-3xl border border-white shrink-0">
                ✨
              </div>
            </div>
          </section>

          {/* 2. DATA DISPLAY COMPONENTS */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              2. Data Display (Table)
            </h2>
            <div className="border rounded-xl bg-white shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">No</TableHead>
                    <TableHead>Nama Layanan</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Harga</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((item, idx) => (
                    <TableRow key={item.id} className="hover:bg-gray-50/50 transition-colors">
                      <TableCell className="font-medium text-gray-500">{idx + 1}</TableCell>
                      <TableCell className="font-bold text-gray-800">{item.name}</TableCell>
                      <TableCell>
                        <Badge variant={item.status}>{item.category}</Badge>
                      </TableCell>
                      <TableCell className="font-semibold text-emerald-600">{item.price}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">Detail</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* 3. PRODUCT CARDS DISPLAY */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              3. Product Cards Display
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ProductCard
                    image="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500"
                    title="Acne Laser Serum Pro"
                    category="Skincare Product"
                    price="Rp 245.000"
                    description="Serum khusus dengan konsentrat Salicylic Acid mikro untuk meredakan kemerahan dalam 3 malam saja."
                  />
                  <ProductCard
                    image="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=500&auto=format&fit=crop"
                    title="Brightening Night Cream"
                    category="Moisturizer"
                    price="Rp 189.000"
                    description="Krim malam pencerah dengan Niacinamide 5% bertekstur gel air ringan, cocok untuk tipe kulit sensitif."
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Card className="p-4 space-y-2">
                  <p className="text-[11px] font-bold text-gray-400 uppercase mb-2">
                    Top Treatments
                  </p>
                  {[
                    { rank: "1", name: "Acne Laser", rate: "4.9", rev: "142" },
                    { rank: "2", name: "Deep Cleansing", rate: "4.8", rev: "98" },
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
                          <h4 className="text-xs font-bold text-gray-800">{t.name}</h4>
                          <p className="text-[9px] text-gray-400 flex items-center gap-0.5">
                            <FaStar className="text-amber-400" /> {t.rate} • ({t.rev})
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          </section>

          {/* 4. FORM INPUT COMPONENTS */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              4. Form Input (Select)
            </h2>
            <Card className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Nama Pasien</label>
                <input
                  type="text"
                  placeholder="Contoh: Nabilla Suharman"
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Pilih Dokter</label>
                <Select>
                  <SelectTrigger className="w-full bg-gray-50 border-gray-200 rounded-xl focus:ring-0 shadow-none">
                    <SelectValue placeholder="Pilih Dokter Spesialis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="olivia">Dr. Olivia Grant</SelectItem>
                    <SelectItem value="david">Dr. David Carter</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Catatan</label>
                <textarea
                  rows={1}
                  placeholder="Tulis keluhan..."
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none resize-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </Card>
          </section>

          {/* 5. FEEDBACK COMPONENTS (MURNI MODAL REACT NATIVE - ANTI-GAGAL) */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              5. Feedback Components (Native Modal)
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

              <Card className="flex flex-col items-center justify-center p-4 text-center gap-3">
                <p className="text-xs text-gray-400">
                  Uji interaktif pop-up box menggunakan modal murni state React.
                </p>
                
                {/* TOMBOL MERAH DIJAMIN LANGSUNG MUNCUL & BISA DIKLIK */}
                <Button 
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 rounded-xl transition-all"
                >
                  Buka Dialog Box
                </Button>
              </Card>
            </div>
          </section>
        </div>
      </Container>

      <Footer />

      {/* RENDER MODAL NATIVE MURNI (Muncul Mengambang Sempurna Pas Tombol Diklik) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur Gelap Belakang */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity" 
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Kotak Konten Modal */}
          <div className="relative w-full max-w-sm bg-white p-6 rounded-2xl shadow-2xl border border-gray-50 scale-100 transition-all z-10 flex flex-col gap-4 animate-in zoom-in-95 duration-150">
            <div className="flex flex-col gap-1.5 text-left">
              <h3 className="text-base font-bold text-gray-800 leading-none">
                Konfirmasi Medis
              </h3>
              <p className="text-xs text-gray-500 pt-1 leading-relaxed">
                Apakah Anda yakin ingin memproses penjadwalan pendaftaran pasien ini ke dalam antrean utama <b>byutie. Clinic</b>?
              </p>
            </div>
            
            <div className="flex gap-2 justify-end pt-2">
              <Button 
                variant="outline" 
                className="rounded-xl h-9 text-xs font-bold" 
                onClick={() => setIsModalOpen(false)}
              >
                Batal
              </Button>
              <Button 
                className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl h-9 text-xs font-bold" 
                onClick={() => setIsModalOpen(false)}
              >
                Konfirmasi
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}