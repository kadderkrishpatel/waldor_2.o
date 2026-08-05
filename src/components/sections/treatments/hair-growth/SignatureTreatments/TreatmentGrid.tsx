import TreatmentCard from "./TreatmentCard";
import type { TreatmentCard as TreatmentCardType } from "./types";

interface Props {
  cards: TreatmentCardType[];
}

export default function TreatmentGrid({ cards }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {cards.map((card, index) => (
        <div key={card.id} className="">
          <TreatmentCard card={card} />
        </div>
      ))}
    </div>
  );
}
