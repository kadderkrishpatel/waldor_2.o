import FaqSection from "@/src/components/sections/faq/FaqSection";
import HeroSection from "@/src/components/sections/faq/HeroSection";

export default function FaqPage() {
  return (
    <section className="relative bg-[#EBE0D1] rounded-[40px] py-16 md:py-20 lg:py-[40px] m-2 lg:m-4 overflow-hidden">
      <div className="mx-auto px-5 sm:px-6 lg:px-[60px]">
        <HeroSection />
        <FaqSection />
      </div>
    </section>
  );
}
