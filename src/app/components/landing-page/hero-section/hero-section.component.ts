import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  SvgIcon = SvgIcon;
  env = environment;
  mediaQuery: MediaQueryList;

  contactInfo = [
    {label: 'Arcanum', type: 'tel', value: this.env.arcanumPhoneNumber},
    {label: 'Vandalia', type: 'tel', value: this.env.vandaliaPhoneNumber},
    {label: 'Email', type: 'mailto', value: this.env.contactEmail},
  ]

  test = ['The Easiest Way To', 'Buy Low Cost', 'Insurance'];

  constructor(public cd: ChangeDetectorRef) {
    this.mediaQuery = window.matchMedia('(max-width: 768px)');
  }

  ngOnInit() {
    if (typeof document !== 'undefined') {
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
  }
}
