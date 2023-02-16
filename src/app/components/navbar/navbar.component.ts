import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fade, growHeight } from 'src/animations';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { panelSlideIn } from './navbar.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [panelSlideIn, fade, growHeight]
})
export class NavbarComponent {
  SvgIcon = SvgIcon;
  showNav = true;
  navbarClass = 'transparent';

  aboutLinks = {
    title: 'About',
    links: [
      'About Us',
      'Our Locations',
      'FAQ'
    ],
    dropdown: [
      {icon: SvgIcon.SHIELD, iconSize: 3, label: 'Mission', navigateTo: '/about'},
      {icon: SvgIcon.TEAM, iconSize: 2.5, label: 'Team', navigateTo: '/team'},
      {icon: SvgIcon.STRENGTH, iconSize: 2.5, label: 'Strengths', navigateTo: '/strengths'},
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
      {icon: SvgIcon.HOME_INSURANCE, iconSize: 3.5, label: 'Home\nInsurance', navigateTo: '/coverages/home'},
      {icon: SvgIcon.LIFE_INSURANCE, iconSize: 3.5, label: 'Life\nInsurance', navigateTo: '/coverages/life'},
      {icon: SvgIcon.AUTO_INSURANCE, iconSize: 3.5, label: 'Auto\nInsurance', navigateTo: '/coverages/auto'},
      {icon: SvgIcon.HEALTH_INSURANCE, iconSize: 2.5, label: 'Health\nInsurance', navigateTo: 'health'},
      {icon: SvgIcon.COMMERCIAL_INSURANCE, iconSize: 3.5, label: 'Commercial\nInsurance', navigateTo: '/coverages/commercial'},
      {icon: SvgIcon.FARM_INSURANCE, iconSize: 3.5, label: 'Farm\nInsurance', navigateTo: '/coverages/farm'}
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

  mediaQuery: any = window.matchMedia('(max-width: 768px)');

  constructor(public router: Router, private elementRef: ElementRef) { }

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
    return (window.scrollY < 70) ? 'clear-navbar' : 'white-navbar';
  }

  selectLink(link: any): void {
    if (link === 'health') {
      window.open(this.externalLink, '_blank');
      return;
    }

    this.selectedLink = null;
    setTimeout(() => {
      this.router.navigate([link]);
    }, 200);
  }
}
