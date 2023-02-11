import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { delay } from 'rxjs';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {

  words = "This is Text I want to animate";

  test = false;
  test1 = false;
  test2 = false;

  ngOnInit(): void {

  }

  addAnimation(): void {
    if (!this.test) {
      this.test = true;
    } else if (!this.test1) {
      this.test1 = true;
    } else {
      this.test2 = true;
    }
  }
}
