import { ReactNode } from "react";
import clsx from "clsx";

interface ServiceSectionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

interface ServiceSectionHeaderProps {
  children: ReactNode;
  className?: string;
}

export default function ServiceSection({
  children,
  className,
  innerClassName,
}: ServiceSectionProps) {
  return (
    <section
      className={clsx(
        "bg-[#3D4844] px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5",
        className,
      )}
    >
      <div
        className={clsx(
          "overflow-hidden rounded-[24px] lg:rounded-[32px]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function ServiceSectionHeader({
  children,
  className,
}: ServiceSectionHeaderProps) {
  return <div className={clsx("flex flex-col", className)}>{children}</div>;
}
