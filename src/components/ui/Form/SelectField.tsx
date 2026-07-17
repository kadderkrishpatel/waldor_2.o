"use client";

import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface SelectFieldProps {
  label: string;
  options: string[];
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, options, registration, error }, ref) => {
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

        {/* Select */}
        <div className="relative">
          <select
            {...registration}
            ref={(e) => {
              registration.ref(e);

              if (typeof ref === "function") {
                ref(e);
              } else if (ref) {
                ref.current = e;
              }
            }}
            defaultValue=""
            className={`w-full appearance-none bg-transparent border-b pb-4 pr-10 text-[15px] text-[#ECE0D1] outline-none transition-all duration-300
            ${
              error
                ? "border-red-500"
                : "border-[#59615E] focus:border-[#C5A375]"
            }
          `}
          >
            <option value="" disabled className="text-black">
              Select a treatment
            </option>

            {options.map((option) => (
              <option key={option} value={option} className="text-black">
                {option}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-0 top-1 text-[#C5A375]"
          />
        </div>

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

SelectField.displayName = "SelectField";
export default SelectField;
