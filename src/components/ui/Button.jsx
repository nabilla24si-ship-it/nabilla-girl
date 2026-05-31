import * as React from "react"

export const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all active:scale-95 disabled:opacity-50 shrink-0 select-none"
  
  const variants = {
    default: "bg-rose-600 text-white hover:bg-rose-700 shadow-sm",
    outline: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
    destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm"
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-xs rounded-lg",
    icon: "h-9 w-9",
    "icon-sm": "h-7 w-7 rounded-lg",
  }

  const currentVariant = variants[variant] || variants.default
  const currentSize = sizes[size] || sizes.default

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${currentVariant} ${currentSize} ${className || ""}`}
      {...props}
    />
  )
})
Button.displayName = "Button"