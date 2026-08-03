export const credData = {
  eyebrow: "OUR CREDENTIALS",
  before: "Excellence",
  highlight: "You Can Trust",
  description:
    "Every certification reflects our commitment to clinical excellence, patient safety and internationally recognised standards in modern aesthetic care.",
};

export interface Credential {
  id: number;
  name: string;
  image: string;
}

export const credentials: Credential[] = [
  {
    id: 1,
    name: "CPD",
    image: "/images/about/credentials/logo-1.svg",
  },
  {
    id: 2,
    name: "JCCP",
    image: "/images/about/credentials/logo-2.svg",
  },
  {
    id: 3,
    name: "Save Face",
    image: "/images/about/credentials/logo-3.svg",
  },
  {
    id: 4,
    name: "ACE Group",
    image: "/images/about/credentials/logo-4.svg",
  },
  {
    id: 5,
    name: "BACN",
    image: "/images/about/credentials/logo-5.svg",
  },
];
