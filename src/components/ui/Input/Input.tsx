import { cn } from "@/src/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium">{label}</label>}

      <input
        className={cn(
          "w-full",
          "rounded-lg",
          "border",
          "px-4",
          "py-3",
          "outline-none",
          "focus:ring-2",
          className,
        )}
        {...props}
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
