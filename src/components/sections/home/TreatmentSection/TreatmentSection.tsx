import Image from "next/image";
import Link from "next/link";
import { treatmentData } from "./TreatmentSection.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import { ArrowDownRight } from "lucide-react";

export default function TreatmentSection() {
  return (
    <section className="bg-[#EBE0D1] py-24 rounded-[40px] lg:m-4">
      <div className="mx-auto px-16 lg:px-[60px] py-[120px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-[80px]">
          <div className="flex flex-col gap-[20px]">
            <Eyebrow variant="secondary">{treatmentData.eyebrow}</Eyebrow>
            <Heading
              className="text-[#29302D] lg:text-[64px]"
              before={treatmentData.heading.before}
              highlight={treatmentData.heading.highlight}
            />
          </div>

          <Description className="mt-8 max-w-lg text-[#423627]">
            {treatmentData.description}
          </Description>
        </div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatmentData.treatments.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={`group relative overflow-hidden rounded-[999px] h-[420px] sm:h-[520px] md:h-[620px] lg:h-[700px] xl:h-[820px] 2xl:h-[950px] border-[10px] border-[#D8C2A3] ${item.offset ? "lg:mt-20 xl:mt-24" : ""}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 px-[100px] py-[50px] h-[702px] lg:h-[950px] flex flex-col justify-between w-full">
                <div className="relative h-[50px] w-full flex justify-center">
                  <ArrowDownRight height={56} width={56} />
                </div>
                <div className="relative flex flex-col w-full justify-center items-center gap-[10px]">
                  <h3 className="text-white font-heading italic text-3xl text-[#F3EDE3]">
                    {item.title}
                  </h3>

                  <p className="text-white/80 text-[15px] max-w-xs font-henken w-[200px] text-center text-[#D8C2A3]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
