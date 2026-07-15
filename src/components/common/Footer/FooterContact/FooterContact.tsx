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

      <div className="space-y-3 text-sm text-[#9EA3A1]">
        <p>{phone}</p>

        <p>{email}</p>

        <p>{address}</p>

        {timings.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}
