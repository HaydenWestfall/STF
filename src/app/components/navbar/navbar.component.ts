import { Component } from '@angular/core';
import { fade } from 'src/animations';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { panelSlideIn } from './navbar.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [panelSlideIn, fade]
})
export class NavbarComponent {
  SvgIcon = SvgIcon;
  showNav = true;


  aboutLinks = {
    title: 'About',
    links: [
      'About Us',
      'Our Locations',
      'FAQ'
    ]
  };

  coverageLinks = {
    title: 'Coverages',
    links: [
      'Life Insurance',
      'Health Insurance',
      'Auto Insurance',
      'Home Insurance',
      'Commercial Insurance',
      'Farm Insurance'
    ]
  };

  carrierLinks = {
    title: 'Coverages',
    links: [
      'About Us',
      'Our Locations',
      'FAQ'
    ]
  }

  selectedLink: any = null;
}
