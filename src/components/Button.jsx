export default function Button({ children, type = "primary", onClick, className = "" }) {
  const types = {
    primary: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700",
    success: "bg-green-100 hover:bg-green-200 text-green-700",
    danger: "bg-red-100 hover:bg-red-200 text-red-700",
    warning: "bg-yellow-100 hover:bg-yellow-200 text-yellow-700",
    rose: "bg-rose-500 hover:bg-rose-600 text-white shadow-sm"
  };

  return (
    <button
      onClick={onClick}
      className={`${types[type]} px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
}