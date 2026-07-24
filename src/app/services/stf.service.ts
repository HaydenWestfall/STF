import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class StfService {
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
}
