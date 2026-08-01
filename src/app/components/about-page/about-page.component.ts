import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';

import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink, RevealDirective, BannerComponent],
})
export class AboutPageComponent {
  basePathCarriers = 'assets/img/carrier-about/';

  stats = [
    { value: '60+', label: 'Years insuring Ohio families' },
    { value: '3,000+', label: 'Families & businesses protected' },
    { value: '20+', label: 'Carriers we compare' },
    { value: '4.5', label: 'Average customer rating' },
  ];

  strengths = [
    {
      title: 'We work for you, not one company',
      description:
        'We are not captive to a single insurer. We analyze your situation and place it with whichever of our carriers fits it best — and we can move it if that changes.',
    },
    {
      title: 'We stay current so you do not have to',
      description:
        'Working with many companies means we see how forms, endorsements and pricing shift across the market. We keep your coverage up to date rather than letting it renew on autopilot.',
    },
    {
      title: 'We push claims through',
      description:
        'Our relationships with the companies we represent let us advocate for prompt, fair claim handling. You call our office and we help you work it to a resolution.',
    },
    {
      title: 'We keep learning',
      description:
        'Our agents carry ongoing education in personal lines, farm, commercial, life and Medicare so the advice you get is current and specific to your situation.',
    },
    {
      title: 'We look for value, not a quota',
      description:
        'Buying insurance is about more than the lowest number on a page. We look for the product that will actually respond when you need it, and we say so when a cheaper quote is cheaper for a reason.',
    },
  ];

  values = [
    {
      title: 'Local',
      description:
        'Three offices, all in southwest Ohio, all staffed by people who live here.',
    },
    {
      title: 'Independent',
      description:
        'More than 20 carrier relationships, so your options are not limited to one company.',
    },
    {
      title: 'Full service',
      description:
        'Personal, farm, commercial, life and Medicare handled under one roof.',
    },
    {
      title: 'Straightforward',
      description:
        'Plain-English explanations, honest trade-offs, and no pressure to buy today.',
    },
  ];

  carriers = [
    this.basePathCarriers + 'geico.png',
    this.basePathCarriers + 'encova.png',
    this.basePathCarriers + 'grinnell.png',
    this.basePathCarriers + 'celina.png',
    this.basePathCarriers + 'progressive.png',
    this.basePathCarriers + 'liberty-mutual.png',
    this.basePathCarriers + 'auto-owners.png',
  ];
}
