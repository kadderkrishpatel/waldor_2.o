"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { headerData } from "./Header.data";
import { cn } from "@/src/utils/cn";
import Button from "@/src/components/ui/Button";

interface HeaderBgProps {
  bg?: string;
}

export default function Header({ bg = "bg-white/10" }: HeaderBgProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-5 lg:px-[60px] pt-8 max-w-[1440px] mx-auto">
      <div
        className={cn(
          "backdrop-blur-md rounded-[24px] px-6 py-3 flex items-center justify-between",
          bg,
        )}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src={headerData.logo}
            alt="Waldor Clinic"
            width={160}
            height={40}
            className="h-[20px] lg:h-[28px] w-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="eager"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-8">
          {headerData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#EBE0D1] text-sm uppercase hover:text-white transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden xl:block">
          <Button variant="primary" href="/contact" className="rounded-full px-8 py-5">
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden text-[#EBE0D1] text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden mt-3 bg-[#323C38] rounded-[24px] p-6">
          <nav className="flex flex-col gap-5">
            {headerData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#EBE0D1] text-sm uppercase"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-[#C5A375] text-[#1E2422] text-center py-4 rounded-full font-bold"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
