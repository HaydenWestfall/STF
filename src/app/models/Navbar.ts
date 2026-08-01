export interface NavChild {
  label: string;
  description?: string;
  icon?: string;
  route?: string;
  externalUrl?: string;
}

export interface NavGroup {
  id: string;
  label: string;
  route?: string;
  layout?: 'mega' | 'list';
  children?: NavChild[];
}

/** Legacy shape kept for older templates. */
export interface Link {
  title: string;
  links: string[];
  dropdown?: NavbarOptions[];
}

export interface NavbarOptions {
  icon: any;
  iconSize: number;
  label: string;
  navigateTo: string;
}
