import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarriersPageComponent } from './components/carriers-page/carriers-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { CoveragePageComponent } from './components/coverage-page/coverage-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'locations', component: LocationsPageComponent },
  { path: 'coverages/:coverageType', component: CoveragePageComponent },
  { path: 'carriers', component: CarriersPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'faq', component: FaqPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
