import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { fade } from 'src/animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [fade]
})
export class AboutPageComponent implements AfterViewInit {
  basePath = '../../../assets/img/about/';
  yearsOfService = 0;
  familiesProtected = 0;
  customerRatings = 0;

  basePathCarriers = '../../../assets/img/carrier-about/';
  carriers = [
    this.basePathCarriers + 'commonwealth.png',
    this.basePathCarriers + 'encova.png',
    this.basePathCarriers + 'grinnell.png',
    this.basePathCarriers + 'celina.png',
    this.basePathCarriers + 'progressive.png',
    this.basePathCarriers + 'safeco.png',
    this.basePathCarriers + 'auto-owners.png',
  ]

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.id === 'statistic1') {
        this.runYearsOfServiceCounter();
      } else if (entry.isIntersecting && entry.target.id === 'statistic2') {
        this.runFamiliesProtectedCounter();
      } else if (entry.isIntersecting && entry.target.id === 'statistic3') {
        this.runCustomerRatingCounter();
      }
    });
  });

  @ViewChild('statistic') statistic: HTMLElement;

  constructor(public cd: ChangeDetectorRef, public scrollToView: ViewportScroller) { }

  ngAfterViewInit() {
    this.observer.observe(document.getElementById('statistic1'));
    this.observer.observe(document.getElementById('statistic2'));
    this.observer.observe(document.getElementById('statistic3'));
  }

  runCustomerRatingCounter(): void {
    this.customerRatings = 0;
    
    let cusotmerRatingsInterval: any = setInterval(()=>{
      this.customerRatings = Math.round((this.customerRatings + 0.1) * 10) / 10
      
      if(this.customerRatings == 4.5) {
        clearInterval(cusotmerRatingsInterval);
      }
      this.cd.detectChanges();
    }, 750 / 45);
  }

  runFamiliesProtectedCounter(): void {
    this.familiesProtected = 0;
  
    let familiesProtectedInterval: any = setInterval(()=>{
      this.familiesProtected = this.familiesProtected + 50;
      if(this.familiesProtected == 5000) {
        clearInterval(familiesProtectedInterval);
      }
      this.cd.detectChanges();
    }, 750 / 100);
  }

  runYearsOfServiceCounter(): void {
    this.yearsOfService = 0;
    
    let yearsOfServiceInterval: any = setInterval(()=>{
      this.yearsOfService++;
      if(this.yearsOfService == 60) {
        clearInterval(yearsOfServiceInterval);
      }
      this.cd.detectChanges();
    }, 750 / 60);
  }
}
