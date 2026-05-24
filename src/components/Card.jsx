export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border border-rose-50/60 rounded-2xl p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}