import { Component } from '@angular/core';
import { growHeight } from 'src/animations';
import { FAQ } from 'src/app/models/FAQ';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
  animations: [growHeight]
})
export class FaqPageComponent {
  SvgIcon = SvgIcon;
  faqs: FAQ[] = [
    {question: 'What is STF?', answer: 'STF Insurance Agency is an independent insurance agency in Arcanum, Ohio. We have been a trusted source for quality insurance protection for over 60 years! As an independent agency we work for you.', expanded: false},
    {question: 'How much are policies?', answer: 'At STF, we offer a range of insurance policies to suit different needs and circumstances. The cost of our policies varies depending on a number of factors unique to each customer, such as their age, driving history, and type of vehicle. To get an accurate quote, we encourage customers to get in touch with us anytime. Our team of experts will be happy to provide a personalized quote based on your specific requirements.', expanded: false},
    {question: 'Can I pay online?', answer: 'Yes, you can click on the "Pasyments|Claims" button at the top of the page to see the list of all our carriers. Find your carrier and click on "Payments" to get redirected to your carriers payment page.', expanded: false},
    {question: 'Can I get a quote online?', answer: 'Yes, if you click on the "Get Quote" button at the top of the page you will be redirected to our 3rd party service that sill provide you with an instant Auto, homeowners, renters, or condo owners quote', expanded: false}

  ]
}
