"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { headerData } from "./Header.data";
import type { HeaderProps } from "./Header.types";
import { cn } from "@/src/utils/cn";
import Button from "@/src/components/ui/Button";
import "./Header.css";

export default function Header({ bg = "bg-white/10" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [mobileSubMenu, setMobileSubMenu] = useState<number | null>(null);

  const getMegaMenu = (id: number) => {
    return headerData.megaMenus?.find((menu) => menu.id === id);
  };

  const handleMobileMenuToggle = (id: number) => {
    setMobileSubMenu((current) => (current === id ? null : id));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSubMenu(null);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-[1440px] px-5 pt-8 lg:px-[60px]">
      <div className="relative">
        {/* Header */}
        <div
          className={cn(
            "flex items-center justify-between",
            "rounded-[24px]",
            "px-6 py-3",
            "backdrop-blur-md",
            bg,
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="relative z-10 shrink-0"
          >
            <Image
              src={headerData.logo}
              alt="Waldor Clinic"
              width={160}
              height={40}
              className="h-[20px] w-auto lg:h-[28px]"
              sizes="160px"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 xl:flex">
            {headerData.navigation.map((item) => {
              const megaMenu = getMegaMenu(item.id);
              const hasMegaMenu = Boolean(megaMenu);

              {
                /* Normal Navigation */
              }
              if (!hasMegaMenu) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "group relative font-hanken",
                      "text-[12px]",
                      "font-medium",
                      "uppercase",
                      "tracking-[0.08em]",
                      "text-[#EBE0D1]",
                      "transition-colors duration-300",
                      "hover:text-white",
                    )}
                  >
                    {item.label}

                    {/* Animated Underline */}
                    <span
                      className={cn(
                        "absolute",
                        "-bottom-1.5",
                        "left-0",
                        "h-px",
                        "w-full",
                        "origin-left",
                        "scale-x-0",
                        "bg-[#E2D1BA]",
                        "transition-transform",
                        "duration-300",
                        "ease-out",
                        "group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={item.id}
                  className="static"
                  onMouseEnter={() => setActiveMenu(item.id)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {/* Navigation Item */}
                  <Link
                    href={item.href}
                    className={cn(
                      "menu-nav relative z-20",
                      "font-hanken",
                      "text-[12px]",
                      "font-medium",
                      "uppercase",
                      "tracking-[0.08em]",
                      "text-[#EBE0D1]",
                      "transition-colors duration-300",
                      "hover:text-white",
                    )}
                  >
                    {item.label}

                    {/* Animated Underline */}
                    <span
                      className={cn(
                        "animated-underline absolute",
                        "-bottom-1.5",
                        "left-0",
                        "h-px",
                        "w-full",
                        "origin-left",
                        "scale-x-0",
                        "bg-[#E2D1BA]",
                        "transition-transform",
                        "duration-300",
                        "ease-out",
                        "group-hover:scale-x-100",
                      )}
                    />
                  </Link>

                  {/* Desktop Mega Menu */}
                  {activeMenu === item.id && megaMenu && (
                    <div
                      className={cn(
                        "absolute",
                        "left-0",
                        "right-0",
                        "top-full",
                        "z-50",
                        "pt-10",
                      )}
                    >
                      {/* Mega Menu Panel */}
                      <div
                        className={cn(
                          "overflow-hidden",
                          "rounded-[20px]",
                          "border border-[#D8C8B3]",
                          "bg-[#ECE0D1]",
                          "shadow-[0_20px_50px_rgba(0,0,0,0.18)]",
                        )}
                        style={{ padding: "20px" }}
                      >
                        {/* Mega Menu Header */}
                        <div className="px-6 pb-4 pt-6">
                          <span
                            className={cn(
                              "font-hanken",
                              "text-[12px]",
                              "font-medium",
                              "uppercase",
                              "tracking-[0.18em]",
                              "text-[#836D4E]",
                            )}
                          >
                            {megaMenu.label}
                          </span>
                        </div>

                        {/* Mega Menu Items */}
                        <div className="grid grid-cols-2 gap-3 px-4 pb-4">
                          {megaMenu.items.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.href}
                              className={cn(
                                "sub-menu-items group",
                                "flex items-center",
                                "gap-2",
                                "self-stretch",
                                "rounded-[10px]",
                                "bg-[#E2D1BA]",
                                "px-3 py-2",
                                "transition-colors duration-200",
                                "hover:bg-[#D8C5A9]",
                              )}
                            >
                              <div className="min-w-0 flex-1">
                                {/* Subitem Label */}
                                <p
                                  className={cn(
                                    "font-fraunces",
                                    "text-[22px]",
                                    "font-normal",
                                    "not-italic",
                                    "leading-[135%]",
                                    "text-[#515D59]",
                                  )}
                                  style={{ color: "#515D59" }}
                                >
                                  {subItem.label}
                                </p>

                                {/* Subitem Description */}
                                <p
                                  className={cn(
                                    "mt-1",
                                    "font-hanken",
                                    "text-[15px]",
                                    "font-normal",
                                    "not-italic",
                                    "leading-[160%]",
                                    "text-[#836D4E]",
                                  )}
                                >
                                  {subItem.description}
                                </p>
                              </div>

                              {/* Arrow */}
                              <span
                                className={cn(
                                  "hidden flex h-8 w-8 shrink-0",
                                  "items-center justify-center",
                                  "rounded-full",
                                  "border border-[#836D4E]/30",
                                  "text-[#fff]",
                                  "opacity-0",
                                  "transition-all duration-200",
                                  "group-hover:-translate-x-2",
                                  "group-hover:opacity-100",
                                )}
                              >
                                <ArrowUpRight
                                  size={32}
                                  strokeWidth={1.5}
                                  stroke="#836D4E"
                                />
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Button
              variant="primary"
              href="/contact"
              className="rounded-full px-8 py-5"
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className={cn(
              "relative z-10",
              "flex h-10 w-10 items-center justify-center",
              "text-[#EBE0D1]",
              "xl:hidden",
            )}
          >
            <span className="text-2xl leading-none">
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className={cn(
              "mt-3 overflow-hidden rounded-[24px]",
              "bg-[#323C38]",
              "p-5",
              "xl:hidden",
            )}
          >
            <nav className="flex flex-col">
              {headerData.navigation.map((item) => {
                const megaMenu = getMegaMenu(item.id);
                const hasMegaMenu = Boolean(megaMenu);

                {
                  /* Normal Mobile Navigation */
                }
                if (!hasMegaMenu) {
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "border-b border-white/10",
                        "py-4",
                        "font-hanken",
                        "text-[12px]",
                        "font-medium",
                        "uppercase",
                        "tracking-[0.08em]",
                        "text-[#EBE0D1]",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const isOpen = mobileSubMenu === item.id;

                return (
                  <div key={item.id} className="border-b border-white/10">
                    {/* Mobile Parent */}
                    <button
                      type="button"
                      onClick={() => handleMobileMenuToggle(item.id)}
                      className={cn(
                        "flex w-full items-center justify-between",
                        "py-4",
                        "text-left",
                        "font-hanken",
                        "text-[12px]",
                        "font-medium",
                        "uppercase",
                        "tracking-[0.08em]",
                        "text-[#EBE0D1]",
                      )}
                    >
                      <span>{item.label}</span>

                      <span
                        className={cn(
                          "flex h-7 w-7",
                          "items-center justify-center",
                          "rounded-full",
                          "border border-white/15",
                          "transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                      >
                        <ChevronDown size={15} strokeWidth={1.5} />
                      </span>
                    </button>

                    {/* Mobile Sub Menu */}
                    {isOpen && megaMenu && (
                      <div className="pb-4">
                        <div className="flex flex-col gap-2">
                          {megaMenu.items.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.href}
                              onClick={closeMobileMenu}
                              className={cn(
                                "group",
                                "flex items-center justify-between",
                                "gap-2",
                                "rounded-[10px]",
                                "bg-[#E2D1BA]",
                                "px-3 py-2",
                                "transition-colors duration-200",
                                "hover:bg-[#D8C5A9]",
                              )}
                            >
                              <div className="min-w-0 flex-1">
                                {/* Mobile Subitem Label */}
                                <p
                                  className={cn(
                                    "font-fraunces",
                                    "text-[18px]",
                                    "font-normal",
                                    "not-italic",
                                    "leading-[135%]",
                                    "text-[#515D59]",
                                  )}
                                >
                                  {subItem.label}
                                </p>

                                {/* Mobile Description */}
                                <p
                                  className={cn(
                                    "mt-1",
                                    "font-hanken",
                                    "text-[13px]",
                                    "font-normal",
                                    "not-italic",
                                    "leading-[160%]",
                                    "text-[#836D4E]",
                                  )}
                                >
                                  {subItem.description}
                                </p>
                              </div>

                              {/* Mobile Arrow */}
                              <ArrowRight
                                size={16}
                                strokeWidth={1.5}
                                className={cn(
                                  "shrink-0",
                                  "text-[#515D59]",
                                  "opacity-70",
                                  "transition-all duration-200",
                                  "group-hover:translate-x-0.5",
                                  "group-hover:-translate-y-0.5",
                                )}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={cn(
                  "mt-5",
                  "rounded-full",
                  "bg-[#C5A375]",
                  "py-4",
                  "text-center",
                  "font-hanken",
                  "text-sm",
                  "font-bold",
                  "text-[#1E2422]",
                )}
              >
                Book Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
