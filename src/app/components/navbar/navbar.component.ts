import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { NavChild, NavGroup } from 'src/app/models/Navbar';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false,
})
export class NavbarComponent implements OnInit, OnDestroy {
  env = environment;
  iconPath = 'assets/img/icons/';

  /** Id of the desktop dropdown that is currently open. */
  openMenu: string | null = null;
  /** Id of the mobile accordion section that is currently open. */
  openAccordion: string | null = null;
  mobileNavOpen = false;
  scrolled = false;

  navGroups: NavGroup[] = [
    {
      id: 'coverage',
      label: 'Insurance',
      layout: 'mega',
      children: [
        {
          label: 'Auto Insurance',
          description: 'Cars, trucks, motorcycles and the drivers you love.',
          icon: this.iconPath + 'auto.png',
          route: '/coverages/auto',
        },
        {
          label: 'Home Insurance',
          description: 'Houses, condos, renters and everything inside.',
          icon: this.iconPath + 'home.png',
          route: '/coverages/home',
        },
        {
          label: 'Farm Insurance',
          description: 'Operations, equipment, livestock and farm liability.',
          icon: this.iconPath + 'farm.png',
          route: '/coverages/farm',
        },
        {
          label: 'Commercial Insurance',
          description: 'Property, liability, fleets, bonds and workers comp.',
          icon: this.iconPath + 'commercial.png',
          route: '/coverages/commercial',
        },
        {
          label: 'Recreational Insurance',
          description: 'Boats, RVs, campers, ATVs, golf carts and classics.',
          icon: this.iconPath + 'recreational.png',
          route: '/coverages/recreational',
        },
        {
          label: 'Life Insurance',
          description: 'Term, whole and final expense protection.',
          icon: this.iconPath + 'life.png',
          route: '/coverages/life',
        },
        {
          label: 'Health & Medicare',
          description: 'Individual health plans and Medicare supplements.',
          icon: this.iconPath + 'health.png',
          externalUrl: environment.healthInsuranceLink,
        },
      ],
    },
    {
      id: 'about',
      label: 'About',
      layout: 'list',
      children: [
        { label: 'About STF', route: '/about' },
        { label: 'Our Team', route: '/team' },
        { label: 'Our Carriers', route: '/carriers' },
        { label: 'FAQ', route: '/faq' },
      ],
    },
    { id: 'locations', label: 'Locations', route: '/locations' },
    { id: 'carriers', label: 'Payments & Claims', route: '/carriers' },
    { id: 'contact', label: 'Contact', route: '/contact' },
  ];

  offices = [
    { label: 'Arcanum', phone: this.env.arcanumPhoneNumber },
    { label: 'Vandalia', phone: this.env.vandaliaPhoneNumber },
    { label: 'Middletown', phone: this.env.middletownPhoneNumber },
  ];

  private routerSub: Subscription;
  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    public router: Router,
    private elementRef: ElementRef,
  ) {}

  ngOnInit(): void {
    this.routerSub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.closeAll());
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.clearCloseTimer();
    this.setBodyLock(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 8;
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: any): void {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.openMenu = null;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeAll();
  }

  toggleMenu(group: NavGroup): void {
    this.openMenu = this.openMenu === group.id ? null : group.id;
  }

  openMenuFor(group: NavGroup): void {
    this.clearCloseTimer();
    if (group.children?.length) {
      this.openMenu = group.id;
    } else {
      this.openMenu = null;
    }
  }

  /**
   * Close the open dropdown after a short grace period. This lets the pointer
   * travel from the trigger to the overlay without the menu snapping shut.
   */
  scheduleClose(): void {
    this.clearCloseTimer();
    this.closeTimer = setTimeout(() => {
      this.openMenu = null;
      this.closeTimer = null;
    }, 180);
  }

  private clearCloseTimer(): void {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  toggleAccordion(group: NavGroup): void {
    this.openAccordion = this.openAccordion === group.id ? null : group.id;
  }

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
    this.openAccordion = null;
    this.setBodyLock(this.mobileNavOpen);
  }

  navigate(child: NavChild): void {
    if (child.externalUrl) {
      window.open(child.externalUrl, '_blank', 'noopener');
      this.closeAll();
      return;
    }
    this.router.navigate([child.route]);
  }

  closeAll(): void {
    this.clearCloseTimer();
    this.openMenu = null;
    this.openAccordion = null;
    this.mobileNavOpen = false;
    this.setBodyLock(false);
  }

  private setBodyLock(locked: boolean): void {
    if (typeof document === 'undefined') return;
    document.body.classList.toggle('nav-open', locked);
  }
}
