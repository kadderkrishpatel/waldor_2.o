export interface BlogPost {
  id: number;
  title: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface BlogSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  posts: BlogPost[];
  button: {
    label: string;
    href: string;
  };
}
