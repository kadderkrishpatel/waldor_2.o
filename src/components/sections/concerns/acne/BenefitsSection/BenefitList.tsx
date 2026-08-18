import BenefitItem from "./BenefitItem";
import type {
  AcneIndicationItem,
  PreventionItem,
} from "./BenefitsSection.types";

interface BenefitListProps {
  items: AcneIndicationItem[] | PreventionItem[];
}

export default function BenefitList({ items }: BenefitListProps) {
  return (
    <div className="mt-12">
      {items.map((benefit) => (
        <BenefitItem key={benefit.id} benefit={benefit} />
      ))}

      <div className="border-t border-white/10" />
    </div>
  );
}
