export function InputField({ label, type, name, value, onChange, error, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-blue-500 outline-none`}
      />
      {/* Alert Error di bawah input */}
      {error && (
        <div className="mt-1 p-2 text-xs text-red-700 bg-red-100 border border-red-200 rounded">
           {error}
        </div>
      )}
    </div>
  );
}

export function SelectField({ label, name, value, onChange, options, error }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-blue-500 outline-none`}
      >
        <option value="">Pilih {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {error && (
        <div className="mt-1 p-2 text-xs text-red-700 bg-red-100 border border-red-200 rounded">
           {error}
        </div>
      )}
    </div>
  );
}