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

export interface FooterProps {
  footerImg: string;
  columns: FooterColumn[];
  contact: FooterContact;
  socialLinks: FooterSocialLink[];
  footerRightImg: string;
  footerLeftImg: string;
}
