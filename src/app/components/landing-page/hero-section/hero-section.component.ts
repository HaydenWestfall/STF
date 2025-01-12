import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { environment } from 'src/environments/environment.development';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: false,
})
export class HeroSectionComponent implements OnInit, AfterViewInit {
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
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const duration = 1.25;
      const delayOffset = 0.75;
      const timeline = gsap.timeline({ delay: 0.5 });
      timeline.from('#meet-stf', {
        opacity: 0,
        y: 75,
        duration: duration,
        ease: 'power3.out',
      });
      timeline.from(
        '#hero-1',
        { opacity: 0, y: 75, duration: duration, ease: 'power3.out' },
        `-=${duration}`
      );
      // timeline.from(
      //   '#hero-2',
      //   { opacity: 0, y: 30, duration: duration, ease: 'circ.out' },
      //   `-=${delayOffset}`
      // );
      timeline.from(
        '#contact-agencies',
        { opacity: 0, y: 25, duration: duration, ease: 'power3.out' },
        `-=${delayOffset}`
      );
      timeline.from(
        '#actions',
        { opacity: 0, y: 10, duration: duration, ease: 'power3.out' },
        `-=${duration - 0.5}`
      );
    });
  }
}
