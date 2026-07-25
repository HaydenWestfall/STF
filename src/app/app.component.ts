import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { routeTransitionAnimations } from 'src/animations';
import { StfService } from './services/stf.service';
import { SeoService } from './services/seo.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations],
  standalone: false,
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'stf';
  navigationType: string;
  prefersDarkScheme: MediaQueryList;

  SEOStockTitle =
    'STF Insurance Group | Independent Insurance Agency in Arcanum, Ohio';
  SEOStockDescription =
    'STF Insurance Group is an independent Ohio agency comparing 20+ top-rated carriers for auto, home, farm, commercial, recreational, life & health insurance. Get a free quote today.';

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    public stfService: StfService,
    private seoService: SeoService
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
    this.router.events
      .pipe(
        filter((e) => {
          if (e instanceof NavigationStart)
            this.navigationType = e.navigationTrigger;
          if (
            e instanceof NavigationEnd &&
            this.navigationType !== 'popstate' &&
            typeof window !== 'undefined'
          )
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          return e instanceof NavigationEnd;
        }),
        map(() => this.activatedRoute),
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

  loadSEO(data: { [key: string]: any }): void {
    // Canonical URL is derived from the active route, ignoring query/fragment.
    const path = this.router.url.split('?')[0].split('#')[0];
    const url = environment.appUrl + path;

    let seo = data['seo'];
    if (path.startsWith('/coverages')) {
      const coverageType = path.split('/')[2];
      seo = seo ? seo[coverageType] : undefined;
    }

    this.seoService.update({
      title: seo?.title ?? this.SEOStockTitle,
      description: seo?.description ?? this.SEOStockDescription,
      url,
    });
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      this.handleFaviconTheme();
    }
  }

  handleFaviconTheme(): void {
    if (typeof window === 'undefined') return;
    const favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) return;
    favicon['href'] = window.matchMedia('(prefers-color-scheme: dark)')?.matches
      ? './assets/favicon/favicon_white.png'
      : './assets/favicon/favicon_black.png';
  }
}
