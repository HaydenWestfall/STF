import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { CarriersPageComponent } from './components/carriers-page/carriers-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { CoveragePageComponent } from './components/coverage-page/coverage-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';
import { QuoteRedirectComponent } from './utility/quote-redirect/quote-redirect.component';
import { TeamsPageComponent } from './components/teams-page/teams-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'STF Insurance Group | Protecting you with Reliable Coverage',
        metaTags: [
          { name: 'title', content: 'Meet the STF Insurance Group' },
          {
            name: 'description',
            content:
              'Protect your family and assets with comprehensive insurance coverage from STF Insurance Group. Our expert agents offer a wide range of policies, including auto, home, farm, health, commercial, recreational, and life insurance, tailored to your unique needs. Contact us today to learn more and get a free quote.',
          },
          { name: 'url', content: environment.appUrl + '/' },
        ],
      },
    },
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'About STF | Our Story',
        metaTags: [
          { name: 'title', content: 'Meet STF, The Insurance Group for you.' },
          {
            name: 'description',
            content: 'Get to know STF, our insurance coverages, and our story.',
          },
          { name: 'url', content: environment.appUrl + '/about' },
        ],
      },
    },
  },
  {
    path: 'team',
    component: TeamsPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'Meet STFs Team of Expert Agents | STF Insurance Group',
        metaTags: [
          { name: 'title', content: 'Get to know the STF team.' },
          {
            name: 'description',
            content:
              '"Meet the STF Insurance team - a group of experienced professionals dedicated to providing the highest level of service to our customers. Learn more about our agents and their expertise in a range of insurance specialties.',
          },
          { name: 'url', content: environment.appUrl + '/team' },
        ],
      },
    },
  },
  {
    path: 'locations',
    component: LocationsPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'Our Locations | STF',
        metaTags: [
          { name: 'title', content: 'Where you can find us | STF Locations' },
          {
            name: 'description',
            content:
              'Find an STF Insurance location near you. Our trusted agents are available to provide expert insurance advice and personalized coverage solutions. Visit our locations page to find an office in your area.',
          },
          { name: 'url', content: environment.appUrl + '/locations' },
        ],
      },
    },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'Contact Us | STF',
        metaTags: [
          { name: 'title', content: 'Concat us, get in touch | STF' },
          {
            name: 'description',
            content:
              'Contact STF Insurance today for expert insurance advice and personalized coverage solutions. Our experienced agents are here to help you protect what matters most. Get in touch now.',
          },
          { name: 'url', content: environment.appUrl + '/contact' },
        ],
      },
    },
  },
  {
    path: 'faq',
    component: FaqPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'Frequently Asked Questions | STF',
        metaTags: [
          {
            name: 'title',
            content: 'STF Insurance FAQ - Answers to Your Insurance Questions',
          },
          {
            name: 'description',
            content:
              'Get answers to your insurance questions on our STF Insurance FAQ page. Our experts have compiled a list of frequently asked questions to help you better understand your coverage options. Explore our page now.',
          },
          { name: 'url', content: environment.appUrl + '/faq' },
        ],
      },
    },
  },
  {
    path: 'carriers',
    component: CarriersPageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        title: 'Carrriers, Claims, and Payments | STF',
        metaTags: [
          {
            name: 'title',
            content:
              'STF Insurance Carriers - Explore Our Range of Insurance Providers',
          },
          {
            name: 'description',
            content:
              'At STF Insurance, we work with a range of top insurance carriers to provide our customers with comprehensive coverage options. Our carriers page includes links to their websites for easy access to reporting a claim or contacting them directly. Explore our carrier options today.',
          },
          { name: 'url', content: environment.appUrl + '/carriers' },
        ],
      },
    },
  },
  {
    path: 'coverages/:coverageType',
    component: CoveragePageComponent,
    data: {
      animation: 'fadeRoute',
      seo: {
        autoTitle:
          "Protect Your Vehicle with STF Insurance Group's Auto Insrance | STF Insurance Group",
        autoMetaTags: [
          {
            name: 'title',
            content:
              "Protect Your Vehicles with STF Insurance Group's Auto Insurance",
          },
          {
            name: 'description',
            content:
              "Protect your car and your family with STF Insurance Group's auto insurance. Get comprehensive coverage that fits your needs and budget. Request a quote today!",
          },
          { name: 'url', content: environment.appUrl + '/coverages/auto' },
        ],
        homeTitle:
          "Protect Your Home with STF Insurance Group's Home Insurance",
        homeMetaTags: [
          {
            name: 'title',
            content:
              "Protect Your Home with STF Insurance Group's Home Insurance | STF Insurance Group",
          },
          {
            name: 'description',
            content:
              "Your home is one of your most important investments. Protect it with STF Insurance Group's comprehensive home insurance policies. Our expert agents will work with you to customize coverage that fits your specific needs.",
          },
          { name: 'url', content: environment.appUrl + '/coverages/home' },
        ],
        farmTitle:
          "Keep Your Farm Safe with STF Insurance Group's Farm Insurance",
        farmMetaTags: [
          {
            name: 'title',
            content:
              "Keep Your Farm Safe with STF Insurance Group's Farm Insurance",
          },
          {
            name: 'description',
            content:
              "Protect your farm and all that you've built with STF Insurance Group's farm insurance. Our specialized policies are designed to meet the unique needs of farmers and ranchers. Request a quote today!",
          },
          { name: 'url', content: environment.appUrl + '/coverages/farm' },
        ],
        commericalTitle:
          "Protect Your Business with STF Insurance Group's Commercial Insurance",
        commercialMetaTags: [
          {
            name: 'title',
            content:
              "Protect Your Business with STF Insurance Group's Commercial Insurance",
          },
          {
            name: 'description',
            content:
              "Keep your business safe and secure with STF Insurance Group's commercial insurance policies. From liability coverage to business interruption insurance, we have everything you need to protect your investment.",
          },
          {
            name: 'url',
            content: environment.appUrl + '/coverages/commercial',
          },
        ],
        recreationalTitle:
          "Enjoy Your Recreation with STF Insurance Group's Recreational Insurance",
        recreationalMetaTags: [
          {
            name: 'title',
            content:
              "Enjoy Your Recreation with STF Insurance Group's Recreational Insurance",
          },
          {
            name: 'description',
            content:
              'From boats to ATVs, STF Insurance Group offers comprehensive recreational insurance coverage to keep you and your equipment protected. Get the coverage you need to enjoy your favorite hobbies worry-free.',
          },
          {
            name: 'url',
            content: environment.appUrl + '/coverages/recreational',
          },
        ],
        lifeTitle:
          "Secure Your Family's Future with STF Insurance Group's Life Insurance",
        lifeMetaTags: [
          {
            name: 'title',
            content:
              "Secure Your Family's Future with STF Insurance Group's Life Insurance",
          },
          {
            name: 'description',
            content:
              'Protect your loved ones with STF Insurance Group’s life insurance policies. Whether you need term life insurance or whole life insurance, our expert agents will work with you to find the coverage that fits your needs and budget.',
          },
          { name: 'url', content: environment.appUrl + '/coverages/life' },
        ],
      },
    },
  },
  { path: 'quoteRedirect', component: QuoteRedirectComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
