"use client"

export default function Button({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string; [x: string]: any }) {
  return (
    <button className={`py-2 px-4 rounded-md text-sm font-medium ${className}`} {...props}>
      {children}
    </button>
  )
}

