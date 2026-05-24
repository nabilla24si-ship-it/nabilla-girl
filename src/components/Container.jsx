export default function Container({ children, className = "" }) {
  return (
    <div className={`container mx-auto py-6 px-4 md:px-6 max-w-7xl ${className}`}>
      {children}
    </div>
  );
}