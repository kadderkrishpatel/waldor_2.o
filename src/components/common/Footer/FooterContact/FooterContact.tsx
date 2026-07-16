import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Eyebrow } from "@/src/components/ui/Typography";
import { FooterContactProps } from "./FooterContact.types";

export default function FooterContact({
  phone,
  email,
  address,
  timings,
}: FooterContactProps) {
  return (
    <div>
      <Eyebrow variant="secondary" className="mb-5">
        Contact Us
      </Eyebrow>

      <div className="space-y-4 text-[#9EA3A1]">
        {/* Phone */}
        <div className="flex items-start gap-3">
          <Phone
            size={18}
            strokeWidth={1.8}
            className="mt-1 shrink-0 text-[#C5A375]"
          />
          <p className="text-sm leading-6">{phone}</p>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <Mail
            size={18}
            strokeWidth={1.8}
            className="mt-1 shrink-0 text-[#C5A375]"
          />
          <p className="text-sm leading-6 break-all">{email}</p>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2">
          <MapPin
            size={18}
            strokeWidth={1.8}
            className="mt-1 shrink-0 text-[#C5A375]"
          />
          <p className="text-sm leading-6">{address}</p>
        </div>

        {/* Timings */}
        {timings.map((item, index) => (
          <div
            key={item}
            className={`flex items-start gap-3 ${index > 0 ? "pl-[30px]" : ""}`}
          >
            {index === 0 && (
              <Clock
                size={18}
                strokeWidth={1.8}
                className="mt-1 shrink-0 text-[#C5A375]"
              />
            )}

            <p className="text-sm leading-6">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
