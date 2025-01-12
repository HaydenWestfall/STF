import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class StfService {
  navIsShowing = true;
  history: string[] = [];

  constructor(private title: Title, private metaTags: Meta) {}

  addTitle(title: string) {
    this.title.setTitle(title);
  }

  addMetaTags(metaTags: MetaDefinition[]) {
    metaTags.forEach((tag) => this.metaTags.updateTag(tag));
  }

  pushRouteHistory(routeUrl: string): void {
    this.history.unshift(routeUrl.substring(1, routeUrl.length));
    if (this.history.length > 3) {
      this.history.pop();
    }
  }

  animateText(id: string, delay?: number, disableScrollTrigger?: boolean) {
    const scrollTrigger = {
      trigger: id,
      start: 'top 80%',
      scrub: false,
    };
    gsap.fromTo(
      id,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay != undefined ? delay : 0,
        ease: 'power2.out',
        scrollTrigger: disableScrollTrigger ? null : scrollTrigger,
      }
    );
  }

  animateBackground(id: string, delay?: number) {
    gsap.fromTo(
      id,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: delay != undefined ? delay : 0.9,
        ease: 'power2.out',
      }
    );
  }
}
