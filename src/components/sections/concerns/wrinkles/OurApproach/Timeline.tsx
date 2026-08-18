import { timelineSteps } from "./OurApproach.data";
import TimelineStep from "./TimelineStep";

export default function Timeline() {
  return (
    <div className="relative mt-20">
      {/* Line */}
      <div className="hidden lg:flex absolute left-0 right-0 top-[8px] h-px bg-[#D8C9B4]" />

      <div className="grid gap-10 lg:grid-cols-4">
        {timelineSteps.map((step) => (
          <TimelineStep key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
}
