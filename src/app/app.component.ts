import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stf';

  constructor(private router: Router) { }

  ngOnInit() {
    AOS.init();
    this.router.events.subscribe((event) => {
      
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  test(): void {
    console.log('hey');
    
  }
}
