import { ContactInfoItem } from "./ContactSection.types";
import ContactItem from "./ContactItem";

interface ContactInfoProps {
  items: ContactInfoItem[];
}

export default function ContactInfo({ items }: ContactInfoProps) {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <div key={item.id} className={index === 0 ? "pt-8 lg:pt-20" : ""}>
          <ContactItem item={item} />

          {index !== items.length - 1 && (
            <div className="my-8 h-px w-full bg-[#7E858240]" />
          )}
        </div>
      ))}
    </div>
  );
}
