export default function TextArea({ label, placeholder, rows = 3, value, onChange, className = "" }) {
  return (
    <div className={`flex flex-col space-y-1.5 w-full ${className}`}>
      {label && <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">{label}</label>}
      <textarea 
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-rose-300 outline-none transition-all text-gray-700 resize-none"
      />
    </div>
  );
}