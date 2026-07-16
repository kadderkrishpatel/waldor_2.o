export interface ExperienceCard {
  title: string;
  description: string;
  icon?: string;
  position: "left" | "right" | "bottom";
}

export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface ExperienceSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  description: string;
  image: string;
  cards: ExperienceCard[];
  bottomDecorationImage: string;
  topDecorationImage: string;
}
