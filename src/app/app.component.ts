import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, NavigationEnd, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { filter, map, mergeMap } from 'rxjs';
import { routeAnimations } from 'src/animations';
import { StfService } from './services/stf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'stf';
  navigationType: string;
  prefersDarkScheme: MediaQueryList;
  coverageType: string;

  constructor(private router: Router, private contexts: ChildrenOutletContexts, public activatedRoute: ActivatedRoute,
    public stfService: StfService) {
    if (typeof window !== 'undefined') {
      this.prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
      this.prefersDarkScheme.addEventListener('change', this.handleFaviconTheme);
    }
  }

  ngOnInit() {
    AOS.init({ once: true });

    this.router.events.pipe(
      filter(e => {
        if (e instanceof NavigationStart)
          this.navigationType = e.navigationTrigger;
        if (e instanceof NavigationEnd && this.navigationType !== 'popstate')
          window.scroll({ top: 0, left: 0, behavior: 'auto' });

        return e instanceof NavigationEnd
      }),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data ),
    ).subscribe(data => this.loadSEO(data));
  }

  loadSEO(data): void {
    let seoData = data['seo'];
    if (this.router.url.startsWith('/coverages')) {
      const coverageType = this.router.url.split('/')[2];
      this.stfService.addTitle(seoData[coverageType + 'Title']);
      this.stfService.addMetaTags(seoData[coverageType + 'MetaTags']);
    } else {
      this.stfService.addTitle(seoData['title']);
      this.stfService.addMetaTags(seoData['metaTags']);
    }
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.handleFaviconTheme();
    }
  }

  handleFaviconTheme(): void {
    const favicon = document.querySelector('link[rel="icon"]');
    favicon['href'] = (window.matchMedia("(prefers-color-scheme: dark)")?.matches)
      ? './assets/favicon/favicon_white.png'
      : './assets/favicon/favicon_black.png';
  }
}
