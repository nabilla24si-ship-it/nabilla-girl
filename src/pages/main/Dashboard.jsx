import { 
  FaCalendarCheck, 
  FaUserCheck, 
  FaTimesCircle, 
  FaMoneyBillWave, 
  FaUserFriends,
  FaStar
} from "react-icons/fa";

// Import komponen reusable milik Anda
import Card from "../../components/Card";
import Table from "../../components/Table";
import Badge from "../../components/Badge";

export default function Dashboard() {
  const patients = [
    { id: "#AP-001", name: "Nabilla Suharman", treatment: "Acne Laser Treatment", status: "Completed" },
    { id: "#AP-002", name: "Andi Wijaya", treatment: "Deep Cleansing Facial", status: "Scheduled" },
    { id: "#AP-003", name: "Siti Aminah", treatment: "Chemical Peeling", status: "Canceled" },
  ];

  const headers = ["Patient Name", "Appt ID", "Treatment", "Status"];

  return (
    <div id="dashboard-container" className="p-6 bg-[#fdf8f9]/30 min-h-screen space-y-6">
      
      {/* LAYOUT UTAMA: MEMBAGI RUANG MENJADI 2 KOLOM SEPERTI DI FIGMA */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-start">
        
        {/* ================= KOLOM KIRI (3/4 HALAMAN) ================= */}
        <div className="xl:col-span-3 space-y-6">
          
          {/* Grid Mini Stats Card Atas */}
          <div id="dashboard-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Box 1: Total Appointments */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100/40 flex items-center gap-4 transition-transform hover:scale-[1.01]">
              <div className="p-4 bg-rose-50 text-rose-500 rounded-xl text-xl shrink-0">
                <FaCalendarCheck />
              </div>
              <div>
                <span className="block text-2xl font-black text-gray-800">75</span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Total Appt</span>
              </div>
            </div>

            {/* Box 2: Treated Patients */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100/40 flex items-center gap-4 transition-transform hover:scale-[1.01]">
              <div className="p-4 bg-green-50 text-green-500 rounded-xl text-xl shrink-0">
                <FaUserCheck />
              </div>
              <div>
                <span className="block text-2xl font-black text-gray-800">175</span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Treated</span>
              </div>
            </div>

            {/* Box 3: Canceled */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100/40 flex items-center gap-4 transition-transform hover:scale-[1.01]">
              <div className="p-4 bg-red-50 text-red-500 rounded-xl text-xl shrink-0">
                <FaTimesCircle />
              </div>
              <div>
                <span className="block text-2xl font-black text-gray-800">40</span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Canceled</span>
              </div>
            </div>

            {/* Box 4: Total Revenue */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100/40 flex items-center gap-4 transition-transform hover:scale-[1.01]">
              <div className="p-4 bg-blue-50 text-blue-500 rounded-xl text-xl shrink-0">
                <FaMoneyBillWave />
              </div>
              <div>
                <span className="block text-2xl font-black text-gray-800">Rp. 12.8M</span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Revenue</span>
              </div>
            </div>

          </div>

          {/* Tempat Placeholder Chart di Tengah sesuai Gambar Desain */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="!p-5">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-gray-800 text-sm">Grafik Pemasukan Bulanan</h4>
                <span className="text-[10px] bg-gray-50 border px-2 py-0.5 rounded text-gray-400">2026</span>
              </div>
              <div className="h-36 bg-gray-50 border border-dashed border-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400 font-medium">
                [ Ruang Area Grafik Garis Tren Finansial ]
              </div>
            </Card>

            <Card className="!p-5">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-bold text-gray-800 text-sm">Distribusi Gender Konsumen</h4>
                <span className="text-[10px] bg-gray-50 border px-2 py-0.5 rounded text-gray-400">8 Bulan Terakhir</span>
              </div>
              <div className="h-36 bg-gray-50 border border-dashed border-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400 font-medium">
                [ Ruang Area Grafik Batang Pasien Wanita & Pria ]
              </div>
            </Card>
          </div>

          {/* Tabel Utama Janji Temu */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FaUserFriends className="text-rose-500 text-xl" />
                <h3 className="text-lg font-black text-gray-800 tracking-tight">Recent Appointments</h3>
              </div>
              <button className="text-xs text-rose-500 font-bold hover:underline">Lihat Semua</button>
            </div>

            <Table headers={headers}>
              {patients.map((p, i) => (
                <tr key={i} className="hover:bg-rose-50/30 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-100 font-bold text-gray-800">
                    {p.name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100 text-gray-500 font-medium">
                    {p.id}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100 text-gray-500">
                    {p.treatment}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    <Badge 
                      type={
                        p.status === "Completed" ? "success" : 
                        p.status === "Scheduled" ? "warning" : "danger"
                      }
                    >
                      {p.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </Table>
          </Card>
        </div>

        {/* ================= KOLOM KANAN (1/4 HALAMAN WIDGETS) ================= */}
        <div className="space-y-6">
          
          {/* Komponen Layanan Kecantikan Terpopuler */}
          <Card className="!p-4">
            <h3 className="text-sm font-bold text-gray-800 mb-3 tracking-tight">Most Popular Treatments</h3>
            <div className="space-y-3">
              {[
                { rank: "1", name: "Acne Laser Treatment", rating: "4.9", rev: "240" },
                { rank: "2", name: "Deep Cleansing Facial", rating: "4.8", rev: "185" },
                { rank: "3", name: "Chemical Peeling", rating: "4.7", rev: "110" }
              ].map((t) => (
                <div key={t.rank} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5 rounded-md bg-rose-50 text-rose-500 flex items-center justify-center text-[11px] font-black">
                      #{t.rank}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-gray-700">{t.name}</h4>
                      <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
                        <FaStar className="text-amber-400 text-[9px]" /> {t.rating} • ({t.rev} ulasan)
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Komponen Jadwal Shift Harian Kamar Tindakan */}
          <Card className="!p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-gray-800 tracking-tight">Clinic Schedule</h3>
              <span className="text-[9px] text-rose-400 font-bold bg-rose-50 px-1.5 py-0.5 rounded">Hari Ini</span>
            </div>
            <div className="space-y-2.5">
              {[
                { doc: "Dr. Nabilla S.", room: "Kamar Laser 1", time: "09:00 - 11:00", done: true },
                { doc: "Dr. Andi Wijaya", room: "Kamar Facial 3", time: "13:00 - 14:30", done: false }
              ].map((s, idx) => (
                <div key={idx} className="p-2.5 bg-gray-50/60 rounded-xl flex items-center justify-between text-xs border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked={s.done} className="rounded accent-rose-500 w-3 h-3" />
                    <div>
                      <p className="font-bold text-gray-700">{s.doc}</p>
                      <p className="text-[10px] text-gray-400">{s.room}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-gray-500">{s.time}</span>
                </div>
              ))}
            </div>
          </Card>

        </div>

      </div>

    </div>
  );
}