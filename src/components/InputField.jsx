export default function InputField({ label, placeholder, type = "text", value, onChange, className = "" }) {
  return (
    <div className={`flex flex-col space-y-1.5 w-full ${className}`}>
      {label && <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">{label}</label>}
      <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-rose-300 focus:ring-1 focus:ring-rose-300 outline-none transition-all text-gray-700"
      />
    </div>
  );
}