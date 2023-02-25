import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fade, fadeInPlace, growHeight } from 'src/animations';
import { Link } from 'src/app/models/Navbar';
import { StfService } from 'src/app/services/stf.service';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { environment } from 'src/environments/environment.development';
import { panelSlideIn } from './navbar.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [panelSlideIn, fade, growHeight, fadeInPlace]
})
export class NavbarComponent implements OnInit {
  SvgIcon = SvgIcon;
  showNav = false;
  navbarClass = 'transparent';
  selectedLink: Link = null;
  whiteNavbarRoute = false;
  mediaQuery: MediaQueryList = window.matchMedia('(max-width: 768px)');
  quoteLink = environment.quoteLink;

  aboutLinks: Link = {
    title: 'About',
    links: [
      'About STF',
      'Carriers',
      'Our Team',
      'Locations'
    ],
    dropdown: [
      {icon: SvgIcon.LOGO_WATERMARK, iconSize: 1.5, label: 'About', navigateTo: '/about'},
      {icon: SvgIcon.SHIELD, iconSize: 3, label: 'Carriers', navigateTo: '/carriers'},
      {icon: SvgIcon.TEAM, iconSize: 2.5, label: 'Team', navigateTo: '/team'},
      {icon: SvgIcon.LOCATION, iconSize: 2.5, label: 'Locations', navigateTo: '/locations'},
      {icon: SvgIcon.FAQ, iconSize: 2.5, label: 'FAQ', navigateTo: '/faq'},
      {icon: SvgIcon.CONTACT, iconSize: 2.5, label: 'Contact', navigateTo: '/contact'}
    ]
  };

  coverageLinks: Link = {
    title: 'Coverages',
    links: [
      'Life Insurance',
      'Health Insurance',
      'Auto Insurance',
      'Home Insurance',
      'Commercial Insurance',
      'Farm Insurance'
    ],
    dropdown: [
      {icon: SvgIcon.AUTO_INSURANCE, iconSize: 2.25, label: 'Auto\nInsurance', navigateTo: '/coverages/auto'},
      {icon: SvgIcon.HOME_INSURANCE, iconSize: 2.25, label: 'Home\nInsurance', navigateTo: '/coverages/home'},
      {icon: SvgIcon.FARM_INSURANCE, iconSize: 2.5, label: 'Farm\nInsurance', navigateTo: '/coverages/farm'},
      {icon: SvgIcon.COMMERCIAL_INSURANCE, iconSize: 2.5, label: 'Commercial\nInsurance', navigateTo: '/coverages/commercial'},
      {icon: SvgIcon.RECREATIONAL_INSRUANCE, iconSize: 2.5, label: 'Recreational\nInsurance', navigateTo: '/coverages/recreational'},
      {icon: SvgIcon.LIFE_INSURANCE, iconSize: 2.5, label: 'Life\nInsurance', navigateTo: '/coverages/life'},
      {icon: SvgIcon.HEALTH_INSURANCE, iconSize: 2.5, label: 'Health\nInsurance', navigateTo: 'health'},
    ]
  };

  carrierLinks: Link = {
    title: 'Coverages',
    links: [
      'About Us',
      'Our Locations',
      'FAQ'
    ]
  }

  constructor(public router: Router, private elementRef: ElementRef, public stf: StfService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event['url'];
        this.whiteNavbarRoute = (['/carriers', '/faq', '/locations'].includes(url)) ? true : false;
        this.navbarClass = this.navbarStyleSelector();
      }
    });
  }

  @HostListener('document:click', ['$event.target'])
  public onPageClick(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.selectedLink = null;
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.navbarClass = this.navbarStyleSelector();
  }

  mouseEnterNavbar(): void {
    this.navbarClass = 'white-navbar';
  }

  mouseLeaveNavbar(): void {
    this.navbarClass = (this.selectedLink == null) ? this.navbarStyleSelector() : 'white-navbar';
  }

  navbarStyleSelector(): string {
    return (window.scrollY < 70 && !this.whiteNavbarRoute) ? 'clear-navbar' : 'white-navbar';
  }

  selectLink(link: any): void {
    this.showNav = false;
    this.selectedLink = null;

    if (link === 'health') {
      window.open(environment.healthInsuranceLink, '_blank');
      return;
    }

    if (!this.mediaQuery.matches && !this.selectedLink) {
      this.router.navigate([link]); 
    } else {
      setTimeout(() => {
        this.router.navigate([link]);
      }, this.mediaQuery.matches ? 425 : 200);
    }
  }
}
