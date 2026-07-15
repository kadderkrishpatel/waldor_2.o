import { FooterProps } from "./Footer.types";

export const footerData: FooterProps = {
  footerImg: "/assets/waldor/footer.png",
  footerRightImg: "/assets/waldor/footer-top-right.png",
  footerLeftImg: "/assets/waldor/footer-left.png",
  columns: [
    {
      title: "TREATMENTS",
      links: [
        {
          label: "Waldor Signature",
          href: "/treatments",
        },
        {
          label: "Skin",
          href: "/treatments/skin",
        },
        {
          label: "Face",
          href: "/treatments/face",
        },
        {
          label: "Body",
          href: "/treatments/body",
        },
        {
          label: "Hair",
          href: "/treatments/hair",
        },
      ],
    },
    {
      title: "CONCERNS",
      links: [
        {
          label: "Acne",
          href: "/concerns/acne",
        },
        {
          label: "Acne Scarring",
          href: "/concerns/acne-scarring",
        },
        {
          label: "Dull Skin",
          href: "/concerns/dull-skin",
        },
        {
          label: "Fine Lines & Wrinkles",
          href: "/concerns/wrinkles",
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
      icon: "/assets/waldor/insta-icon.png",
      href: "#",
    },
    {
      name: "Facebook",
      icon: "/assets/waldor/fb-icon.png",
      href: "https://www.facebook.com/waldorclinic",
    },
  ],
};
