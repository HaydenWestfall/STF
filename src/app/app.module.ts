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
    FaqPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
