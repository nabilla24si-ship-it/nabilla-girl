import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

export default function Alert({ message, type = "success" }) {
  const styles = {
    success: "bg-green-50 border-green-100 text-green-800 icon-green-500",
    warning: "bg-yellow-50 border-yellow-100 text-yellow-800 icon-yellow-500",
    danger: "bg-red-50 border-red-100 text-red-800 icon-red-500",
  };

  const icons = {
    success: <FaCheckCircle className="text-green-500 text-base" />,
    warning: <FaExclamationTriangle className="text-yellow-500 text-base" />,
    danger: <FaInfoCircle className="text-red-500 text-base" />,
  };

  return (
    <div className={`p-4 rounded-xl border text-xs font-medium flex items-center gap-3 ${styles[type]}`}>
      {icons[type]}
      <span className="leading-relaxed">{message}</span>
    </div>
  );
}