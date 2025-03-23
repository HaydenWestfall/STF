import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: false,
})
export class BannerComponent implements OnInit, AfterViewInit {
  @Input('bannerType') bannerType: string = '';

  selectedBanner: any;
  bannerTypes: any[] = [
    {
      id: 'getQuote',
      message: 'Like what you see?',
      button: 'Get Quote',
      callback: '/quoteRedirect',
    },
    {
      id: 'contactUs',
      message: 'Have a question?',
      button: 'Contact us',
      callback: '/contact',
    },
  ];

  ngOnInit(): void {
    this.selectedBanner = this.bannerTypes.find(
      (x) => x.id === this.bannerType
    );
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      gsap.fromTo(
        '#banner-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#banner-header',
            start: 'top 80%',
            scrub: false,
          },
        }
      );
      gsap.fromTo(
        '#banner-action',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#banner-action',
            start: 'top 80%',
            scrub: false,
          },
        }
      );
    }, 250);
  }
}
