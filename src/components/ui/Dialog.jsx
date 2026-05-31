import * as React from "react"

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-200">
      {/* Backdrop blur transparan */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity" onClick={() => onOpenChange(false)} />
      {children}
    </div>
  )
}

// PERBAIKAN TOTAL: Memaksa elemen anak (Button) langsung keluar ke screen
export function DialogTrigger({ children, onClick, ...props }) {
  if (!children) return null;
  
  // Jika children berupa element tunggal, suntikkan onClick interaktif ke dalamnya
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (e) => {
        if (children.props.onClick) children.props.onClick(e);
        if (onClick) onClick(e);
      }
    });
  }
  
  return <div onClick={onClick} {...props}>{children}</div>;
}

export function DialogContent({ className, children, ...props }) {
  return (
    <div className={`fixed z-50 grid w-full max-w-sm scale-100 gap-4 border border-gray-100 bg-white p-6 shadow-xl rounded-2xl animate-in zoom-in-95 duration-200 ${className || ""}`} {...props}>
      {children}
    </div>
  )
}

export function DialogHeader({ className, ...props }) {
  return <div className={`flex flex-col space-y-1.5 text-left ${className || ""}`} {...props} />
}

export function DialogFooter({ className, ...props }) {
  return <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2 pt-2 ${className || ""}`} {...props} />
}

export function DialogTitle({ className, ...props }) {
  return <h3 className={`text-base font-bold leading-none tracking-tight text-gray-800 ${className || ""}`} {...props} />
}

export function DialogDescription({ className, ...props }) {
  return <p className={`text-xs text-gray-500 leading-relaxed ${className || ""}`} {...props} />
}