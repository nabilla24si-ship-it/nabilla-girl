import Button from "./Button";

export default function SimpleModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden animate-fade-in border border-gray-50">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-rose-50/20">
          <h3 className="font-bold text-gray-800 text-base">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl font-semibold leading-none">&times;</button>
        </div>
        <div className="p-6 text-sm text-gray-600">{children}</div>
        <div className="px-6 py-3 bg-gray-50 flex justify-end gap-2 border-t border-gray-100">
          <Button type="secondary" onClick={onClose}>Batal</Button>
          <Button type="rose" onClick={onClose}>Konfirmasi</Button>
        </div>
      </div>
    </div>
  );
}