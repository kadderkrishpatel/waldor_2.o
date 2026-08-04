"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { faqData, FAQCategory, faqSectionData } from "./FaqSection.data";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

const filters: {
  label: string;
  value: FAQCategory;
}[] = [
  { label: "Treatments", value: "treatments" },
  { label: "Concerns", value: "concerns" },
  { label: "Clinic", value: "clinic" },
];

export default function FaqSection() {
  const pathname = usePathname();
  const router = useRouter();
  const sectionRef = useSectionReveal();

  const getCategoryFromPath = (): FAQCategory => {
    if (pathname.includes("/concerns")) return "concerns";
    if (pathname.includes("/clinic")) return "clinic";

    return "treatments";
  };

  const [activeFilter, setActiveFilter] = useState<FAQCategory>(
    getCategoryFromPath(),
  );

  const [openItem, setOpenItem] = useState<number>(() => {
    const firstFaq = faqData.find(
      (faq) => faq.category === getCategoryFromPath(),
    );

    return firstFaq?.id ?? -1;
  });

  useEffect(() => {
    const category = getCategoryFromPath();

    setActiveFilter(category);

    const firstFaq = faqData.find((faq) => faq.category === category);

    setOpenItem(firstFaq?.id ?? -1);
  }, [pathname]);

  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => faq.category === activeFilter);
  }, [activeFilter]);

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 py-5">
      <div className="rounded-[40px] bg-[#3D4945] mx-auto px-6 lg:px-[60px] lg:pt-[120px] pt-[80px]">
        {/* Heading */}
        <div className="mb-16">
          <Eyebrow variant="secondary">{faqSectionData.eyebrow}</Eyebrow>

          <Heading
            className="mt-5 text-[48px] text-[#E4E6E5] lg:text-[64px] lg:font-[300]"
            before={faqSectionData.heading.before}
            highlight={faqSectionData.heading.highlight}
          />
        </div>

        {/* Accordion */}
        <div className="divide-y divide-[#7E858266]">
          {filteredFAQs.map((faq) => {
            const isOpen = openItem === faq.id;

            return (
              <motion.div
                key={faq.id}
                data-reveal
                data-direction="left"
                layout
                transition={{
                  layout: {
                    duration: 0.35,
                    ease: "easeInOut",
                  },
                }}
                className={clsx(
                  "overflow-hidden px-8 transition-colors duration-300",
                  isOpen ? "bg-[#515D59]" : "bg-transparent",
                )}
              >
                <button
                  onClick={() => setOpenItem(isOpen ? -1 : faq.id)}
                  className="flex w-full items-center justify-between py-8 text-left"
                >
                  <h3 className="text-[22px] text-[#C5A375]">{faq.question}</h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {isOpen ? (
                      <Minus size={28} className="text-[#C5A375]" />
                    ) : (
                      <Plus size={28} className="text-[#C5A375]" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -8 }}
                        animate={{ y: 0 }}
                        exit={{ y: -8 }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="pb-8 pr-20"
                      >
                        <p className="text-[15px] leading-7 text-[#E4E6E5] max-w-[80%]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
