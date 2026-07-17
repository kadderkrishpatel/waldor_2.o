import { asset } from "@/src/lib/assets";
import { HeaderProps } from "./Header.types";

export const headerData: HeaderProps = {
  logo: asset("/assets/waldor/logo.png"),

  navigation: [
    {
      label: "Treatments",
      href: "#",
    },
    {
      label: "Concerns",
      href: "#",
    },
    {
      label: "Success Stories",
      href: "#",
    },
    {
      label: "Doctors",
      href: "#",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
};
