export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  logo: string;
  navigation: NavItem[];
}
