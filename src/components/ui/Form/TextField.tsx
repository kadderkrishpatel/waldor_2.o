"use client";

import { forwardRef } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextFieldProps {
  label: string;
  type?: string;
  placeholder?: string;

  registration: UseFormRegisterReturn;

  error?: FieldError;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, type = "text", placeholder, registration, error }, ref) => {
    return (
      <div className="flex flex-col gap-3">
        {/* Label */}
        <label
          className={`text-xs font-bold tracking-[2px] uppercase transition-colors duration-300
            ${error ? "text-red-500" : "text-[#C5A375]"}
          `}
        >
          {label}
        </label>

        {/* Input */}
        <input
          {...registration}
          ref={(e) => {
            registration.ref(e);
            if (typeof ref === "function") {
              ref(e);
            } else if (ref) {
              ref.current = e;
            }
          }}
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full border-b bg-transparent pb-4 text-[15px] text-[#ECE0D1] placeholder:text-[#7E8582] outline-none transition-all duration-300
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

TextField.displayName = "TextField";
export default TextField;
