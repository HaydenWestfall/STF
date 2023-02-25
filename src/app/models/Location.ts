
export interface Location {
    name: string;
    address: string;
    image: string;
    contactMethods: ContactMethod[];
    hours: Hours[];
}

export interface ContactMethod {
    displayType: string;
    displayValue: string;
    type: string;
    value: string;
}

export interface Hours {
    label: string;
    value: string;
}
