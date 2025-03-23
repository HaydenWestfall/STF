
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
