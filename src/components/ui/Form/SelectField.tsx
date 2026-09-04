"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FieldError } from "react-hook-form";
import { cn } from "@/src/lib/utils";

interface SelectFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: FieldError;
}

export default function SelectField({
  label,
  options,
  value,
  onChange,
  onBlur,
  placeholder = "Select a treatment",
  error,
}: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        onBlur?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onBlur]);

  return (
    <div className="flex flex-col gap-3" ref={containerRef}>
      {/* Label */}
      <label
        className={cn(
          "text-xs font-bold uppercase tracking-[2px] transition-colors duration-300",
          error ? "text-red-500" : "text-[#C5A375]",
        )}
      >
        {label}
      </label>

      {/* Select */}
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setOpen((prev) => {
              const next = !prev;
              if (prev) onBlur?.();
              return next;
            });
          }}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            "flex w-full items-center justify-between gap-3 border-b bg-transparent pb-4 text-left text-[15px] outline-none transition-all duration-300",
            value ? "text-[#ECE0D1]" : "text-[#ECE0D1]/50",
            error
              ? "border-red-500"
              : open
                ? "border-[#C5A375]"
                : "border-[#59615E]",
          )}
        >
          <span className="truncate">{value || placeholder}</span>

          <ChevronDown
            size={18}
            className={cn(
              "shrink-0 text-[#C5A375] transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>

        {/* Dropdown panel — always opens downward */}
        <div
          role="listbox"
          className={cn(
            "absolute left-0 right-0 top-full z-30 mt-2 origin-top overflow-hidden rounded-[16px] border border-white/10 bg-[#1F2422] shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-200",
            open
              ? "pointer-events-auto max-h-64 scale-100 opacity-100"
              : "pointer-events-none max-h-0 scale-95 opacity-0",
          )}
        >
          <div className="scrollbar-hide max-h-64 overflow-y-auto py-1.5">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={value === option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                  onBlur?.();
                }}
                className={cn(
                  "block w-full border-0 px-4 py-2.5 text-left font-hanken text-[14px] tracking-[0.02em] transition-colors duration-200",
                  value === option
                    ? "bg-[#C5A375]/15 text-[#C5A375]"
                    : "text-[#ECE0D1]/80 hover:bg-white/5 hover:text-[#ECE0D1]",
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="min-h-[20px]">
          <p className="text-sm text-red-500">{error.message}</p>
        </div>
      )}
    </div>
  );
}
