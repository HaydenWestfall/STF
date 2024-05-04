import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { fade } from 'src/animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [fade]
})
export class AboutPageComponent implements AfterViewInit {
  basePath = '../../../assets/img/about/';
  basePathCarriers = '../../../assets/img/carrier-about/';
  strengths: any = [
    'We do not work for any single insurance company - we work for YOU. We analyze your special needs and circumstance and find the very best coverage for your situation.',
    'We keep ourselves abreast of what\'s new in the industry because we work with so many different companies. We keep on top of things for you and make sure your coverages are up-to-date, providing you with the best your money can buy.',
    'We can provide you with prompt and fair claims assistance because of our special relationships with the array of companies we represent. We make sure they give you the most responsive and fast service available.',
    'We continually educate ourselves to remain competitive in the industry. This way, you can count on us for well-informed insurance advice and counsel.',
    'The company believes that buying or selling insurance policies is more than just about price, they look for value in serving clients\' needs and aim to find the most suitable product instead of fulfilling a company quota.'
  ]
  carriers = [
    this.basePathCarriers + 'commonwealth.png',
    this.basePathCarriers + 'encova.png',
    this.basePathCarriers + 'grinnell.png',
    this.basePathCarriers + 'celina.png',
    this.basePathCarriers + 'progressive.png',
    this.basePathCarriers + 'safeco.png',
    this.basePathCarriers + 'auto-owners.png',
  ];

  yearsOfService = 0;
  familiesProtected = 0;
  customerRatings = 0;

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

  constructor(public cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.observer.observe(document.getElementById('statistic1'));
    this.observer.observe(document.getElementById('statistic2'));
    this.observer.observe(document.getElementById('statistic3'));
  }

  runCustomerRatingCounter(): void {
    this.customerRatings = 0;

    let cusotmerRatingsInterval: any = setInterval(() => {
      this.customerRatings = Math.round((this.customerRatings + 0.1) * 10) / 10

      if (this.customerRatings >= 4.5) {
        this.customerRatings = 4.5;
        clearInterval(cusotmerRatingsInterval);
      }
      this.cd.detectChanges();
    }, 750 / 45);
  }

  runFamiliesProtectedCounter(): void {
    this.familiesProtected = 0;

    let familiesProtectedInterval: any = setInterval(() => {
      this.familiesProtected = this.familiesProtected + 50;
      if (this.familiesProtected >= 3000) {
        this.familiesProtected = 3000;
        clearInterval(familiesProtectedInterval);
      }
      this.cd.detectChanges();
    }, 750 / 60);
  }

  runYearsOfServiceCounter(): void {
    this.yearsOfService = 0;

    let yearsOfServiceInterval: any = setInterval(() => {
      this.yearsOfService++;
      if (this.yearsOfService >= 60) {
        this.yearsOfService = 60;
        clearInterval(yearsOfServiceInterval);
      }
      this.cd.detectChanges();
    }, 750 / 60);
  }
}
