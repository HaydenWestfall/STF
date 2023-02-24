import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.scss']
})
export class ReviewsSectionComponent implements AfterViewInit {
  SvgIcon = SvgIcon;
  isDown = false;
  startX: number;
  scrollLeft: number;

  reviews: any[] = [
    { reviewer: 'Curt Garrison', review: 'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.' },
    { reviewer: 'Ty Figel', review: 'Great local business. Tracy is great to work with and always prompt.' },
    { reviewer: 'Ryan Clark', review: 'Great customer service, and good rates.' },
    { reviewer: 'Curt Garrison', review: 'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.' },
    { reviewer: 'Ty Figel', review: 'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.' },
    { reviewer: 'Ryan Clark', review: 'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.' }
  ];

  @ViewChild('reviewList') reviewList: ElementRef;

  ngAfterViewInit() {
    this.reviewList.nativeElement.scrollLeft = this.reviewList.nativeElement.offsetWidth / 2;
    
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDown = true;
    this.reviewList.nativeElement.classList.add('active');
    this.startX = event.pageX - this.reviewList.nativeElement.offsetLeft;
    this.scrollLeft = this.reviewList.nativeElement.scrollLeft;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.isDown = false;
    this.reviewList.nativeElement.classList.remove('active');
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isDown = false;
    this.reviewList.nativeElement.classList.remove('active');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if(!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - this.reviewList.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; //scroll-fast
    this.reviewList.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
}
