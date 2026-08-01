import { Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { CarriersPageComponent } from './components/carriers-page/carriers-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { CoveragePageComponent } from './components/coverage-page/coverage-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';
import { QuoteRedirectComponent } from './utility/quote-redirect/quote-redirect.component';
import { TeamsPageComponent } from './components/teams-page/teams-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title:
          'STF Insurance Group | Independent Insurance Agency in Arcanum, Ohio',
        description:
          'STF Insurance Group is an independent Ohio agency comparing 20+ top-rated carriers for auto, home, farm, commercial, recreational, life & health insurance. Get a free quote today.',
      },
    },
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'About STF Insurance Group | Our Story & Independent Difference',
        description:
          'For more than 60 years STF Insurance Group has protected Ohio families and businesses as an independent agency. Learn our story and what working with us is like.',
      },
    },
  },
  {
    path: 'team',
    component: TeamsPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'Meet Our Team of Expert Agents | STF Insurance Group',
        description:
          'Meet the STF Insurance Group team — experienced local agents dedicated to finding the right coverage and standing with you at renewal and claim time.',
      },
    },
  },
  {
    path: 'locations',
    component: LocationsPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title:
          'Our Offices in Arcanum, Vandalia & Middletown | STF Insurance Group',
        description:
          'Find an STF Insurance Group office near you in Arcanum, Vandalia or Middletown, Ohio. Get addresses, phone numbers and hours for expert insurance help.',
      },
    },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'Contact STF Insurance Group | Talk to a Local Agent',
        description:
          'Contact STF Insurance Group for expert advice and personalized coverage. Our experienced Ohio agents are here to help protect what matters most. Get in touch today.',
      },
    },
  },
  {
    path: 'faq',
    component: FaqPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'Insurance FAQ | Your Questions Answered | STF Insurance Group',
        description:
          'Answers to the insurance questions we hear every week — quotes and pricing, coverage, deductibles, payments and claims — from the STF Insurance Group team.',
      },
    },
  },
  {
    path: 'carriers',
    component: CarriersPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'Payments & Claims | STF Insurance Carriers',
        description:
          'Make a payment or report a claim through the insurance carriers STF Insurance Group works with. Find your company and its direct payment and claims links.',
      },
    },
  },
  {
    path: 'coverages/:coverageType',
    component: CoveragePageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        auto: {
          title:
            "Auto Insurance in Ohio | STF Insurance Group",
          description:
            "Protect your car and your family with auto insurance from STF Insurance Group. Comprehensive Ohio coverage that fits your needs and budget. Request a free quote today.",
        },
        home: {
          title: 'Home Insurance in Ohio | STF Insurance Group',
          description:
            "Your home is one of your biggest investments. Protect it with customized homeowners insurance from STF Insurance Group's expert Ohio agents. Get a free quote.",
        },
        farm: {
          title: 'Farm & Agribusiness Insurance in Ohio | STF Insurance Group',
          description:
            "Protect your farm and everything you've built with specialized farm insurance from STF Insurance Group, designed for Ohio farmers and ranchers. Request a quote.",
        },
        commercial: {
          title: 'Commercial Business Insurance in Ohio | STF Insurance Group',
          description:
            "Keep your business secure with commercial insurance from STF Insurance Group — from liability to business interruption coverage. Protect your investment today.",
        },
        recreational: {
          title: 'Recreational Vehicle Insurance in Ohio | STF Insurance Group',
          description:
            'From boats to ATVs, STF Insurance Group offers recreational insurance to keep you and your equipment protected. Enjoy your favorite hobbies worry-free.',
        },
        life: {
          title: 'Life Insurance in Ohio | STF Insurance Group',
          description:
            'Protect your loved ones with term or whole life insurance from STF Insurance Group. Our expert agents find coverage that fits your needs and budget.',
        },
      },
    },
  },
  { path: 'quoteRedirect', component: QuoteRedirectComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
