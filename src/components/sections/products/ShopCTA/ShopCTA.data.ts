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
  before: "Checkout happens on",
  highlight: "our shop.",
  description:
    "Selecting a product takes you to waldor.skin, where orders, delivery and returns are handled. Your first order there gets 20% off when you join the mailing list.",
  button: {
    label: "Visit Waldor.Skin",
    href: "https://waldor.skin",
  },
};
