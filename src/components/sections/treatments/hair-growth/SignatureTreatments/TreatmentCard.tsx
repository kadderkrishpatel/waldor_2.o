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
        "rounded-[32px] bg-[#29302D] h-[320px] overflow-hidden",
        card.fullWidth && "lg:col-span-2",
      )}
    >
      <div className="p-8">
        <h3 className="text-[32px] text-[#ECE0D1] h-[90px]">{card.title}</h3>

        <p className="mt-4 text-[#9EA3A1] h-[80px]">{card.description}</p>
      </div>

      {card.rows.map((row, index) => (
        <TreatmentRow
          key={row.id}
          row={row}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </article>
  );
}
