export default function Badge({ children, type = "success" }) {
  const types = {
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
    primary: "bg-blue-100 text-blue-700",
    secondary: "bg-gray-100 text-gray-700",
    rose: "bg-rose-100 text-rose-700"
  };

  return (
    <span className={`${types[type] || types.success} px-3 py-1 rounded-full text-xs font-bold inline-block capitalize`}>
      {children}
    </span>
  );
}