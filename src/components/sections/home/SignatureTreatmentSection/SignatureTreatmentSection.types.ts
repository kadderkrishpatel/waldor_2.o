export interface SignatureTreatment {
  number: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  href: string;
}

export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface SignatureTreatmentSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  button: {
    label: string;
    href: string;
  };
  treatments: SignatureTreatment[];
}
