import { Component } from '@angular/core';

@Component({
  selector: 'app-carriers-section',
  templateUrl: './carriers-section.component.html',
  styleUrls: ['./carriers-section.component.scss'],
  standalone: false,
})
export class CarriersSectionComponent {
  imgPath = 'assets/img/carrier-marquee/';

  carriers: string[] = [
    'auto-owners',
    'buckeye',
    'celina',
    'cna',
    'commonwealth',
    'dairyland',
    'donegal',
    'encova',
    'foremost',
    'grinnell',
    'hagerty',
    'hastings-mutual',
    'progressive',
    'safeco',
    'trexis',
    'wayne',
  ].map((name) => this.imgPath + name + '.png');

  /** Duplicated once so the marquee can loop seamlessly. */
  get marqueeCarriers(): string[] {
    return [...this.carriers, ...this.carriers];
  }
}
