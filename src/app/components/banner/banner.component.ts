import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RevealDirective } from '../../directives/reveal.directive';
import { RouterLink } from '@angular/router';

interface BannerContent {
  id: string;
  eyebrow: string;
  message: string;
  supporting: string;
  button: string;
  callback: string;
}

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RevealDirective, RouterLink],
})
export class BannerComponent implements OnInit {
  @Input('bannerType') bannerType: string = 'getQuote';

  env = environment;
  selectedBanner: BannerContent;

  bannerTypes: BannerContent[] = [
    {
      id: 'getQuote',
      eyebrow: 'Free quote',
      message: 'See what the right coverage actually costs',
      supporting:
        'Send us a few details and an agent will compare your options across our carriers. No cost, no obligation, no automated runaround.',
      button: 'Get a Quote',
      callback: '/quoteRedirect',
    },
    {
      id: 'contactUs',
      eyebrow: 'Talk to us',
      message: 'Have a question about your policy?',
      supporting:
        'Call the office nearest you or send us a message. A licensed agent — not a call center — will get back to you.',
      button: 'Contact Us',
      callback: '/contact',
    },
  ];

  ngOnInit(): void {
    this.selectedBanner =
      this.bannerTypes.find((x) => x.id === this.bannerType) ??
      this.bannerTypes[0];
  }
}
