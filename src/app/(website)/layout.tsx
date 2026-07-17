"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Header from "@/src/components/common/Header";
import { Footer } from "@/src/components";
import { footerData } from "@/src/components/common/Footer/Footer.data";
import { FooterCTA } from "@/src/components/common/Footer/Footer.types";
import { homeFooterCTA } from "@/src/components/sections/home/FooterCTA.data";
import { contactFooterCTA as defaultFooterCTA } from "@/src/components/sections/contact/contactFooterCTA.data";

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

const footerCTAByRoute: {
  match: string;
  exact?: boolean;
  cta: FooterCTA;
  bg: string;
}[] = [
  {
    match: "/",
    exact: true,
    cta: homeFooterCTA,
    bg: "rgba(0, 0, 0, 0.30)",
  },
  {
    match: "/contact",
    cta: defaultFooterCTA,
    bg: "rgba(0, 0, 0, 0.30)",
  },
  {
    match: "/treatments",
    cta: defaultFooterCTA,
    bg: "rgba(0, 0, 0, 0.30)",
  },
  {
    match: "/doctors",
    cta: defaultFooterCTA,
    bg: "rgba(0, 0, 0, 0.30)",
  },
  {
    match: "/blogs",
    cta: defaultFooterCTA,
    bg: "rgba(0, 0, 0, 0.30)",
  },
];

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  const pathname = usePathname();

  const route = useMemo(() => {
    return (
      footerCTAByRoute.find((item) =>
        item.exact ? pathname === item.match : pathname.startsWith(item.match),
      ) ?? {
        cta: defaultFooterCTA,
        bg: "rgba(0, 0, 0, 0.30)",
      }
    );
  }, [pathname]);

  return (
    <>
      <Header bg={route.bg} />
      <main>{children}</main>
      <Footer {...footerData} cta={route.cta} />
    </>
  );
}
