import { asset } from "@/src/lib/assets";
import type { HeaderMegaMenu, NavItem } from "./Header.types";

export interface HeaderData {
  logo: string;
  navigation: NavItem[];
  megaMenus: HeaderMegaMenu[];
}

export const headerData: HeaderData = {
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

  megaMenus: [
    {
      id: 1,
      label: "Treatments",
      items: [
        {
          id: 1,
          label: "Waldor Signature",
          description: "Exclusive facial tailored to your skin",
          href: "/treatments/waldor-signature",
        },
        {
          id: 2,
          label: "Body Treatments",
          description: "Sculpting, contouring & skin tightening",
          href: "/treatments/body-treatment",
        },
        {
          id: 3,
          label: "Injectables",
          description: "Botox, fillers & rejuvenation therapies",
          href: "/treatments/injectables",
        },
        {
          id: 4,
          label: "Hair Growth",
          description: "Restore fullness and stimulate regrowth",
          href: "/treatments/hair-growth",
        },
      ],
    },

    {
      id: 2,
      label: "Concerns",
      items: [
        {
          id: 1,
          label: "Acne Scarring",
          description: "Reduce visible scars for smoother skin",
          href: "/concerns/acne-scarring",
        },
        {
          id: 2,
          label: "Fine Lines & Wrinkles",
          description: "Smooth and soften expression lines",
          href: "/concerns/wrinkles",
        },
        {
          id: 3,
          label: "Acne",
          description: "Clear breakouts and prevent future flare-ups",
          href: "/concerns/acne",
        },
        {
          id: 4,
          label: "Uneven Skin Tone",
          description: "Even out pigmentation and dark spots",
          href: "/concerns/uneven-skin-tone",
        },
        {
          id: 5,
          label: "Sagging & Loose Skin",
          description: "Firm and lift for a more youthful contour",
          href: "/concerns/loose-skin",
        },
        {
          id: 6,
          label: "Premature Aging",
          description: "Turn back the clock on early signs of aging",
          href: "/concerns/premature-aging",
        },
      ],
    },
  ],
};
