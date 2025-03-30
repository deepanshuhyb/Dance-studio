import React from "react";

export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
        variant === "default"
          ? "bg-orange-500 text-white"
          : "border border-orange-500 text-orange-500"
      }`}
    >
      {children}
    </span>
  );
}
