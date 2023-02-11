import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export enum SvgIcon {
  ANGLE,
  AUTO_INSURANCE,
  COMMERCIAL_INSURANCE,
  COPYRIGHT,
  FACEBOOK,
  FARM_INSURANCE,
  HAMBURGER,
  HAMBURGER_NEW,
  HEALTH_INSURANCE,
  HOME_INSURANCE,
  INSTAGRAM,
  LIFE_INSURANCE,
  LOGO,
  LOGO_WATERMARK,
  QUOTE_CLOSE,
  QUOTE_OPEN,
  TIMES,
  TWITTER,
  UNDEFINED
}

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icons.component.html',
  styles: ['svg { width: 100%; height: 100% }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconsComponent {
  SvgIcon = SvgIcon;

  @Input() name: SvgIcon = SvgIcon.UNDEFINED;
  @Input() width: number = 0;
  @Input() height: number = 0;
}
