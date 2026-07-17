"use client";
import { forwardRef } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextAreaFieldProps {
  label: string;
  placeholder?: string;
  rows?: number;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, placeholder, rows = 6, registration, error }, ref) => {
    return (
      <div className="flex flex-col gap-3">
        {/* Label */}
        <label
          className={`text-xs font-bold uppercase tracking-[2px] transition-colors duration-300
            ${error ? "text-red-500" : "text-[#C5A375]"}
          `}
        >
          {label}
        </label>

        {/* Textarea */}
        <textarea
          {...registration}
          ref={(e) => {
            registration.ref(e);

            if (typeof ref === "function") {
              ref(e);
            } else if (ref) {
              ref.current = e;
            }
          }}
          rows={rows}
          placeholder={placeholder}
          className={`w-full resize-none bg-transparent border-b pb-4 text-[15px] leading-7 text-[#ECE0D1] placeholder:text-[#7E8582] outline-none transition-all duration-300
            ${
              error
                ? "border-red-500"
                : "border-[#59615E] focus:border-[#C5A375]"
            }
          `}
        />

        {/* Error */}
        {error && (
          <div className="min-h-[20px]">
            <p className="text-sm text-red-500">{error.message}</p>
          </div>
        )}
      </div>
    );
  },
);

TextAreaField.displayName = "TextAreaField";
export default TextAreaField;
