import {
  afterNextRender,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { gsap } from 'gsap';
import { growHeight } from 'src/animations';
import { COVERAGES } from 'src/app/data/coverages';
import { Coverage } from 'src/app/models/Coverage';
import { SeoService } from 'src/app/services/seo.service';
import { environment } from 'src/environments/environment.development';
import { RevealDirective } from '../../directives/reveal.directive';
import { BannerComponent } from '../banner/banner.component';

@Component({
    selector: 'app-coverage-page',
    templateUrl: './coverage-page.component.html',
    styleUrls: ['./coverage-page.component.scss'],
    animations: [growHeight],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
    RouterLink,
    RevealDirective,
    BannerComponent
],
})
export class CoveragePageComponent implements OnInit, OnDestroy {
  env = environment;
  coverageTypes: Coverage[] = COVERAGES;
  coverage: Coverage | undefined;

  /** Drives the pre-animation hidden state; only true in a motion-capable browser. */
  animate = false;

  @ViewChild('hero') heroRef?: ElementRef<HTMLElement>;
  @ViewChild('media') mediaRef?: ElementRef<HTMLElement>;

  private static readonly JSON_LD_ID = 'coverage-faq-jsonld';

  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seo: SeoService,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    const reduced =
      isPlatformBrowser(platformId) &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.animate = isPlatformBrowser(platformId) && !reduced;

    afterNextRender(() => {
      if (!this.animate || !this.heroRef) return;
      try {
        this.playIntro();
        this.enableParallax();
      } catch {
        this.animate = false;
      }
    });
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.coverage = this.coverageTypes.find(
        (x) => x.id === params['coverageType']
      );

      if (!this.coverage) {
        this.router.navigate(['/']);
        return;
      }

      // Collapse any FAQ left open from the previous coverage.
      this.coverage.faqs.forEach((faq) => (faq.expanded = false));

      // Expose this coverage's FAQs as FAQPage structured data.
      this.seo.setJsonLd(
        CoveragePageComponent.JSON_LD_ID,
        this.seo.buildFaqSchema(this.coverage.faqs)
      );
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.seo.removeJsonLd(CoveragePageComponent.JSON_LD_ID);
  }

  get relatedCoverages(): Coverage[] {
    if (!this.coverage) return [];
    return this.coverage.related
      .map((id) => this.coverageTypes.find((x) => x.id === id))
      .filter((x): x is Coverage => !!x);
  }

  toggleFaq(index: number): void {
    const faq = this.coverage?.faqs[index];
    if (faq) faq.expanded = !faq.expanded;
  }

  /** Staggered entrance for the copy and a soft reveal for the layered media. */
  private playIntro(): void {
    const root = this.heroRef!.nativeElement;
    const rise = gsap.utils.toArray<HTMLElement>('[data-hero="rise"]', root);
    const pop = gsap.utils.toArray<HTMLElement>('[data-hero="pop"]', root);
    const frame = root.querySelector('.coverage-hero__frame');
    const panel = root.querySelector('.coverage-hero__panel');
    const dots = root.querySelector('.coverage-hero__dots');

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out', duration: 0.7 },
    });

    tl.from(rise, { y: 22, opacity: 0, stagger: 0.07 })
      .from(panel, { xPercent: -6, yPercent: 6, opacity: 0, duration: 0.9 }, 0.15)
      .from(dots, { scale: 0.85, opacity: 0, duration: 0.9 }, 0.2)
      .from(
        frame,
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
        { scale: 0.7, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.4'
      );
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

    media.addEventListener('pointermove', (e: PointerEvent) => {
      const rect = media.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setters.forEach((s) => {
        s.x(px * s.depth);
        s.y(py * s.depth);
      });
    });
    media.addEventListener('pointerleave', () =>
      setters.forEach((s) => (s.x(0), s.y(0)))
    );
  }
}
