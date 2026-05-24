export default function Avatar({ name, src, size = "md" }) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base"
  };

  return (
    <div className="flex items-center gap-2">
      {src ? (
        <img 
          src={src} 
          alt={name} 
          className={`${sizes[size]} rounded-full object-cover border border-gray-100`} 
        />
      ) : (
        <div className={`${sizes[size]} rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold`}>
          {name ? name.charAt(0).toUpperCase() : "U"}
        </div>
      )}
    </div>
  );
}