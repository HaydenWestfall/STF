import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../../directives/reveal.directive';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-about-section',
    templateUrl: './about-section.component.html',
    styleUrls: ['./about-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
    RevealDirective,
    RouterLink
],
})
export class AboutSectionComponent {
  benefits = [
    {
      title: 'We shop the market, you keep the choice',
      description:
        'Because we are independent, we can quote your risk with more than 20 carriers at once and show you the differences side by side — not just the price.',
    },
    {
      title: 'One agent for the whole household',
      description:
        'Home, auto, farm equipment, the business truck and your life policy can all sit with one agent who knows how the pieces fit together.',
    },
    {
      title: 'A real person at claim time',
      description:
        'When something goes wrong you call our office, not a call center. We help you open the claim and follow it through to the payment.',
    },
    {
      title: 'Reviewed at every renewal',
      description:
        'Values, vehicles and businesses change. We re-check your coverage and re-market your policy when the numbers stop making sense.',
    },
    {
      title: 'Advice that keeps you ahead',
      description:
        'We stay on top of regulatory and market shifts so your protection keeps pace with changing risks, costs, and opportunities.',
    },
  ];
}
