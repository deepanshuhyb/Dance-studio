"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  className?: string;
}

export default function Button({
  children,
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "py-2 px-4 rounded-md text-sm font-medium transition-colors";
  const variants = {
    default:
      "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700",
    outline: "border border-orange-500 text-orange-500 hover:bg-orange-50",
    ghost: "text-orange-500 hover:bg-orange-50",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
