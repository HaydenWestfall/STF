import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SvgIconsComponent } from './utility/svg-icons/svg-icons.component';
import { HeroSectionComponent } from './components/landing-page/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/landing-page/about-section/about-section.component';
import { NetworkSectionComponent } from './components/landing-page/network-section/network-section.component';
import { CarriersSectionComponent } from './components/landing-page/carriers-section/carriers-section.component';
import { ReviewsSectionComponent } from './components/landing-page/reviews-section/reviews-section.component';
import { ContactSectionComponent } from './components/landing-page/contact-section/contact-section.component';
import { SplitPipe } from './pipes/split.pipe';
import { HeaderComponent } from './components/header/header.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CoveragesSectionComponent } from './components/landing-page/coverages-section/coverages-section.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { CoveragePageComponent } from './components/coverage-page/coverage-page.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { CarriersPageComponent } from './components/carriers-page/carriers-page.component';
import { FormsModule } from '@angular/forms';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { GetQuoteComponent } from './components/get-quote/get-quote.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SvgIconsComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    NetworkSectionComponent,
    CarriersSectionComponent,
    ReviewsSectionComponent,
    ContactSectionComponent,
    CoveragesSectionComponent,
    SplitPipe,
    HeaderComponent,
    ContactPageComponent,
    LandingPageComponent,
    FaqPageComponent,
    CoveragePageComponent,
    CarriersPageComponent,
    LocationsPageComponent,
    AboutPageComponent,
    TeamPageComponent,
    GetQuoteComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxHideOnScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
