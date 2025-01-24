import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Review } from 'src/app/models/Review';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { environment } from 'src/environments/environment.development';
import { StfService } from 'src/app/services/stf.service';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.scss'],
  standalone: false,
})
export class ReviewsSectionComponent implements AfterViewInit, OnDestroy {
  stfService = inject(StfService);

  SvgIcon = SvgIcon;
  isDown = false;
  startX: number;
  scrollLeft: number;
  reviewLink = environment.reviewLink;
  reviewIndex = 2;
  reviewInterval = null;

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
      reviewer: 'Judith Whittaker',
      review:
        'I highly recommend STF Insurance Group, their customer service is second to none.',
    },
    {
      reviewer: 'Curt Garrison',
      review:
        'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.',
    },
    {
      reviewer: 'Aaron Fraley',
      review:
        'Very easy to work with and great communication. They will work hard to find you the right coverage with great prices.',
    },
    {
      reviewer: 'Dave Lowe',
      review:
        'Karen is now and has always been ready to assist in my insurance needs, and I ask a lot of her. I appreciate her efforts.',
    },
    {
      reviewer: 'Charlotte Nieman',
      review:
        "James and staff are the absolute best! I've been with them for many years but recently was involved in a hit and run crash where the driver who hit me fled the scene after totaling my vehicle. James and Victoria were wonderful, assisting through the ordeal...",
    },
    {
      reviewer: 'Ty Figel',
      review:
        'Great local business. Tracy is great to work with and always prompt.',
    },
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
      reviewer: 'Judith Whittaker',
      review:
        'I highly recommend STF Insurance Group, their customer service is second to none.',
    },
    {
      reviewer: 'Curt Garrison',
      review:
        'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.',
    },
    {
      reviewer: 'Aaron Fraley',
      review:
        'Very easy to work with and great communication. They will work hard to find you the right coverage with great prices.',
    },
    {
      reviewer: 'Dave Lowe',
      review:
        'Karen is now and has always been ready to assist in my insurance needs, and I ask a lot of her. I appreciate her efforts.',
    },
  ];

  @ViewChild('reviewList') reviewList: ElementRef;

  ngAfterViewInit() {
    this.reviewList.nativeElement.scrollLeft =
      this.reviewList.nativeElement.offsetWidth / 2;

    this.startAutoScroller();

    setTimeout(() => {
      this.stfService.animateText('#review-section-header');
    }, 250);
  }

  startAutoScroller(): void {
    this.autoScrollReview();
    this.reviewInterval = setInterval(() => {
      document.getElementById('auto-scroller').style.transition =
        'transform 0.75s ease-in-out';
      this.autoScrollReview();
    }, 4500);
  }

  autoScrollReview(): void {
    const reviewContainer = document.getElementById('auto-scroller');
    reviewContainer.style.transform = `translateX(-${this.calculateFocusReviewCenter(
      this.reviewIndex
    )}px)`;

    if (this.reviewIndex === this.reviews.length - 5) {
      // Wait for scroll animation to finish, turn animation off and reset scroll position to 0
      // Reset scroll reviewIndex to 3 as it is the first one after repeats
      setTimeout(() => {
        reviewContainer.style.transition = '';
        reviewContainer.style.transform = `translateX(-${this.calculateFocusReviewCenter(
          2
        )}px)`;
        this.reviewIndex = 3;
      }, 750);
    } else {
      this.reviewIndex++;
    }
  }

  calculateFocusReviewCenter(index: number): number {
    return (320 + 96) * index + 160;
  }

  ngOnDestroy(): void {
    clearInterval(this.reviewInterval);
  }
}
