export interface ShopCTAData {
  eyebrow: string;
  before: string;
  highlight: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
}

export const shopCTAData: ShopCTAData = {
  eyebrow: "CONTINUE ON WALDOR.SKIN",
  before: "Shop The ",
  highlight: "WALDOR Collection",
  description:
    "Your WALDOR skincare journey continues at waldor.skin, where you can explore the collection, place your order and find everything you need about delivery and returns. Enjoy 20% off your first order.",
  button: {
    label: "Visit Waldor.Skin",
    href: "https://waldor.skin",
  },
};
