import { Component } from '@angular/core';
import { fade } from 'src/animations';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss'],
  animations: [fade]
})
export class LocationsPageComponent {
  basePath = '../../../assets/img/locations/';
}
