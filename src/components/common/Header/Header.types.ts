export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export interface HeaderSubMenuItem {
  id: number;
  label: string;
  description: string;
  href: string;
}

export interface HeaderMegaMenu {
  id: number;
  label: string;
  items: HeaderSubMenuItem[];
}

export interface HeaderProps {
  bg?: string;
}
