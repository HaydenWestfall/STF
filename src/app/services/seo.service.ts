import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  /** Absolute canonical URL for the page, e.g. https://www.stf-ins-group.com/about */
  url: string;
  /** Absolute URL of the social share image; falls back to the office photo. */
  image?: string;
}

/**
 * Keeps the document's title, description, canonical link and the Open Graph /
 * Twitter Card tags in sync with the active route. Runs on both the server
 * (prerender) and the browser, so every prerendered page ships correct tags and
 * client-side navigations keep them accurate.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly defaultImage =
    'https://www.stf-ins-group.com/assets/img/locations/arcanum.webp';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  update(data: SeoData): void {
    const image = data.image ?? this.defaultImage;

    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });

    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({
      property: 'og:description',
      content: data.description,
    });
    this.meta.updateTag({ property: 'og:url', content: data.url });
    this.meta.updateTag({ property: 'og:image', content: image });

    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: data.description,
    });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setCanonical(data.url);
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /**
   * Adds or replaces a JSON-LD structured-data block in the document head. The
   * `id` keeps a single block per page type so client-side navigation updates
   * rather than duplicates it.
   */
  setJsonLd(id: string, schema: object): void {
    let script = this.doc.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.doc.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }

  removeJsonLd(id: string): void {
    this.doc.getElementById(id)?.remove();
  }

  /** Builds schema.org FAQPage structured data from question/answer pairs. */
  buildFaqSchema(faqs: { question: string; answer: string }[]): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };
  }
}
