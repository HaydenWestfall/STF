import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: false,
})
export class LandingPageComponent implements OnDestroy {
  clearAnimations() {
    // ScrollTrigger.getAll().forEach((trigger) => {
    //   const element = trigger.vars.trigger; // Get the trigger element
    //   if (
    //     element instanceof HTMLElement &&
    //     element.id == 'contact-btn-footer'
    //   ) {
    //     return;
    //   }
    //   trigger.vars;
    //   trigger.kill();
    // });
  }

  ngOnDestroy(): void {
    this.clearAnimations();
  }
}
