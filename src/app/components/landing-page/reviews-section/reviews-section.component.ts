import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { Review } from 'src/app/models/Review';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { environment } from 'src/environments/environment.development';
import { gsap } from 'gsap';
import { StfService } from 'src/app/services/stf.service';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.scss'],
  standalone: false,
})
export class ReviewsSectionComponent implements AfterViewInit {
  stfService = inject(StfService);

  SvgIcon = SvgIcon;
  isDown = false;
  startX: number;
  scrollLeft: number;
  reviewLink = environment.reviewLink;

  reviews: Review[] = [
    {
      reviewer: 'Katie Smith',
      review:
        'We have been with STF for years now with our personal home and auto policies as well as our business insurance and commercial auto. The service we have been given by Hannah and everyone in the office is absolutely professional and quick.',
    },
    {
      reviewer: 'Doug Littman',
      review:
        'STF Insurance is fantastic. They have the best customer service I have ever seen and the staff is very professional and friendly. Love doing business with them.',
    },
    {
      reviewer: 'Emily Wagner',
      review:
        'While I have had plenty of wonderful experiences with STF. I Will call out one gem in specific. Heather M. has gone above and beyond working with me. I greatly appreciate all the time and attention to detail she has offered.',
    },
    {
      reviewer: 'Ty Figel',
      review:
        'Great local business. Tracy is great to work with and always prompt.',
    },
    {
      reviewer: 'Ryan Clark',
      review: 'Great customer service, and good rates.',
    },
    {
      reviewer: 'Curt Garrison',
      review:
        'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.',
    },
    {
      reviewer: 'Ty Figel',
      review:
        'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.',
    },
    {
      reviewer: 'Ryan Clark',
      review:
        'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.',
    },
  ];

  @ViewChild('reviewList') reviewList: ElementRef;

  ngAfterViewInit() {
    this.reviewList.nativeElement.scrollLeft =
      this.reviewList.nativeElement.offsetWidth / 2;

    setTimeout(() => {
      this.stfService.animateText('#review-section-header');
    }, 250);
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
    if (!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - this.reviewList.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3; //scroll-fast
    this.reviewList.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
}
