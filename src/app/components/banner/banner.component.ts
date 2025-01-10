import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    standalone: false
})
export class BannerComponent implements OnInit {

  @Input('bannerType') bannerType: string = '';

  selectedBanner: any;
  bannerTypes: any[] = [
    { id: 'getQuote', message: 'Like what you see?', button: 'Get Quote', callback: '/quoteRedirect' },
    { id: 'contactUs', message: 'Have a question?', button: 'Contact us', callback: '/contact' },
  ];

  ngOnInit(): void {
    this.selectedBanner = this.bannerTypes.find(x => x.id === this.bannerType)
  }
}
