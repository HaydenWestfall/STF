import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class StfService {

  navIsShowing = true;

  constructor(private title: Title, private metaTags: Meta) { }

  addTitle(title: string) {
    this.title.setTitle(title);
  }

  addMetaTags(metaTags: MetaDefinition[]) {
    console.log(metaTags);
    metaTags.forEach(tag => this.metaTags.updateTag(tag));
  }
}
