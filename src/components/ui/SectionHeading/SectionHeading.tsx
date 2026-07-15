import { SectionHeadingProps } from "./SectionHeading.types";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div>
      {eyebrow && (
        <p
          className={`
  text-xs
  font-bold
  uppercase
  mb-5
  ${light ? "text-[#C5A375]" : "text-[#997B4E]"}
  `}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`
  text-5xl
  lg:text-6xl
  leading-tight
  ${light ? "text-[#E3E5E5]" : "text-[#28302D]"}
  `}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`
  mt-6
  max-w-3xl
  text-base
  ${light ? "text-[#BEC2C0]" : "text-[#413627]"}
  `}
        >
          {description}
        </p>
      )}
    </div>
  );
}
