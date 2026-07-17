import { asset } from "../lib/assets";

export const IMAGES = {
  logo: asset("/assets/logo/logo.png"),

  hero: {
    background: asset("/assets/hero/background.webp"),
    foreground: asset("/assets/hero/foreground.webp"),
    leaves: asset("/assets/hero/leaves.webp"),
  },

  treatments: {},

  practitioners: {},

  blog: {},

  icons: {
    arrow: asset("/assets/icons/arrow.svg"),
    play: asset("/assets/icons/play.svg"),
  },
} as const;
