import { contactSectionData } from "./ContactSection.data";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative bg-[#3D4844] py-16 md:py-20 lg:py-[40px] m-2 lg:m-4 overflow-hidden">
      <div className="mx-auto px-2 sm:px-6 lg:px-[60px]">
        <div className="flex flex-col xl:flex-row items-start gap-12 lg:gap-16 xl:gap-20">
          {/* Left */}
          <div className="w-full lg:w-[40%] shrink-0">
            <ContactInfo items={contactSectionData.info} />
          </div>

          {/* Right */}
          <div className="flex-1 mx-auto flex justify-center">
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
