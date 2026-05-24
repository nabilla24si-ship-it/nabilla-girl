export default function SurgeryScheduleRow({ doctor, patient, room, time, checked = false }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50/60 hover:bg-gray-50 rounded-xl transition border border-transparent hover:border-gray-100">
      <div className="flex items-center space-x-3">
        <input type="checkbox" defaultChecked={checked} className="rounded accent-rose-500 w-3.5 h-3.5 cursor-pointer" />
        <div>
          <h4 className="text-xs font-bold text-gray-800">{doctor}</h4>
          <p className="text-[10px] text-gray-400">{patient}</p>
        </div>
      </div>
      <div className="text-right">
        <span className="inline-block px-1.5 py-0.5 text-[9px] bg-emerald-50 text-emerald-700 rounded-md font-bold">
          {room}
        </span>
        <p className="text-[10px] text-gray-500 font-medium mt-1">{time}</p>
      </div>
    </div>
  );
}