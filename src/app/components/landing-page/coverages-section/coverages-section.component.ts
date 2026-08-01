import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CoverageCard } from 'src/app/models/Coverage';
import { environment } from 'src/environments/environment.development';
import { RevealDirective } from '../../../directives/reveal.directive';

import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-coverages-section',
    templateUrl: './coverages-section.component.html',
    styleUrls: ['./coverages-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
    RevealDirective,
    RouterLink
],
})
export class CoveragesSectionComponent {
  basePath = 'assets/img/icons/';

  coverages: CoverageCard[] = [
    {
      icon: this.basePath + 'auto.png',
      iconSize: 2.75,
      title: 'Auto Insurance',
      description:
        'Liability, collision, comprehensive, uninsured motorist and roadside help for every vehicle in the driveway.',
      link: '/coverages/auto',
    },
    {
      icon: this.basePath + 'home.png',
      iconSize: 2.6,
      title: 'Home Insurance',
      description:
        'Dwelling, other structures, personal property, liability and loss of use for homeowners, condos and renters.',
      link: '/coverages/home',
    },
    {
      icon: this.basePath + 'farm.png',
      iconSize: 2.75,
      title: 'Farm Insurance',
      description:
        'Farm dwellings, barns, machinery, livestock, crops and the liability that comes with an operation.',
      link: '/coverages/farm',
    },
    {
      icon: this.basePath + 'commercial.png',
      iconSize: 2.5,
      title: 'Commercial Insurance',
      description:
        'General liability, commercial property, business auto, workers compensation, bonds and cyber.',
      link: '/coverages/commercial',
    },
    {
      icon: this.basePath + 'recreational.png',
      iconSize: 3,
      title: 'Recreational Insurance',
      description:
        'Boats, RVs, campers, motorcycles, ATVs, golf carts and collector cars — on and off the road.',
      link: '/coverages/recreational',
    },
    {
      icon: this.basePath + 'life.png',
      iconSize: 3,
      title: 'Life Insurance',
      description:
        'Term, whole and final expense coverage that keeps your family financially steady.',
      link: '/coverages/life',
    },
    {
      icon: this.basePath + 'health.png',
      iconSize: 2.5,
      title: 'Health & Medicare',
      description:
        'Individual health plans, Medicare Advantage and Medicare supplement guidance from a licensed specialist.',
      externalLink: environment.healthInsuranceLink,
    },
  ];
}
