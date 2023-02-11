import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-coverages-section',
  templateUrl: './coverages-section.component.html',
  styleUrls: ['./coverages-section.component.scss']
})
export class CoveragesSectionComponent {
  SvgIcon = SvgIcon;

  coverages: any[] = [
    {icon: this.SvgIcon.HEALTH_INSURANCE, iconSize: 3, title: 'Health Insurance', description: 'Term Life, Universal life, whole life, and more'},
    {icon: this.SvgIcon.LIFE_INSURANCE, iconSize: 3.4, title: 'Life Insurance', description: 'Term Life, Universal life, whole life, and more'},
    {icon: this.SvgIcon.AUTO_INSURANCE, iconSize: 4, title: 'Auto Insurance', description: 'Term Life, Universal life, whole life, and more'},
    {icon: this.SvgIcon.FARM_INSURANCE, iconSize: 3.5, title: 'Farm Insurance', description: 'Term Life, Universal life, whole life, and more'},
    {icon: this.SvgIcon.COMMERCIAL_INSURANCE, iconSize: 4.25, title: 'Commercial Ins', description: 'Term Life, Universal life, whole life, and more'},
    {icon: this.SvgIcon.HOME_INSURANCE, iconSize: 3.6, title: 'Home Insurance', description: 'Term Life, Universal life, whole life, and more'},
  ];
}
