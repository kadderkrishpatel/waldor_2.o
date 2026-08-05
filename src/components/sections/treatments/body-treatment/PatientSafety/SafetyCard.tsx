import clsx from "clsx";
import { SafetyPoint } from "./PatientSafety.data";

interface Props {
  point: SafetyPoint;
}

export default function SafetyCard({ point }: Props) {
  return (
    <div
      data-reveal
      data-direction="left"
      className={clsx(
        "rounded-[24px] bg-[#F6EFE5] p-8 h-auto lg:h-[250px]",
        point.width === "wide" && "lg:col-span-2",
      )}
    >
      <h3 className="text-[28px] leading-tight text-[#36403C]">
        {point.title}
      </h3>

      <p className="mt-5 text-[15px] leading-7 text-[#6A655D]">
        {point.description}
      </p>
    </div>
  );
}
