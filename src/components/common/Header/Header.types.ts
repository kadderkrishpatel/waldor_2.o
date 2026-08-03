export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export interface HeaderProps {
  logo: string;
  navigation: NavItem[];
}
