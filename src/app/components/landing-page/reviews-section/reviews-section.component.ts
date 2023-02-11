import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-reviews-section',
  templateUrl: './reviews-section.component.html',
  styleUrls: ['./reviews-section.component.scss']
})
export class ReviewsSectionComponent {
  SvgIcon = SvgIcon;

  reviews: any[] = [
    { reviewer: 'Curt Garrison', review: 'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.' },
    { reviewer: 'Ty Figel', review: 'Great local business. Tracy is great to work with and always prompt.' },
    { reviewer: 'Ryan Clark', review: 'Great customer service, and good rates.' },
    { reviewer: 'Curt Garrison', review: 'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.' },
    { reviewer: 'Ty Figel', review: 'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.' },
    { reviewer: 'Ryan Clark', review: 'Excellent customer service. Jamie is always on it. Prompt responses. Always looking to find the most cost effective solutions for their customers.' }
  ];
}
