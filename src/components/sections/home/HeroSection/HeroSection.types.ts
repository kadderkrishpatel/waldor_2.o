export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface HeroSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  description: string;
  buttons: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
  }[];
  backgroundImage: string;
  stats: {
    label: string;
    value: string;
    showDivider?: boolean;
  }[];
}
