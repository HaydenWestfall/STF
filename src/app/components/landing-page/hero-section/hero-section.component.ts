import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  SvgIcon = SvgIcon;

  test = ['The Easiest Way To', 'Buy Low Cost', 'Insurance'];

  constructor(public cd: ChangeDetectorRef) {}

  ngOnInit() {
    let path = document.getElementById('text-accent') as any;
    let pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    setTimeout(() => {
      path.classList.add('anim');
      let pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = 0;
    }, 2000);
  }

  getQuote() {
    console.log('get ');
    
  }
}
