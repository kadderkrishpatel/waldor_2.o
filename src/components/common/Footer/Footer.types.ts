export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterContact {
  phone: string;
  email: string;
  address: string;
  timings: string[];
}

export interface FooterSocialLink {
  name: string;
  icon: string;
  href: string;
}

export interface FooterCTA {
  heading: {
    before: string;
    highlight: string;
  };
  description: string;
  button: {
    label: string;
    href: string;
  };
}

/**
 * Shared footer content
 */
export interface FooterDataProps {
  footerImg: string;
  footerRightImg: string;
  footerLeftImg: string;
  columns: FooterColumn[];
  contact: FooterContact;
  socialLinks: FooterSocialLink[];
}

/**
 * Complete Footer Props
 */
export interface FooterProps extends FooterDataProps {
  cta: FooterCTA;
}
