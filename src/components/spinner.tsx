// src/components/spinner.tsx
import React from "react";

const Spinner = () => (
  <div className="flex items-center justify-center py-12">
    <svg className="h-6 w-6 animate-spin text-ink-soft" viewBox="0 0 24 24">
      <circle
        className="opacity-20"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <path
        className="opacity-80"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  </div>
);

export default Spinner;