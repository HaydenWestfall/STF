import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-coverages-section',
  templateUrl: './coverages-section.component.html',
  styleUrls: ['./coverages-section.component.scss']
})
export class CoveragesSectionComponent {
  SvgIcon = SvgIcon;
  healthInsuranceLink: string = 'https://www.google.com';
  isDown = false;
  startX;
  scrollLeft;

  coverages: any[] = [
    {icon: this.SvgIcon.AUTO_INSURANCE, iconSize: 4, title: 'Auto', description: 'Collision, Liability, Roadside, and more', link: '/coverages/auto'},
    {icon: this.SvgIcon.HOME_INSURANCE, iconSize: 3.6, title: 'Home', description: 'Home, Other structures, Property, and more', link: '/coverages/home'},
    {icon: this.SvgIcon.FARM_INSURANCE, iconSize: 3.5, title: 'Farm', description: 'Crops, Farmhouse, Equipment, and more', link: '/coverages/farm'},
    {icon: this.SvgIcon.COMMERCIAL_INSURANCE, iconSize: 3, title: 'Commercial', description: 'Bonds, Liabilty, Property Insurance, and more', link: '/coverages/commercial'},
    {icon: this.SvgIcon.RECREATIONAL_INSRUANCE, iconSize: 3, title: 'Recreational', description: 'Boats, ATVs, Golf carts, and more', link: '/coverages/recreational'},
    {icon: this.SvgIcon.LIFE_INSURANCE, iconSize: 3.4, title: 'Life', description: 'Term Life, Universal life, whole life, and more', link: '/coverages/life'},
    {icon: this.SvgIcon.HEALTH_INSURANCE, iconSize: 3, title: 'Health', description: 'Term Life, Universal life, whole life, and more', externalLink: this.healthInsuranceLink},
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
