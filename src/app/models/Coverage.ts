export interface CoverageItem {
  title: string;
  description: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface CoverageFaq {
  question: string;
  answer: string;
  expanded?: boolean;
}

export interface Coverage {
  id: string;
  /** e.g. "Auto Insurance" */
  name: string;
  /** e.g. "Personal Insurance" */
  category: string;
  /** Grammatical phrase used in headings, e.g. "an auto policy". */
  policyLabel: string;
  icon: string;
  heroImage: string;
  supportingImages: string[];
  tagline: string;
  /** Overview paragraphs. */
  intro: string[];
  quickFacts: QuickFact[];
  /** What a standard policy typically includes. */
  coreCoverages: CoverageItem[];
  /** Endorsements and add-ons worth asking about. */
  optionalCoverages: CoverageItem[];
  whoNeedsIt: string[];
  savings: string[];
  faqs: CoverageFaq[];
  /** Ids of related coverages. */
  related: string[];
}

export interface CoverageCard {
  icon: any;
  iconSize: number;
  title: string;
  description: string;
  link?: string;
  externalLink?: string;
}
