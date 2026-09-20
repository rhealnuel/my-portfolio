// src/components/ui/Pill.tsx
import React from "react";

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pill({ children, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-paper px-3 py-1 font-mono text-xs text-ink-soft ${className}`}
    >
      {children}
    </span>
  );
}