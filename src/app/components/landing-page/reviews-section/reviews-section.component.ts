import { Component } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.scss'],
  standalone: false,
})
export class ReviewsSectionComponent {
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
        'While I have had plenty of wonderful experiences with STF, I will call out one gem in specific. Heather M. has gone above and beyond working with me. I greatly appreciate all the time and attention to detail she has offered.',
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
      reviewer: 'Judith Whittaker',
      review:
        'I highly recommend STF Insurance Group, their customer service is second to none.',
    },
  ];
}
