import { Component } from '@angular/core';

@Component({
  selector: 'app-carriers-section',
  templateUrl: './carriers-section.component.html',
  styleUrls: ['./carriers-section.component.scss']
})
export class CarriersSectionComponent {

  imgPath = '../../../../assets/img/carrier-marquee/';

  carriers1: any[] = [
    { image: this.imgPath + 'auto-owners.png', size: '' },
    { image: this.imgPath + 'buckeye.png', size: '' },
    { image: this.imgPath + 'celina.png', size: '' },
    { image: this.imgPath + 'cna.png', size: '' },
    { image: this.imgPath + 'commonwealth.png', size: '' },
    { image: this.imgPath + 'dairyland.png', size: '' },
    { image: this.imgPath + 'donegal.png', size: '' },
    { image: this.imgPath + 'encova.png', size: '' },
    { image: this.imgPath + 'foremost.png', size: '' },
    { image: this.imgPath + 'auto-owners.png', size: '' },
    { image: this.imgPath + 'buckeye.png', size: '' },
    { image: this.imgPath + 'celina.png', size: '' },
    { image: this.imgPath + 'cna.png', size: '' },
    { image: this.imgPath + 'commonwealth.png', size: '' },
  ];

  carriers2: any[] = [
    { image: this.imgPath + 'grinnell.png', size: '' },
    { image: this.imgPath + 'hagerty.png', size: '' },
    { image: this.imgPath + 'hastings-mutual.png', size: '' },
    { image: this.imgPath + 'pekin.png', size: '' },
    { image: this.imgPath + 'progressive.png', size: '' },
    { image: this.imgPath + 'safeco.png', size: '' },
    { image: this.imgPath + 'trexis.png', size: '' },
    { image: this.imgPath + 'utica-national.png', size: '' },
    { image: this.imgPath + 'wayne.png', size: '' },
    { image: this.imgPath + 'grinnell.png', size: '' },
    { image: this.imgPath + 'hagerty.png', size: '' },
    { image: this.imgPath + 'hastings-mutual.png', size: '' },
    { image: this.imgPath + 'pekin.png', size: '' },
    { image: this.imgPath + 'progressive.png', size: '' },
  ];
}
