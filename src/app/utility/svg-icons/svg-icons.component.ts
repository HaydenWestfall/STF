import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export enum SvgIcon {
  ANGLE,
  ARROW,
  AUTO_INSURANCE,
  COMMERCIAL_INSURANCE,
  CONTACT,
  COPYRIGHT,
  FACEBOOK,
  FAQ,
  FARM_INSURANCE,
  HAMBURGER,
  HAMBURGER_NEW,
  HEALTH_INSURANCE,
  HERO_CIRCLE,
  HOME_INSURANCE,
  INSTAGRAM,
  LIFE_INSURANCE,
  LINKEDIN,
  LOCATION,
  LOGO,
  LOGO_WATERMARK,
  PLUS,
  QUOTE_CLOSE,
  QUOTE_OPEN,
  RECREATIONAL_INSRUANCE,
  SEARCH,
  SHIELD,
  STRENGTH,
  TEAM,
  TIMES,
  TWITTER,
  UNDEFINED,
  YOUTUBE
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
