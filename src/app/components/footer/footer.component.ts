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
      { label: 'About STF', route: '/about' },
      { label: 'Our Team', route: '/team' },
      { label: 'Locations', route: '/locations' }
    ]},
    { header: 'Coverages', subHeaders: [ 
      { label: 'Home Insurance', route: '/coverages/home' },
      { label: 'Life Insurance', route: '/coverages/life' },
      { label: 'Health Insurance', route: '/coverages/health' },
      { label: 'Auto Insurance', route: '/coverages/auto' },
      { label: 'Commercial Insurance', route: '/coverages/commercial' },
      { label: 'Farm Insurance', route: '/coverages/farm' }
    ] },
    { header: 'Carriers', subHeaders: [
      { label: 'Carriers', route: '' },
    ] },
    { header: 'Company', subHeaders: [
      { label: 'Contact', route: '/contact' },
      { label: 'FAQ', route: '/faq' },
      { label: 'Locations', route: '/locations' },
    ] },
  ];
}
