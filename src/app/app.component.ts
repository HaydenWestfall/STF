import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';
import * as AOS from 'aos';
import { filter, map, mergeMap } from 'rxjs';
import { routeAnimations } from 'src/animations';
import { StfService } from './services/stf.service';
import { environment } from 'src/environments/environment.development';
import gsap from 'gsap';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'stf';
  navigationType: string;
  prefersDarkScheme: MediaQueryList;
  coverageType: string;

  SEOStockTitle = 'STF Insurance Group | Protecting you with Reliable Coverage';
  SEOStockDescription = [
    { name: 'title', content: 'Meet the STF Insurance Group' },
    {
      name: 'description',
      content:
        'Protect your family and assets with comprehensive insurance coverage from STF Insurance Group. Our expert agents offer a wide range of policies, including auto, home, farm, health, commercial, recreational, and life insurance, tailored to your unique needs. Contact us today to learn more and get a free quote.',
    },
    { name: 'url', content: environment.appUrl + '/' },
  ];

  constructor(
    private router: Router,
    private contexts: ChildrenOutletContexts,
    public activatedRoute: ActivatedRoute,
    public stfService: StfService
  ) {
    if (typeof window !== 'undefined') {
      this.prefersDarkScheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      this.prefersDarkScheme.addEventListener(
        'change',
        this.handleFaviconTheme
      );
    }
  }

  ngOnInit() {
    AOS.init({ once: true });

    const lenis = new Lenis();
    lenis.on('scroll', (e: any) => {});
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    this.router.events
      .pipe(
        filter((e) => {
          if (e instanceof NavigationStart)
            this.navigationType = e.navigationTrigger;
          if (e instanceof NavigationEnd && this.navigationType !== 'popstate')
            window.scroll({ top: 0, left: 0, behavior: 'auto' });
          return e instanceof NavigationEnd;
        }),
        map((e) => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        this.loadSEO(data);
        this.stfService.pushRouteHistory(this.router.url);
      });
  }

  loadSEO(data): void {
    let seoData = data['seo'];
    if (this.router.url.startsWith('/coverages')) {
      const coverageType = this.router.url.split('/')[2];
      this.stfService.addTitle(seoData[coverageType + 'Title']);
      this.stfService.addMetaTags(seoData[coverageType + 'MetaTags']);
    } else {
      const title = seoData ? seoData.title : this.SEOStockTitle;
      const desc = seoData ? seoData.metaTags : this.SEOStockDescription;
      this.stfService.addTitle(title);
      this.stfService.addMetaTags(desc);
    }
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.handleFaviconTheme();
    }
  }

  handleFaviconTheme(): void {
    const favicon = document.querySelector('link[rel="icon"]');
    favicon['href'] = window.matchMedia('(prefers-color-scheme: dark)')?.matches
      ? './assets/favicon/favicon_white.png'
      : './assets/favicon/favicon_black.png';
  }
}
