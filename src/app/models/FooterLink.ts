
export interface FooterSection {
    header: string;
    subHeaders: FooterLink[];
}

export interface FooterLink {
    label: string;
    route?: string;
    link?: string;
}
