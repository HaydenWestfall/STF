import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  SvgIcon = SvgIcon;

  footerSections = [
    { header: 'About', subHeaders: [
      { label: 'Our Mission', route: '' },
      { label: 'Our Team', route: '' },
      { label: 'Our Strengths', route: '' },
      { label: 'Locations', route: '' }
    ]},
    { header: 'Coverages', subHeaders: [ 
      { label: 'Home Insurance', route: '' },
      { label: 'Life Insurance', route: '' },
      { label: 'Health Insurance', route: '' },
      { label: 'Auto Insurance', route: '' },
      { label: 'Commercial Insurance', route: '' },
      { label: 'FarmInsurance', route: '' }
    ] },
    { header: 'Carriers', subHeaders: [
      { label: 'Carriers', route: '' },
    ] },
    { header: 'Company', subHeaders: [
      { label: 'Contact', route: '/contact' },
      { label: 'FAQ', route: '' },
      { label: 'Locations', route: '' },
    ] },
  ];
}
