import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-cormorant)"],
        heading: ["var(--font-fraunces)"],
        hanken: ["var(--font-hanken)"],
      },
    },
  },
} satisfies Config;
