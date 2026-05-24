import Button from "./Button";

export default function HeroSection({ title, subtitle, tag }) {
  return (
    <div className="bg-gradient-to-r from-rose-50 to-teal-50/40 rounded-3xl p-6 md:p-8 border border-rose-100/30 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-3 max-w-xl text-center md:text-left">
        {tag && <span className="inline-block bg-rose-100 text-rose-700 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">{tag}</span>}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight leading-tight">{title}</h2>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{subtitle}</p>
        <div className="pt-2 flex justify-center md:justify-start gap-2">
          <Button type="rose">Booking Jadwal</Button>
          <Button type="secondary">Lihat Treatment</Button>
        </div>
      </div>
      <div className="w-28 h-28 md:w-36 md:h-36 bg-white/80 rounded-2xl shadow-inner flex items-center justify-center text-4xl border border-white">
        ✦ ✨
      </div>
    </div>
  );
}