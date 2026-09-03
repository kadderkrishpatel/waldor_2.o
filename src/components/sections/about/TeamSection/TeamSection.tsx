"use client";
import { Eyebrow, Heading, Description } from "@/src/components/ui/Typography";
import TeamCard from "./TeamCard";
import { teamData, teamMembers } from "./TeamSection.data";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function TeamSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden lg:rounded-[32px] m-2 lg:m-4 min-h-[400px] sm:min-h-[400px]"
    >
      <div className="relative z-10 flex flex-col min-h-[400px] sm:min-h-[400px] px-5 py-6 sm:px-8 sm:py-8 lg:px-[60px] lg:py-[60px]">
        <div className="">
          <div className="max-w-full">
            <Eyebrow variant="secondary">{teamData.eyebrow}</Eyebrow>

            <Heading
              as="h2"
              className="mt-5"
              before={teamData.before}
              highlight={teamData.highlight}
            />

            <Description className="mt-6 max-w-3xl">
              {teamData.description}
            </Description>
          </div>

          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:gap-x-8 lg:gap-y-16 xl:grid-cols-3 mt-30">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
