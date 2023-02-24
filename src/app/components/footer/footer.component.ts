import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterSection } from 'src/app/models/FooterLink';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  SvgIcon = SvgIcon;

  footerSections: FooterSection[] = [
    { header: 'About', subHeaders: [
      { label: 'About STF', route: '/about' },
      { label: 'Our Team', route: '/team' },
      { label: 'Locations', route: '/locations' }
    ]},
    { header: 'Coverages', subHeaders: [
      { label: 'Auto Insurance', route: '/coverages/auto' },
      { label: 'Home Insurance', route: '/coverages/home' },
      { label: 'Farm Insurance', route: '/coverages/farm' },
      { label: 'Commercial Insurance', route: '/coverages/commercial' },
      { label: 'Recreational Insurance', route: '/coverages/recreational' },
      { label: 'Life Insurance', route: '/coverages/life' },
      { label: 'Health Insurance', link: environment.healthInsuranceLink }
    ] },
    { header: 'Carriers', subHeaders: [
      { label: 'Carriers', route: '/carriers' },
    ] },
    { header: 'Company', subHeaders: [
      { label: 'Contact', route: '/contact' },
      { label: 'FAQ', route: '/faq' },
      { label: 'Locations', route: '/locations' },
    ] },
  ];
  
  constructor(public router: Router) { }

  handleLinkClick(footerLink): void {
    if (footerLink.route) {
      this.router.navigate([footerLink.route])
    } else {
      window.open(footerLink.link, '_blank');
    }
  }
}
