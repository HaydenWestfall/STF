import { Component } from '@angular/core';
import { Location } from 'src/app/models/Location';
import { environment } from 'src/environments/environment.development';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { BannerComponent } from '../banner/banner.component';

@Component({
    selector: 'app-locations-page',
    templateUrl: './locations-page.component.html',
    styleUrls: ['./locations-page.component.scss'],
    imports: [
        RouterLink,
        NgFor,
        RevealDirective,
        BannerComponent,
    ],
})
export class LocationsPageComponent {
  basePath = 'assets/img/locations/';
  env = environment;

  locations: Location[] = [
    {
      name: 'Arcanum',
      address: '21 W George St, Arcanum, OH 45304',
      image: this.basePath + 'arcanum.webp',
      contactMethods: [
        {
          type: 'tel:',
          value: '937-692-8310',
          displayType: 'Phone',
          displayValue: '(937) 692 - 8310',
        },
        {
          type: 'tel:',
          value: '937-278-9132',
          displayType: 'Alternate',
          displayValue: '(937) 278 - 9132',
        },
      ],
      hours: [
        { label: 'Monday – Friday', value: '8:30 AM – 4:30 PM' },
        { label: 'Saturday – Sunday', value: 'Closed' },
      ],
    },
    {
      name: 'Vandalia',
      address: '415 S Dixie Dr, Vandalia, OH 45377',
      image: this.basePath + 'vandalia.webp',
      contactMethods: [
        {
          type: 'tel:',
          value: '937-890-5426',
          displayType: 'Phone',
          displayValue: '(937) 890 - 5426',
        },
      ],
      hours: [
        { label: 'Monday – Friday', value: '8:30 AM – 4:30 PM' },
        { label: 'Saturday – Sunday', value: 'Closed' },
      ],
    },
    {
      name: 'Middletown',
      address: '1820 1st Ave, Middletown, OH 45044',
      image: this.basePath + 'middletown.webp',
      contactMethods: [
        {
          type: 'tel:',
          value: '513-423-4696',
          displayType: 'Phone',
          displayValue: '(513) 423 - 4696',
        },
      ],
      hours: [
        { label: 'Monday – Friday', value: '8:30 AM – 4:00 PM' },
        { label: 'Saturday – Sunday', value: 'Closed' },
      ],
    },
  ];

  directionsUrl(address: string): string {
    return (
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent(address)
    );
  }
}
