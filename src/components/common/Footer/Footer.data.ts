import { asset } from "@/src/lib/assets";
import { FooterDataProps } from "./Footer.types";

export const footerData: FooterDataProps = {
  footerImg: asset("/assets/waldor/footer.png"),
  footerRightImg: asset("/assets/waldor/footer-top-right.png"),
  footerLeftImg: asset("/assets/waldor/footer-left.png"),
  columns: [
    {
      title: "TREATMENTS",
      links: [
        {
          label: "Waldor Signature",
          href: "#",
        },
        {
          label: "Skin",
          href: "#",
        },
        {
          label: "Face",
          href: "#",
        },
        {
          label: "Body",
          href: "#",
        },
        {
          label: "Hair",
          href: "#",
        },
      ],
    },
    {
      title: "CONCERNS",
      links: [
        {
          label: "Acne",
          href: "#",
        },
        {
          label: "Acne Scarring",
          href: "#",
        },
        {
          label: "Dull Skin",
          href: "#",
        },
        {
          label: "Fine Lines & Wrinkles",
          href: "#",
        },
      ],
    },
    {
      title: "CLINIC",
      links: [
        {
          label: "About Us",
          href: "/about",
        },
        {
          label: "Doctors",
          href: "/doctors",
        },
        {
          label: "Blogs",
          href: "/blogs",
        },
        {
          label: "Contact Us",
          href: "/contact",
        },
        {
          label: "FAQ",
          href: "/faq",
        },
      ],
    },
  ],
  contact: {
    phone: "07464 745 114",
    email: "info@waldorclinic.com",
    address: "35 Great Portland Street London W1W 8QQ",
    timings: [
      "Mon - Fri: 10am - 7pm",
      "Saturday: 10am - 6pm",
      "Sunday: Opening Soon",
    ],
  },
  socialLinks: [
    {
      name: "Instagram",
      icon: asset("/assets/waldor/insta-icon.png"),
      href: "#",
    },
    {
      name: "Facebook",
      icon: asset("/assets/waldor/fb-icon.png"),
      href: "https://www.facebook.com/waldorclinic",
    },
  ],
};
