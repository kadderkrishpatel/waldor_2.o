import Image from "next/image";
import { aboutData } from "./AboutSection.data";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#3D4844] py-24 lg:m-4">
      <div className="container mx-auto px-6 lg:px-[60px]">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Eyebrow variant="secondary" className="mb-6">
            {aboutData.eyebrow}
          </Eyebrow>

          <Heading
            before={aboutData.description}
            highlight=""
            after=""
            className="max-w-[850px] font-heading text-4xl leading-[115%] tracking-[-0.48px] text-[#E3E5E5] lg:text-[48px] font-light text-[28px]"
          />
        </div>
      </div>

      {/* Decorative Image */}
      {aboutData.image && (
        <div className="absolute bottom-0 right-0 hidden lg:block">
          <div className="relative h-[320px] w-[170px]">
            <Image
              src={aboutData.image}
              alt="Waldor Clinic"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      )}
    </section>
  );
}
