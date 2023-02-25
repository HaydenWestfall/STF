import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { routeAnimations } from 'src/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  title = 'stf';
  navigationType: string;

  constructor(private router: Router, private contexts: ChildrenOutletContexts) { }

  ngOnInit() {
    AOS.init({
      once: true
    });
  
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.navigationType = event.navigationTrigger;
      }
      if (event instanceof NavigationEnd && this.navigationType !== 'popstate') {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'auto'
        })
      }
    });
  }
}
