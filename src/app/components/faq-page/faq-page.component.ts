import { Component, OnDestroy, OnInit } from '@angular/core';
import { growHeight } from 'src/animations';
import { FAQ } from 'src/app/models/FAQ';
import { SeoService } from 'src/app/services/seo.service';
import { environment } from 'src/environments/environment.development';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../directives/reveal.directive';
import { BannerComponent } from '../banner/banner.component';

interface FaqGroup {
  title: string;
  faqs: FAQ[];
}

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss'],
    animations: [growHeight],
    imports: [
    RouterLink,
    RevealDirective,
    BannerComponent
],
})
export class FaqPageComponent implements OnInit, OnDestroy {
  private static readonly JSON_LD_ID = 'faq-jsonld';

  env = environment;

  constructor(private seo: SeoService) {}

  groups: FaqGroup[] = [
    {
      title: 'About the agency',
      faqs: [
        {
          question: 'What is STF Insurance Group?',
          answer:
            'STF Insurance Group is an independent insurance agency headquartered in Arcanum, Ohio, with offices in Vandalia and Middletown. We have been a trusted source for insurance protection for more than 60 years. Being independent means we represent many insurance companies rather than one, so we can shop your coverage rather than sell you a single product.',
          expanded: false,
        },
        {
          question: 'What does "independent agency" actually mean for me?',
          answer:
            'A captive agent can only sell you what their one company offers. We hold contracts with more than 20 carriers, so we compare them for you and place your policy with the one that fits best. If that company raises rates or changes its appetite later, we can move you without you having to start over with a new agent.',
          expanded: false,
        },
        {
          question: 'What areas do you serve?',
          answer:
            'We primarily serve Darke, Montgomery, Preble, Miami, Butler and Warren counties and the surrounding west-central and southwest Ohio communities. If you move within Ohio you can usually keep the same agent and the same policies.',
          expanded: false,
        },
        {
          question: 'What kinds of insurance do you write?',
          answer:
            'Auto, home, renters and condo, farm and agribusiness, commercial, recreational vehicles and watercraft, life, and health and Medicare. That means one office can handle the house, the vehicles, the shop, the ground you farm and the life policy that protects your family.',
          expanded: false,
        },
      ],
    },
    {
      title: 'Quotes and pricing',
      faqs: [
        {
          question: 'How much do policies cost?',
          answer:
            'It depends on far more than one number. Rates are driven by what you are insuring, where it is located, your claims and credit history, the limits and deductibles you choose, and the discounts you qualify for. Because we shop several carriers, we can usually show you a meaningful spread of prices for the same coverage — and explain why they differ.',
          expanded: false,
        },
        {
          question: 'Can I get a quote online?',
          answer:
            'Yes. The "Get a Quote" button at the top of any page takes you to our online quoting service for auto, homeowners, renters and condo coverage. For farm, commercial, life and Medicare, call or send us a message — those need a short conversation to quote accurately.',
          expanded: false,
        },
        {
          question: 'Is a quote free? Am I obligated to buy?',
          answer:
            'Quotes are always free and there is never an obligation. If your current coverage is already competitive, we will tell you that too.',
          expanded: false,
        },
        {
          question: 'What information do you need to quote me?',
          answer:
            'For auto: drivers, dates of birth, license numbers and VINs. For home: the address, square footage, year built, roof age and recent updates. For business or farm: what you do, your revenue or payroll, buildings and equipment. Your current declarations page covers most of it in one document.',
          expanded: false,
        },
        {
          question: 'Why did my rate go up when nothing changed?',
          answer:
            'Insurance rates respond to what is happening across an entire book of business, not just your policy. Construction and repair costs, vehicle parts prices, weather losses in your area and reinsurance costs all feed into it. When an increase does not make sense for you, that is the point to call us and re-shop the market.',
          expanded: false,
        },
      ],
    },
    {
      title: 'Policies and coverage',
      faqs: [
        {
          question: 'How often should I review my coverage?',
          answer:
            'At least once a year, and any time something changes — a remodel, a new roof, a new driver, a new vehicle, a marriage or divorce, a new business, a child moving out, or buying an expensive piece of equipment. Most coverage gaps we find are the result of a life change that never made it onto the policy.',
          expanded: false,
        },
        {
          question: 'What is a deductible and how do I choose one?',
          answer:
            'A deductible is the amount you pay before the policy responds. Raising it lowers your premium, but only choose an amount you could comfortably write a check for tomorrow. The savings between a $500 and a $1,000 deductible are often worth taking; the savings between $1,000 and $5,000 sometimes are not.',
          expanded: false,
        },
        {
          question: 'What is an umbrella policy and do I need one?',
          answer:
            'An umbrella sits on top of your home, auto and farm liability and adds another million dollars or more of protection. It is one of the least expensive coverages relative to what it does. Families with teen drivers, rental property, farm exposures, pools or significant assets are the most common candidates.',
          expanded: false,
        },
        {
          question: 'Can I add or remove a vehicle or driver mid-term?',
          answer:
            'Yes. Call, email or stop in and we can make the change the same day and get you proof of insurance right away. Changes are prorated, so you are only charged for the time the coverage is on the policy.',
          expanded: false,
        },
      ],
    },
    {
      title: 'Payments and claims',
      faqs: [
        {
          question: 'Can I pay my bill online?',
          answer:
            'Yes. Click "Payments & Claims" at the top of the page to see our full carrier list, find your company and follow their payment link. Payments are made directly to the carrier, so your account updates immediately.',
          expanded: false,
        },
        {
          question: 'How do I report a claim?',
          answer:
            'For anything urgent, call your carrier directly using the claim number on our Payments & Claims page — they are staffed around the clock. Then call our office so we know it happened and can help you follow it through. We can also report the claim for you during business hours.',
          expanded: false,
        },
        {
          question: 'Should I file a claim or pay out of pocket?',
          answer:
            'If the damage is close to your deductible, it is often better to pay it yourself, because claims history affects both your eligibility and your price for several years. Call us before you file and we will help you weigh it honestly.',
          expanded: false,
        },
        {
          question: 'Who do I talk to during a claim — you or the carrier?',
          answer:
            'The carrier assigns an adjuster who handles the investigation and the payment, but you are never on your own. We track the claim, chase down answers when things stall, and step in if you feel the outcome is not right.',
          expanded: false,
        },
      ],
    },
  ];

  ngOnInit(): void {
    const faqs = this.groups.flatMap((group) => group.faqs);
    this.seo.setJsonLd(
      FaqPageComponent.JSON_LD_ID,
      this.seo.buildFaqSchema(faqs)
    );
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd(FaqPageComponent.JSON_LD_ID);
  }

  toggle(faq: FAQ): void {
    faq.expanded = !faq.expanded;
  }
}
