import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { CarriersPageComponent } from './components/carriers-page/carriers-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { CoveragePageComponent } from './components/coverage-page/coverage-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';
import { TeamPageComponent } from './components/team-page/team-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent, data: { animation: 'fadeRoute' } },
  { path: 'about', component: AboutPageComponent, data: { animation: 'fadeRoute' } },
  { path: 'team', component: TeamPageComponent, data: { animation: 'fadeRoute' } },
  { path: 'locations', component: LocationsPageComponent, data: { animation: 'fadeRoute' } },
  { path: 'coverages/:coverageType', component: CoveragePageComponent, data: { animation: 'fadeRoute' } },
  { path: 'carriers', component: CarriersPageComponent, data: { animation: 'fadeRoute' } },
  { path: 'contact', component: ContactPageComponent, data: { animation: 'fadeRoute' } },
  { path: 'faq', component: FaqPageComponent, data: { animation: 'fadeRoute' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
