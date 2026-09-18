export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface HeroSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  description: string;
}
