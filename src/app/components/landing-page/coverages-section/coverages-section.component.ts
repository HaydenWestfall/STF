import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CoverageCard } from 'src/app/models/Coverage';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-coverages-section',
  templateUrl: './coverages-section.component.html',
  styleUrls: ['./coverages-section.component.scss']
})
export class CoveragesSectionComponent {
  SvgIcon = SvgIcon;
  basePath = '../../../assets/img/icons/';
  isDown = false;
  startX: number;
  scrollLeft: number;

  coverages: CoverageCard[] = [
    {icon: this.basePath + 'auto.png', iconSize: 2.75, title: 'Auto', description: 'Collision, Liability, Roadside, and more', link: '/coverages/auto'},
    {icon: this.basePath + 'home.png', iconSize: 2.6, title: 'Home', description: 'Home, Other structures, Property, and more', link: '/coverages/home'},
    {icon: this.basePath + 'farm.png', iconSize: 2.75, title: 'Farm', description: 'Crops, Farmhouse, Equipment, and more', link: '/coverages/farm'},
    {icon: this.basePath + 'commercial.png', iconSize: 2.5, title: 'Commercial', description: 'Bonds, Liabilty, Property Insurance, and more', link: '/coverages/commercial'},
    {icon: this.basePath + 'recreational.png', iconSize: 3, title: 'Recreational', description: 'Boats, ATVs, Golf carts, and more', link: '/coverages/recreational'},
    {icon: this.basePath + 'life.png', iconSize: 3, title: 'Life', description: 'Term Life, Universal life, whole life, and more', link: '/coverages/life'},
    {icon: this.basePath + 'health.png', iconSize: 2.5, title: 'Health', description: 'Health insurance and Med Supplements', externalLink: environment.healthInsuranceLink},
  ];

  @ViewChild('coverageList') coverageList: ElementRef;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDown = true;
    this.coverageList.nativeElement.classList.add('active');
    this.startX = event.pageX - this.coverageList.nativeElement.offsetLeft;
    this.scrollLeft = this.coverageList.nativeElement.scrollLeft;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.isDown = false;
    this.coverageList.nativeElement.classList.remove('active');
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isDown = false;
    this.coverageList.nativeElement.classList.remove('active');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if(!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - this.coverageList.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; //scroll-fast
    this.coverageList.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
}
