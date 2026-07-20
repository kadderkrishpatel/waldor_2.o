import Link from "next/link";

import { Eyebrow } from "@/src/components/ui/Typography";
import { FooterColumnProps } from "./FooterColumn.types";

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <Eyebrow variant="secondary" className="mb-5">
        {title}
      </Eyebrow>

      <nav data-reveal data-direction="left" className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="
              block
              text-sm
              text-[#9EA3A1]
              transition-colors
              duration-300
              hover:text-white
            "
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
