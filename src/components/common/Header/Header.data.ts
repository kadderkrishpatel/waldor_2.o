import { asset } from "@/src/lib/assets";
import { HeaderProps } from "./Header.types";

export const headerData: HeaderProps = {
  logo: asset("/assets/waldor/logo.png"),

  navigation: [
    {
      id: 1,
      label: "Treatments",
      href: "#",
    },
    {
      id: 2,
      label: "Concerns",
      href: "#",
    },
    {
      id: 3,
      label: "Success Stories",
      href: "#",
    },
    {
      id: 4,
      label: "Blog",
      href: "/blog",
    },
    {
      id: 5,
      label: "Contact",
      href: "/contact",
    },
  ],
};
