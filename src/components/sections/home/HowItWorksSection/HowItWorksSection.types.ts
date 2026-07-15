export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface HowItWorksSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  steps: ProcessStep[];
}
