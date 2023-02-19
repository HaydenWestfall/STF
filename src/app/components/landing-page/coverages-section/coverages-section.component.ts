import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-coverages-section',
  templateUrl: './coverages-section.component.html',
  styleUrls: ['./coverages-section.component.scss']
})
export class CoveragesSectionComponent {
  SvgIcon = SvgIcon;
  healthInsuranceLink: string = 'https://www.google.com';

  coverages: any[] = [
    {icon: this.SvgIcon.AUTO_INSURANCE, iconSize: 4, title: 'Auto Insurance', description: 'Collision, Liability, Roadside, and more', link: '/coverages/auto'},
    {icon: this.SvgIcon.HOME_INSURANCE, iconSize: 3.6, title: 'Home Insurance', description: 'Home, Other structures, Property, and more', link: '/coverages/home'},
    {icon: this.SvgIcon.FARM_INSURANCE, iconSize: 3.5, title: 'Farm Insurance', description: 'Crops, Farmhouse, Equipment, and more', link: '/coverages/farm'},
    {icon: this.SvgIcon.COMMERCIAL_INSURANCE, iconSize: 3, title: 'Commercial Ins', description: 'Bonds, Liabilty, Property Insurance, and more', link: '/coverages/commercial'},
    {icon: this.SvgIcon.RECREATIONAL_INSRUANCE, iconSize: 3, title: 'Recreational Ins', description: 'Boats, ATVs, Golf carts, and more', link: '/coverages/recreational'},
    {icon: this.SvgIcon.LIFE_INSURANCE, iconSize: 3.4, title: 'Life Insurance', description: 'Term Life, Universal life, whole life, and more', link: '/coverages/life'},
    {icon: this.SvgIcon.HEALTH_INSURANCE, iconSize: 3, title: 'Health Insurance', description: 'Term Life, Universal life, whole life, and more', externalLink: this.healthInsuranceLink},
  ];
}
