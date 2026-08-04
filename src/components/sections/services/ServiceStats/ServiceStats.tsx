"use client";
import StatItem from "./StatItem";
import { serviceStats } from "./ServiceStats.data";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function ServiceStats() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="m-2 lg:m-4 bg-[#29302D] rounded-[32px]"
    >
      <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-[60px] lg:py-[100px] text-center">
        {/* Stats */}
        <div className="grid gap-x-5 gap-y-10 md:gap-x-5 md:gap-y-5 lg:grid-cols-3 ">
          {serviceStats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
