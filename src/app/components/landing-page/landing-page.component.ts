import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CoveragesSectionComponent } from './coverages-section/coverages-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarriersSectionComponent } from './carriers-section/carriers-section.component';
import { ReviewsSectionComponent } from './reviews-section/reviews-section.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    imports: [
        HeroSectionComponent,
        CoveragesSectionComponent,
        AboutSectionComponent,
        RevealDirective,
        NgFor,
        RouterLink,
        CarriersSectionComponent,
        ReviewsSectionComponent,
        BannerComponent,
    ],
})
export class LandingPageComponent {
  basePath = 'assets/img/locations/';

  steps = [
    {
      number: '01',
      title: 'Tell us about you',
      description:
        'Call an office, stop in, or start a quote online. We ask about what you own, who drives, and what would hurt the most to lose.',
    },
    {
      number: '02',
      title: 'We compare the market',
      description:
        'Your agent runs your information through our carriers and brings back the options that actually fit, with the trade-offs explained.',
    },
    {
      number: '03',
      title: 'You choose, we service it',
      description:
        'Pick the policy you are comfortable with. We handle the paperwork, the changes and the claims for as long as you are with us.',
    },
  ];

  offices = [
    {
      name: 'Arcanum',
      address: '21 W George St, Arcanum, OH 45304',
      phone: environment.arcanumPhoneNumber,
      hours: 'Mon–Fri, 8:30am – 4:30pm',
      image: this.basePath + 'arcanum.webp',
    },
    {
      name: 'Vandalia',
      address: '415 S Dixie Dr, Vandalia, OH 45377',
      phone: environment.vandaliaPhoneNumber,
      hours: 'Mon–Fri, 8:30am – 4:30pm',
      image: this.basePath + 'vandalia.webp',
    },
    {
      name: 'Middletown',
      address: '1820 1st Ave, Middletown, OH 45044',
      phone: environment.middletownPhoneNumber,
      hours: 'Mon–Fri, 8:30am – 4:00pm',
      image: this.basePath + 'middletown.webp',
    },
  ];
}
