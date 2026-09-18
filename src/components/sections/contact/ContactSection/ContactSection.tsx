"use client";
import { ArrowUpRight } from "lucide-react";
import { contactSectionData } from "./ContactSection.data";
import { mapSectionData } from "../MapSection/MapSection.data";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function ContactSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#3D4844] py-16 md:py-20 lg:py-[40px] m-2 lg:m-4 overflow-hidden"
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-[60px]">
        <div className="flex flex-col xl:flex-row items-start gap-12 lg:gap-16 xl:gap-20">
          {/* Left — address, hours, directions & map together */}
          <div
            data-reveal
            data-direction="left"
            className="w-full lg:w-[40%] shrink-0"
          >
            <ContactInfo items={contactSectionData.info} />

            <div className="my-8 h-px w-full bg-[#7E858240]" />

            <div className="overflow-hidden rounded-[20px] border border-[#7E858240] bg-[#1a1f1d]">
              <iframe
                src={mapSectionData.embedSrc}
                title={mapSectionData.address}
                width="100%"
                height="220"
                style={{
                  border: 0,
                  filter: "invert(92%) hue-rotate(180deg) contrast(90%)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[220px] w-full"
              />
            </div>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapSectionData.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-sm tracking-[1px] text-[#C5A375] transition-colors hover:text-[#ECE0D1]"
            >
              GET DIRECTIONS
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Right */}
          <div
            data-reveal
            data-direction="left"
            className="flex-1 mx-auto flex justify-center"
          >
            <ContactForm
              heading={contactSectionData.form.heading}
              disclaimer={contactSectionData.form.disclaimer}
              treatmentOptions={contactSectionData.form.treatmentOptions}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
