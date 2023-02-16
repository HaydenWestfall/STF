import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
  animations: []
})
export class FaqPageComponent {
  SvgIcon = SvgIcon;

  faqs: any[] = [
    {question: 'What is STF?', answer: 'STF Insurance Agency is an independent insurance agency in Arcanum, Ohio. We have been a trusted source for quality insurance protection for over 60 years! As an independent agency we work for you.'},
    {question: 'How much are policies?', answer: 'STF Insurance Agency is an independent insurance agency in Arcanum, Ohio. We have been a trusted source for quality insurance protection for over 60 years! As an independent agency we work for you.'},
    {question: 'Can I pay online?', answer: 'STF Insurance Agency is an independent insurance agency in Arcanum, Ohio. We have been a trusted source for quality insurance protection for over 60 years! As an independent agency we work for you.'},
    {question: 'Can I pay over the phone?', answer: 'STF Insurance Agency is an independent insurance agency in Arcanum, Ohio. We have been a trusted source for quality insurance protection for over 60 years! As an independent agency we work for you.'},
    {question: 'Can I get a quote online?', answer: 'STF Insurance Agency is an independent insurance agency in Arcanum, Ohio. We have been a trusted source for quality insurance protection for over 60 years! As an independent agency we work for you.'}
  ]
}
