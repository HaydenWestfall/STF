import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';

/**
 * Fades/slides an element into view the first time it enters the viewport.
 * Usage: <div stfReveal></div>  or  <div [stfReveal]="index"></div> to stagger.
 */
@Directive({ selector: '[stfReveal]', })
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input('stfReveal') order: number | string = 0;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');

    const order = Number(this.order) || 0;
    if (order > 0) {
      node.style.transitionDelay = `${Math.min(order, 8) * 70}ms`;
    }

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            this.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.disconnect();
  }

  private disconnect(): void {
    this.observer?.disconnect();
    this.observer = null;
  }
}
