import Link from "next/link";
import Button from "@/src/components/ui/Button";
import { Description, Heading } from "@/src/components/ui/Typography";
import { footerData } from "./Footer.data";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative rounded-[32px] bg-[#28302D] pt-20 lg:m-4">
      <Image
        src={footerData.footerRightImg}
        alt=""
        width={209.37}
        height={316.48}
        className="absolute right-0 top-0"
      />

      <Image
        src={footerData.footerLeftImg}
        alt=""
        width={141.45}
        height={334.26}
        className="absolute left-0 top-[20%]"
      />

      <div className="mx-auto px-6 lg:px-[60px]">
        {/* CTA */}
        <div className="mb-20 flex flex-col items-center text-center">
          <Heading
            className="max-w-[700px] text-[#F3EDE3]"
            highlightClassName="text-[#836D4E]"
            before="Ready for"
            highlight="lasting vitality?"
          />

          <Description className="mt-8 max-w-[650px] text-white">
            At WALDOR Clinic, every treatment is designed around one thing…YOU!
          </Description>

          <Button href="/contact" variant="gold" className="mt-10">
            Book Your Glow Session
          </Button>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 border-t border-[#3D4844] py-10 md:grid-cols-2 lg:grid-cols-4">
          {footerData.columns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}

          <FooterContact {...footerData.contact} />
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-5 border-t border-[#3D4844] pt-10 md:flex-row">
          <p className="text-xs text-[#C5A375]">
            © {currentYear} Waldor Clinic · Privacy · Terms
          </p>

          <div className="flex items-center gap-5">
            {footerData.socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="opacity-70 transition-opacity duration-300 hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="relative mt-16 h-[231px] w-full">
          <Image
            src={footerData.footerImg}
            alt="Waldor Clinic"
            fill
            priority
            className="object-fill"
          />
        </div>
      </div>
    </footer>
  );
}
