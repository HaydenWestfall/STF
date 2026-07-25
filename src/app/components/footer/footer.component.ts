import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterSection } from 'src/app/models/FooterLink';
import { Social } from 'src/app/models/Social';
import { environment } from 'src/environments/environment.development';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink],
})
export class FooterComponent {
  basePath = 'assets/img/icons/';
  env = environment;
  currentYear = new Date().getFullYear();

  footerSections: FooterSection[] = [
    {
      header: 'Insurance',
      subHeaders: [
        { label: 'Auto Insurance', route: '/coverages/auto' },
        { label: 'Home Insurance', route: '/coverages/home' },
        { label: 'Farm Insurance', route: '/coverages/farm' },
        { label: 'Commercial Insurance', route: '/coverages/commercial' },
        { label: 'Recreational Insurance', route: '/coverages/recreational' },
        { label: 'Life Insurance', route: '/coverages/life' },
        { label: 'Health & Medicare', link: environment.healthInsuranceLink },
      ],
    },
    {
      header: 'Company',
      subHeaders: [
        { label: 'About STF', route: '/about' },
        { label: 'Our Team', route: '/team' },
        { label: 'Locations', route: '/locations' },
        { label: 'Contact Us', route: '/contact' },
      ],
    },
    {
      header: 'Service',
      subHeaders: [
        { label: 'Get a Quote', route: '/quoteRedirect' },
        { label: 'Make a Payment', route: '/carriers' },
        { label: 'Report a Claim', route: '/carriers' },
        { label: 'Our Carriers', route: '/carriers' },
        { label: 'FAQ', route: '/faq' },
      ],
    },
  ];

  offices = [
    {
      name: 'Arcanum',
      address: '21 W George St, Arcanum, OH 45304',
      phone: environment.arcanumPhoneNumber,
    },
    {
      name: 'Vandalia',
      address: '415 S Dixie Dr, Vandalia, OH 45377',
      phone: environment.vandaliaPhoneNumber,
    },
    {
      name: 'Middletown',
      address: '1820 1st Ave, Middletown, OH 45044',
      phone: environment.middletownPhoneNumber,
    },
  ];

  socials: Social[] = [
    {
      icon: this.basePath + 'facebook.png',
      url: 'https://www.facebook.com/STF.Insurance.Group',
      height: 1.5,
      width: 1.5,
    },
    {
      icon: this.basePath + 'instagram.png',
      url: 'https://www.instagram.com/agencies_of_stf_insurancegroup/',
      height: 1.5,
      width: 1.5,
    },
    {
      icon: this.basePath + 'twitter.png',
      url: 'https://twitter.com/STF_Insurance',
      height: 1.5,
      width: 1.5,
    },
    {
      icon: this.basePath + 'youtube.png',
      url: 'https://www.youtube.com/channel/UCVr6GAX21zuMgNn6g-A0G1g',
      height: 1.5,
      width: 1.9,
    },
  ];

  constructor(public router: Router) {}

  handleLinkClick(footerLink): void {
    if (footerLink.route) {
      this.router.navigate([footerLink.route]);
    } else {
      window.open(footerLink.link, '_blank', 'noopener');
    }
  }
}
