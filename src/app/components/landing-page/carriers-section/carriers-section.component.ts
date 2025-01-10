import { Component } from '@angular/core';

@Component({
    selector: 'app-carriers-section',
    templateUrl: './carriers-section.component.html',
    styleUrls: ['./carriers-section.component.scss'],
    standalone: false
})
export class CarriersSectionComponent {

  imgPath = '../../../../assets/img/carrier-marquee/';

  carriers1: string[] = [
    this.imgPath + 'auto-owners.png',
    this.imgPath + 'buckeye.png',
    this.imgPath + 'celina.png',
    this.imgPath + 'cna.png',
    this.imgPath + 'commonwealth.png',
    this.imgPath + 'dairyland.png',
    this.imgPath + 'donegal.png',
    this.imgPath + 'encova.png',
    this.imgPath + 'auto-owners.png',
    this.imgPath + 'buckeye.png',
    this.imgPath + 'celina.png',
    this.imgPath + 'cna.png',
    this.imgPath + 'commonwealth.png',
    this.imgPath + 'dairyland.png',
    this.imgPath + 'donegal.png',
    this.imgPath + 'encova.png',
  ];

  carriers2: string[] = [
    this.imgPath + 'grinnell.png',
    this.imgPath + 'hagerty.png',
    this.imgPath + 'hastings-mutual.png',
    this.imgPath + 'progressive.png',
    this.imgPath + 'safeco.png',
    this.imgPath + 'trexis.png',
    this.imgPath + 'wayne.png',
    this.imgPath + 'foremost.png',
    this.imgPath + 'grinnell.png',
    this.imgPath + 'hagerty.png',
    this.imgPath + 'hastings-mutual.png',
    this.imgPath + 'progressive.png',
    this.imgPath + 'safeco.png',
    this.imgPath + 'trexis.png',
    this.imgPath + 'wayne.png',
    this.imgPath + 'foremost.png',
  ];
}
