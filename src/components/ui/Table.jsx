import * as React from "react"

export const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table ref={ref} className={`w-full caption-bottom text-sm border-collapse ${className || ""}`} {...props} />
  </div>
))
Table.displayName = "Table"

export const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={`border-b border-gray-100 bg-gray-50/50 ${className || ""}`} {...props} />
))
TableHeader.displayName = "TableHeader"

export const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className || ""}`} {...props} />
))
TableBody.displayName = "TableBody"

export const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr ref={ref} className={`border-b border-gray-100 transition-colors hover:bg-gray-50/40 ${className || ""}`} {...props} />
))
TableRow.displayName = "TableRow"

export const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th ref={ref} className={`h-10 px-4 text-left align-middle font-bold text-gray-400 text-xs uppercase tracking-wider ${className || ""}`} {...props} />
))
TableHead.displayName = "TableHead"

export const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td ref={ref} className={`p-4 align-middle text-sm text-gray-600 ${className || ""}`} {...props} />
))
TableCell.displayName = "TableCell"