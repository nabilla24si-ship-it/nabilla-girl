import * as React from "react"

export function Select({ children, onValueChange, ...props }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState("")

  return (
    <div className="relative w-full">
      {React.Children.map(children, child => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, { onClick: () => setIsOpen(!isOpen), selectedValue })
        }
        if (child.type === SelectContent && isOpen) {
          return React.cloneElement(child, { 
            onSelect: (val) => {
              setSelectedValue(val)
              setIsOpen(false)
              if (onValueChange) onValueChange(val)
            }
          })
        }
        return null
      })}
    </div>
  )
}

export function SelectTrigger({ className, children, selectedValue, ...props }) {
  return (
    <button
      type="button"
      className={`flex h-10 w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none placeholder:text-gray-400 ${className || ""}`}
      {...props}
    >
      <span>{selectedValue ? (selectedValue === "olivia" ? "Dr. Olivia Grant" : "Dr. David Carter") : children.props.placeholder || children}</span>
      <span className="text-gray-400 text-[10px] ml-2">▼</span>
    </button>
  )
}

export function SelectValue({ placeholder }) {
  return <span className="text-sm text-gray-500">{placeholder}</span>
}

export function SelectContent({ children, onSelect }) {
  return (
    <div className="absolute z-50 min-w-[8rem] overflow-hidden rounded-xl border border-gray-100 bg-white text-gray-800 shadow-md w-full mt-1 p-1">
      {React.Children.map(children, child => 
        React.cloneElement(child, { onClick: () => onSelect(child.props.value) })
      )}
    </div>
  )
}

export function SelectItem({ className, children, value, onClick, ...props }) {
  return (
    <div
      className={`relative flex w-full cursor-default select-none items-center rounded-lg py-2 pl-3 pr-2 text-sm outline-none hover:bg-gray-50 text-gray-700 transition-colors ${className || ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}