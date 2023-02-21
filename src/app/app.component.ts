import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router, RouterOutlet } from '@angular/router';
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

  constructor(private router: Router, private contexts: ChildrenOutletContexts) { }

  ngOnInit() {
    AOS.init({
      // once: true
    });
  
    this.router.events.subscribe((event) => {
      
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }
}
