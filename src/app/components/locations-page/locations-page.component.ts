import { Component } from '@angular/core';
import { fade } from 'src/animations';
import { Location } from 'src/app/models/Location';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss'],
  animations: [fade]
})
export class LocationsPageComponent {
  basePath = '../../../assets/img/locations/';
  locations: Location[] = [
    {
      name: 'Arcanum',
      address: '21 W George St Arcanum, OH 45304',
      image: this.basePath + 'arcanum.webp',
      contactMethods: [
        {
          type: 'tel:',
          value: '937-692-8310',
          displayType: 'phone',
          displayValue: '(937) 692 - 8310'
        },
        {
          type: 'tel:',
          value: '937-278-9132',
          displayType: 'phone',
          displayValue: '(937) 278 - 9132'
        }
      ],
      hours: [
        { label: 'Weekdays', value: '8:30AM - 4:30PM'},
        { label: 'Weekends', value: 'CLOSED'}
      ]
    },
    {
      name: 'Vandalia',
      address: '415 S Dixie Dr, Vandalia, OH 45377',
      image: this.basePath + 'vandalia.webp',
      contactMethods: [
        {
          type: 'tel:',
          value: '937-890-5426',
          displayType: 'phone',
          displayValue: '(937) 890 - 5426'
        }
      ],
      hours: [
        { label: 'Weekdays', value: '8:30AM - 4:30PM'},
        { label: 'Weekends', value: 'CLOSED'}
      ]
    }
  ]
}
