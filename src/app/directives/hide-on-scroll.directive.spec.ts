import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HideOnScrollDirective } from './hide-on-scroll.directive';

describe('HideOnScrollDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      providers: [
        HideOnScrollDirective,
        {
          provide: ElementRef,
          useValue: new ElementRef(document.createElement('div')),
        },
        {
          provide: Renderer2,
          useValue: jasmine.createSpyObj<Renderer2>('Renderer2', [
            'addClass',
            'removeClass',
            'setStyle',
          ]),
        },
      ],
    });

    expect(TestBed.inject(HideOnScrollDirective)).toBeTruthy();
  });
});
