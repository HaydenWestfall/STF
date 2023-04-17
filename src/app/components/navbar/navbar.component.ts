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
  basePath = '../../../assets/img/icons/';
  selectedLink: Link = null;
  whiteNavbarRoute = false;
  mediaQuery: MediaQueryList;
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
      {icon: this.basePath + 'about.png', iconSize: 2, label: 'About', navigateTo: '/about'},
      {icon: this.basePath + 'carriers.png', iconSize: 2.75, label: 'Carriers', navigateTo: '/carriers'},
      {icon: this.basePath + 'meet_the_team.png', iconSize: 2.75, label: 'Team', navigateTo: '/team'},
      {icon: this.basePath + 'locations.png', iconSize: 2.5, label: 'Locations', navigateTo: '/locations'},
      {icon: this.basePath + 'faq.png', iconSize: 2.25, label: 'FAQ', navigateTo: '/faq'},
      {icon: this.basePath + 'contact.png', iconSize: 2.25, label: 'Contact', navigateTo: '/contact'}
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
      {icon: this.basePath + 'auto.png', iconSize: 2.5, label: 'Auto\nInsurance', navigateTo: '/coverages/auto'},
      {icon: this.basePath + 'home.png', iconSize: 2.5, label: 'Home\nInsurance', navigateTo: '/coverages/home'},
      {icon: this.basePath + 'farm.png', iconSize: 2.5, label: 'Farm\nInsurance', navigateTo: '/coverages/farm'},
      {icon: this.basePath + 'commercial.png', iconSize: 2.5, label: 'Commercial\nInsurance', navigateTo: '/coverages/commercial'},
      {icon: this.basePath + 'recreational.png', iconSize: 2.5, label: 'Recreational\nInsurance', navigateTo: '/coverages/recreational'},
      {icon: this.basePath + 'life.png', iconSize: 2.5, label: 'Life\nInsurance', navigateTo: '/coverages/life'},
      {icon: this.basePath + 'health.png', iconSize: 2.5, label: 'Health\nInsurance', navigateTo: 'health'},
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

  constructor(public router: Router, private elementRef: ElementRef, public stf: StfService) {
    this.mediaQuery = window.matchMedia('(max-width: 768px)');
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event['url'];
        this.whiteNavbarRoute = (['/carriers', '/faq', '/locations', '/team'].includes(url)) ? true : false;
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
    if (typeof window === 'undefined') {
      return null;
    }
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
