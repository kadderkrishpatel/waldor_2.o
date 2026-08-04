export interface Testimonial {
  name: string;
  treatment: string;
  review: string;
  rating: number;
}

export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface SuccessStoriesSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  testimonials: Testimonial[];
  successRightImg: string;
}
