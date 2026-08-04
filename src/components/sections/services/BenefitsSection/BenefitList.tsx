import BenefitItem from "./BenefitItem";
import { benefits } from "./BenefitsSection.data";

export default function BenefitList() {
  return (
    <div className="mt-12">
      {benefits.map((benefit) => (
        <BenefitItem key={benefit.id} benefit={benefit} />
      ))}

      {/* Bottom border */}
      <div className="border-t border-white/10" />
    </div>
  );
}
