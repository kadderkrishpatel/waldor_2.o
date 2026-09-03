"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { TeamMember } from "./TeamSection.data";

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article data-reveal data-direction="left" className="flex flex-col">
      <div className="relative h-[530px] w-full overflow-hidden rounded-[32px] bg-[#515D59] lg:h-[750px]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="eager"
          className="object-cover"
        />
      </div>

      <h3 className="mt-6 font-fraunces text-xl text-[#F3ECE3] sm:text-2xl">
        {member.name}
      </h3>

      <p className="mt-1 font-hanken text-xs font-semibold uppercase tracking-[0.14em] text-[#C5A375]">
        {member.designation}
      </p>

      {member.description && (
        <>
          <p
            className={cn(
              "mt-3 font-hanken text-sm leading-6 text-[#9FA6A2]",
              !expanded && "line-clamp-3",
            )}
          >
            {member.description}
          </p>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-3 flex w-fit items-center gap-1.5 font-hanken text-xs font-semibold uppercase tracking-[0.14em] text-[#C5A375] cursor-pointer"
          >
            {expanded ? "View Less" : "View More"}

            <ChevronDown
              size={14}
              className={cn(
                "transition-transform duration-300",
                expanded && "rotate-180",
              )}
            />
          </button>
        </>
      )}
    </article>
  );
}
