export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface WhyChooseUsSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  description: string;
  button: {
    label: string;
    href: string;
  };
  leftImage?: string;
  rightImage?: string;
}
