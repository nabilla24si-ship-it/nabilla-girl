import { FaStar } from "react-icons/fa";

export default function TreatmentRankRow({ rank, name, rating, reviews }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 px-2 rounded-xl transition-colors">
      <div className="flex items-center space-x-3">
        <span className="w-6 h-6 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center text-xs font-extrabold">
          #{rank}
        </span>
        <div>
          <h4 className="text-xs font-bold text-gray-800">{name}</h4>
          <div className="flex items-center space-x-1 mt-0.5 text-[10px] text-gray-400">
            <FaStar className="text-amber-400" />
            <span className="font-semibold text-gray-600">{rating}</span>
            <span>• ({reviews} ulasan)</span>
          </div>
        </div>
      </div>
    </div>
  );
}