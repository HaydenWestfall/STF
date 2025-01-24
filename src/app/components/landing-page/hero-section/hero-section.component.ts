import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { environment } from 'src/environments/environment.development';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { StfService } from 'src/app/services/stf.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: false,
})
export class HeroSectionComponent implements OnInit {
  stfService = inject(StfService);
  SvgIcon = SvgIcon;
  env = environment;
  mediaQuery: MediaQueryList;

  contactInfo = [
    { label: 'Arcanum', type: 'tel', value: this.env.arcanumPhoneNumber },
    { label: 'Vandalia', type: 'tel', value: this.env.vandaliaPhoneNumber },
    { label: 'Debrozi', type: 'tel', value: this.env.vandaliaPhoneNumber },
  ];

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
      }, 2500);
    }
    const timeline = gsap.timeline({ delay: 0.5 });
    const duration = 1.25;
    const delayOffset = 0.75;

    this.stfService.setLoadState('#meet-stf', 75);
    this.stfService.setLoadState('#hero-1', 75);
    this.stfService.setLoadState('#contact-agencies', 25);
    this.stfService.setLoadState('#actions', 10);
    timeline.to('#meet-stf', {
      opacity: 1,
      y: 0,
      duration: duration,
      ease: 'power3.out',
    });
    timeline.to(
      '#hero-1',
      { opacity: 1, y: 0, duration: duration, ease: 'power3.out' },
      `-=${duration}`
    );
    timeline.to(
      '#contact-agencies',
      { opacity: 1, y: 0, duration: duration, ease: 'power3.out' },
      `-=${delayOffset}`
    );
    timeline.to(
      '#actions',
      { opacity: 1, y: 0, duration: duration, ease: 'power3.out' },
      `-=${duration - 0.5}`
    );
  }
}
