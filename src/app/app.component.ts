import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { routeAnimations } from 'src/animations';

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

  constructor(private router: Router, private contexts: ChildrenOutletContexts) {
    if (typeof window !== 'undefined') {
      this.prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
      this.prefersDarkScheme.addEventListener('change', this.handleFaviconTheme);
    }
  }

  ngOnInit() {
    if (typeof document !== 'undefined') {
      AOS.init({ once: true });
    
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart)
          this.navigationType = event.navigationTrigger;
        if (event instanceof NavigationEnd && this.navigationType !== 'popstate')
          window.scroll({ top: 0, left: 0, behavior: 'auto' });
      });
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
