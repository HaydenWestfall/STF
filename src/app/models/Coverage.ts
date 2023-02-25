
export interface Coverage {
    id: string;
    coverageTitle: string;
    coverageImage: string;
    description: string;
    informationCards: CoverageElement[];
}
export interface CoverageCard {
    icon: any;
    iconSize: number;
    title: string;
    description: string;
    link?: string;
    externalLink?: string;
}

export interface CoverageElement {
    image: string;
    description: string;
}
