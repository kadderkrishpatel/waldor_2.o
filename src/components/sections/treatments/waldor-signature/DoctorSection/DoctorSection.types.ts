export interface Doctor {
  name: string;
  role: string;
  image: string;
  slug: string;
}

export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface DoctorSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  description: string;
  doctors: Doctor[];
}
