import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterSection } from 'src/app/models/FooterLink';
import { Social } from 'src/app/models/Social';
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
      { label: 'Payments and Claims', route: '/carriers' },
    ] },
    { header: 'Company', subHeaders: [
      { label: 'Contact', route: '/contact' },
      { label: 'FAQ', route: '/faq' },
      { label: 'Locations', route: '/locations' },
    ] },
  ];

  socials: Social[] = [
    { icon: SvgIcon.TWITTER, url: 'https://twitter.com/SrlAgency', height: 1.5, width: 1.5 },
    { icon: SvgIcon.INSTAGRAM, url: 'https://www.instagram.com/srl_troutwine/?hl=en', height: 1.5, width: 1.5 },
    { icon: SvgIcon.FACEBOOK, url: 'https://www.facebook.com/srltroutwineinsurance', height: 1.5, width: 1.5 },
    { icon: SvgIcon.LINKEDIN, url: 'https://www.linkedin.com/company/keith-troutwine-agency-inc-/about/', height: 1.5, width: 1.5 },
    { icon: SvgIcon.YOUTUBE, url: 'https://www.youtube.com/channel/UCVr6GAX21zuMgNn6g-A0G1g', height: 1.5, width: 1.9 }
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
