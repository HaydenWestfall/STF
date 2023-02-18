import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fade } from 'src/animations';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-coverage-page',
  templateUrl: './coverage-page.component.html',
  styleUrls: ['./coverage-page.component.scss'],
  animations: [fade]
})
export class CoveragePageComponent {

  SvgIcon = SvgIcon;
  refreshing = false;
  coveragesPath = '../../../assets/img/coverages/';

  coverageType: any;
  coverageTypes: any[] = [
    {
      id: 'home',
      coverageTitle: 'Home Insurance',
      coverageImage: this.coveragesPath + 'home/home.png',
      description: 'The urge to protect our homes, the place where we lay our heads and raise our children, is universal. We help keep the castle safe and sound with comprehensive coverage that guards against theft, fire and storm damage. We also insure other properties, including apartments, condos, mobile homes and property owned by your business.',
      informationCards: [
        {image: this.coveragesPath + 'home/card1.png', description: 'Scheduling jewelry, guns, hearing aids, motorized scooters, etc. to make sure you get full replacement on valued items.'},
        {image: this.coveragesPath + 'home/card2.png', description: 'Sufficient replacement cost and proper home coverage.'},
        {image: this.coveragesPath + 'home/card3.png', description: 'Insuring outbuilding and detached structures properly'}
      ]
    },
    {
      id: 'auto',
      coverageTitle: 'Auto Insurance',
      coverageImage: this.coveragesPath + 'auto/auto.png',
      description: 'The urge to protect our homes, the place where we lay our heads and raise our children, is universal. We help keep the castle safe and sound with comprehensive coverage that guards against theft, fire and storm damage. We also insure other properties, including apartments, condos, mobile homes and property owned by your business.',
      informationCards: [
        {image: this.coveragesPath + 'auto/card1.png', description: 'Uninsured and Underinsured Property Damage to protect yourself'},
        {image: this.coveragesPath + 'auto/card2.png', description: 'Rental car reimbursement coverage'},
        {image: this.coveragesPath + 'auto/card3.png', description: 'GAP coverage through personal insurance '}
      ]
    },
    {
      id: 'life',
      coverageTitle: 'Life Insurance',
      coverageImage: this.coveragesPath + 'life/life.png',
      description: 'The urge to protect our homes, the place where we lay our heads and raise our children, is universal. We help keep the castle safe and sound with comprehensive coverage that guards against theft, fire and storm damage. We also insure other properties, including apartments, condos, mobile homes and property owned by your business.',
      informationCards: [
        {image: this.coveragesPath + 'life/card1.png', description: 'Whole Life'},
        {image: this.coveragesPath + 'life/card2.png', description: 'Term Life'},
      ]
    },
    {
      id: 'commercial',
      coverageTitle: 'Commercial Insurance',
      coverageImage: this.coveragesPath + 'commercial/commercial.png',
      description: 'The urge to protect our homes, the place where we lay our heads and raise our children, is universal. We help keep the castle safe and sound with comprehensive coverage that guards against theft, fire and storm damage. We also insure other properties, including apartments, condos, mobile homes and property owned by your business.',
      informationCards: [
        {image: this.coveragesPath + 'commercial/card1.png', description: 'We can also help you with flood insurance and personal legal liability coverage, which covers your legal responsibility for property damage or injuries for which you or your family may be responsible. Give us a call today, we will create a home insurance plan that works best for your specific needs.'},
        {image: this.coveragesPath + 'commercial/card2.png', description: 'We can also help you with flood insurance and personal legal liability coverage, which covers your legal responsibility for property damage or injuries for which you or your family may be responsible. Give us a call today, we will create a home insurance plan that works best for your specific needs.'},
        {image: this.coveragesPath + 'commercial/card3.png', description: 'We can also help you with flood insurance and personal legal liability coverage, which covers your legal responsibility for property damage or injuries for which you or your family may be responsible. Give us a call today, we will create a home insurance plan that works best for your specific needs.'}
      ]
    },
    {
      id: 'farm',
      coverageTitle: 'Farm Insurance',
      coverageImage: this.coveragesPath + 'farm/farm.png',
      description: 'The urge to protect our homes, the place where we lay our heads and raise our children, is universal. We help keep the castle safe and sound with comprehensive coverage that guards against theft, fire and storm damage. We also insure other properties, including apartments, condos, mobile homes and property owned by your business.',
      informationCards: [
        {image: this.coveragesPath + 'farm/card1.png', description: 'Peak season and crop storage coverage'},
        {image: this.coveragesPath + 'farm/card2.png', description: 'Scheduling all farm equipment'},
        {image: this.coveragesPath + 'farm/card3.png', description: 'Cover all ATVs and Rangers on farm policies'}
      ]
    },
    {
      id: 'recreational',
      coverageTitle: 'Recreational Insurance',
      coverageImage: this.coveragesPath + 'farm/farm.png',
      description: 'The urge to protect our homes, the place where we lay our heads and raise our children, is universal. We help keep the castle safe and sound with comprehensive coverage that guards against theft, fire and storm damage. We also insure other properties, including apartments, condos, mobile homes and property owned by your business.',
      informationCards: [
        {image: this.coveragesPath + 'farm/card1.png', description: 'Peak season and crop storage coverage'},
        {image: this.coveragesPath + 'farm/card2.png', description: 'Scheduling all farm equipment'},
        {image: this.coveragesPath + 'farm/card3.png', description: 'Cover all ATVs and Rangers on farm policies'}
      ]
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.refreshing = true;
      setTimeout(() => {
        let coverageTypeParam = params["coverageType"];
        this.coverageType = this.coverageTypes.find(x => x.id === coverageTypeParam);
        this.refreshing = false;
      }, 200);
    });
  }
}
