import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { fade, fadeInPlace, growHeight } from 'src/animations';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
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

  aboutLinks = {
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
      {icon: SvgIcon.LOCATION, iconSize: 2.5, label: 'Locations', navigateTo: '/locations'}
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
    ],
    dropdown: [
      {icon: SvgIcon.AUTO_INSURANCE, iconSize: 3.5, label: 'Auto\nInsurance', navigateTo: '/coverages/auto'},
      {icon: SvgIcon.HOME_INSURANCE, iconSize: 3.5, label: 'Home\nInsurance', navigateTo: '/coverages/home'},
      {icon: SvgIcon.FARM_INSURANCE, iconSize: 3.5, label: 'Farm\nInsurance', navigateTo: '/coverages/farm'},
      {icon: SvgIcon.COMMERCIAL_INSURANCE, iconSize: 3.5, label: 'Commercial\nInsurance', navigateTo: '/coverages/commercial'},
      {icon: SvgIcon.RECREATIONAL_INSRUANCE, iconSize: 3.5, label: 'Recreational\nInsurance', navigateTo: '/coverages/recreational'},
      {icon: SvgIcon.LIFE_INSURANCE, iconSize: 3.5, label: 'Life\nInsurance', navigateTo: '/coverages/life'},
      {icon: SvgIcon.HEALTH_INSURANCE, iconSize: 2.5, label: 'Health\nInsurance', navigateTo: 'health'},
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

  externalLink = 'https://www.google.com';
  selectedLink: any = null;
  whiteNavbarRoute = false;

  mediaQuery: any = window.matchMedia('(max-width: 768px)');

  constructor(public router: Router, private elementRef: ElementRef) { }

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
    if (link === 'health') {
      window.open(this.externalLink, '_blank');
      return;
    }

    this.showNav = false;
    this.selectedLink = null;
    setTimeout(() => {
      this.router.navigate([link]);
    }, this.mediaQuery.matches ? 425 : 200);
  }
}
