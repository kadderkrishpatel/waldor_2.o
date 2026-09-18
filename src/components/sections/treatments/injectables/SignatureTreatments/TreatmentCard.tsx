"use client";
import { useState } from "react";
import TreatmentRow from "./TreatmentRow";
import type { TreatmentCard as TreatmentCardType } from "./types";
import clsx from "clsx";

interface Props {
  card: TreatmentCardType;
}

export default function TreatmentCard({ card }: Props) {
  // First accordion open by default
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <article
      data-reveal
      data-direction="left"
      className={clsx(
        "rounded-[32px] bg-[#29302D] h-full overflow-hidden",
        card.fullWidth && "lg:col-span-2 h-auto",
      )}
    >
      <div className="p-8">
        <h3 className="text-[32px] text-[#ECE0D1]">{card.title}</h3>

        <p className="mt-4 text-[#9EA3A1]">{card.description}</p>

        {card.fromPrice && (
          <p className="mt-4 text-right font-fraunces text-[18px] text-[#ECE0D1]">
            {card.fromPrice}
          </p>
        )}
      </div>

      {card.rows.length === 1 && !card.rows[0].title ? (
        <div className="flex flex-col gap-4 border-t border-[#3D4844] px-8 py-6">
          {card.rows[0].description && (
            <p className="text-[15px] leading-6 text-[#BEC2C1]">
              {card.rows[0].description}
            </p>
          )}

          <p className="text-right font-fraunces text-[18px] text-[#ECE0D1]">
            {card.rows[0].price}
          </p>
        </div>
      ) : (
        <div className="scrollbar-hide max-h-[420px] overflow-y-auto">
          {card.rows.map((row, index) => (
            <TreatmentRow
              key={row.id}
              row={row}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      )}
    </article>
  );
}
