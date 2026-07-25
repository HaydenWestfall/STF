import {
  afterNextRender,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { environment } from 'src/environments/environment.development';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hero-section',
    templateUrl: './hero-section.component.html',
    styleUrls: ['./hero-section.component.scss'],
    imports: [RouterLink],
})
export class HeroSectionComponent {
  env = environment;

  /** Drives the pre-animation hidden state; only true in a motion-capable browser. */
  animate = false;

  @ViewChild('hero') heroRef!: ElementRef<HTMLElement>;
  @ViewChild('media') mediaRef!: ElementRef<HTMLElement>;
  @ViewChild('statsRow') statsRef!: ElementRef<HTMLElement>;

  assurances = [
    'Free, no-obligation quotes',
    'One agent for home, auto, farm & business',
    'Local claims help when you need it most',
  ];

  stats = [
    { value: '60+', label: 'Years serving the Miami Valley' },
    { value: '3,000+', label: 'Families & businesses protected' },
    { value: '20+', label: 'Top-rated carriers compared' },
    { value: '3', label: 'Ohio offices near you' },
  ];

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    const reduced =
      isPlatformBrowser(platformId) &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Only opt into the animated (initially hidden) state where we can finish it.
    this.animate = isPlatformBrowser(platformId) && !reduced;

    afterNextRender(() => {
      if (!this.animate) return;
      try {
        this.playIntro();
        this.startSeal();
        this.startCountUp();
        this.enableParallax();
      } catch {
        // If anything in the animation path fails, never leave content hidden.
        this.animate = false;
      }
    });
  }

  /** Staggered entrance for the copy and a soft reveal for the media stack. */
  private playIntro(): void {
    const root = this.heroRef.nativeElement;
    const rise = gsap.utils.toArray<HTMLElement>('[data-hero="rise"]', root);
    const pop = gsap.utils.toArray<HTMLElement>('[data-hero="pop"]', root);
    const photo = root.querySelector('.hero__photo');
    const panel = root.querySelector('.hero__panel');
    const dots = root.querySelector('.hero__dots');

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.7 },
    });

    tl.from(rise, { y: 24, opacity: 0, stagger: 0.08 })
      .from(
        panel,
        { xPercent: -6, yPercent: 6, opacity: 0, duration: 0.9 },
        0.15
      )
      .from(dots, { scale: 0.85, opacity: 0, duration: 0.9 }, 0.2)
      .from(
        photo,
        {
          opacity: 0,
          scale: 1.06,
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 1,
          ease: 'power4.out',
        },
        0.25
      )
      .from(
        pop,
        { scale: 0.7, opacity: 0, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.12 },
        '-=0.35'
      );
  }

  /** Slow, continuous rotation on the outer ring of the corner seal. */
  private startSeal(): void {
    const ring = this.heroRef.nativeElement.querySelector('.hero__seal-ring');
    if (ring) {
      gsap.to(ring, {
        rotation: 360,
        duration: 26,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      });
    }
  }

  /** Counts the stat numbers up from zero once the bar scrolls into view. */
  private startCountUp(): void {
    const bar = this.statsRef.nativeElement;
    const els = gsap.utils.toArray<HTMLElement>('[data-count]', bar);

    // Parse each target once, then reset the display to zero for the count-up.
    const items = els
      .map((el) => {
        const raw = el.textContent ?? '';
        const target = Number(raw.replace(/[^0-9.]/g, ''));
        const suffix = raw.replace(/[0-9.,]/g, '');
        return { el, target, suffix };
      })
      .filter((item) => isFinite(item.target) && item.target > 0);

    items.forEach((item) => (item.el.textContent = '0' + item.suffix));

    const start = () => {
      items.forEach((item) => {
        const counter = { v: 0 };
        gsap.to(counter, {
          v: item.target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            item.el.textContent =
              Math.round(counter.v).toLocaleString('en-US') + item.suffix;
          },
          onComplete: () => {
            item.el.textContent =
              item.target.toLocaleString('en-US') + item.suffix;
          },
        });
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      start();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(bar);
  }

  /** Subtle pointer-driven parallax on the layered media (pointer devices only). */
  private enableParallax(): void {
    const media = this.mediaRef?.nativeElement;
    if (!media || !window.matchMedia('(pointer: fine)').matches) return;

    const layers = gsap.utils.toArray<HTMLElement>('[data-depth]', media);
    const setters = layers.map((layer) => ({
      x: gsap.quickTo(layer, 'x', { duration: 0.6, ease: 'power3' }),
      y: gsap.quickTo(layer, 'y', { duration: 0.6, ease: 'power3' }),
      depth: Number(layer.getAttribute('data-depth')) || 0,
    }));

    const onMove = (e: PointerEvent) => {
      const rect = media.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setters.forEach((s) => {
        s.x(px * s.depth);
        s.y(py * s.depth);
      });
    };
    const onLeave = () => setters.forEach((s) => (s.x(0), s.y(0)));

    media.addEventListener('pointermove', onMove);
    media.addEventListener('pointerleave', onLeave);
  }
}
