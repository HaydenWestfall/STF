import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fade } from 'src/animations';
import { Coverage } from 'src/app/models/Coverage';
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
  coverageType: Coverage;
  coverageTypes: Coverage[] = [
    {
      id: 'auto',
      coverageTitle: 'Auto Insurance',
      coverageImage: this.coveragesPath + 'auto/auto.png',
      description: 'Your vehicle is a central part of your lifestyle. It is your connection between all of the important places you go every day. We will create the perfect insurance plan for you that is tailored to the coverage you need. A few coverage options include: collision and comprehensive coverage, liability coverage, road trouble service, additional expense coverage, and lease/load gap coverage.',
      informationCards: [
        {image: this.coveragesPath + 'auto/card1.png', description: 'Uninsured and Underinsured Property Damage to protect yourself'},
        {image: this.coveragesPath + 'auto/card2.png', description: 'Rental car reimbursement coverage'},
        {image: this.coveragesPath + 'auto/card3.png', description: 'GAP coverage through personal insurance '}
      ]
    },
    {
      id: 'home',
      coverageTitle: 'Home Insurance',
      coverageImage: this.coveragesPath + 'home/home.png',
      description: 'The urge to protect our homes, the place where we lay our heads and raise our children, is universal. We help keep the castle safe and sound with comprehensive coverage that guards against theft, fire, and storm damage. We also insure other properties, including apartments, condos, mobile homes and property owned by your business.',
      informationCards: [
        {image: this.coveragesPath + 'home/card1.png', description: 'Scheduling jewelry, guns, hearing aids, motorized scooters, etc. to make sure you get full replacement on valued items.'},
        {image: this.coveragesPath + 'home/card2.png', description: 'Sufficient replacement cost and proper home coverage.'},
        {image: this.coveragesPath + 'home/card3.png', description: 'Insuring outbuilding and detached structures properly'}
      ]
    },
    {
      id: 'farm',
      coverageTitle: 'Farm Insurance',
      coverageImage: this.coveragesPath + 'farm/farm.png',
      description: 'From hobby farms to commercial agriculture exposures such as feed and seed dealers, it is important to identify risks associated with whatever it is you produce. We know farming and commercial farm exposures is unique to the state of Ohio. We proudly represent top-rated insurance carriers that are specific to agribusiness to ensure you get the coverage you need at a price you can afford.',
      informationCards: [
        {image: this.coveragesPath + 'farm/card1.png', description: 'Peak season and crop storage coverage'},
        {image: this.coveragesPath + 'farm/card2.png', description: 'Scheduling all farm equipment'},
        {image: this.coveragesPath + 'farm/card3.png', description: 'Cover all ATVs and Rangers on farm policies'}
      ]
    },
    {
      id: 'commercial',
      coverageTitle: 'Commercial Insurance',
      coverageImage: this.coveragesPath + 'commercial/commercial.png',
      description: 'We understand how much time, money, and effort it takes to build & maintain a successful business. Protecting your investment from losses beyond your control is a responsibility we take very seriously. We can offer coverage in many areas for your business.',
      informationCards: [
        {image: this.coveragesPath + 'commercial/card1.png', description: 'We can also help you with flood insurance and personal legal liability coverage, which covers your legal responsibility for property damage or injuries for which you or your family may be responsible. Give us a call today, we will create a home insurance plan that works best for your specific needs.'},
        {image: this.coveragesPath + 'commercial/card2.png', description: 'We can also help you with flood insurance and personal legal liability coverage, which covers your legal responsibility for property damage or injuries for which you or your family may be responsible. Give us a call today, we will create a home insurance plan that works best for your specific needs.'},
        {image: this.coveragesPath + 'commercial/card3.png', description: 'We can also help you with flood insurance and personal legal liability coverage, which covers your legal responsibility for property damage or injuries for which you or your family may be responsible. Give us a call today, we will create a home insurance plan that works best for your specific needs.'}
      ]
    },
    {
      id: 'life',
      coverageTitle: 'Life Insurance',
      coverageImage: this.coveragesPath + 'life/life.png',
      description: 'Life and Health insurance have many variables and decisions; such as, how much is enough and what type of policy best fits your need and your family\'s. Needs vary for Life insurance and each type of policy has its advantages. Depending on your life or health insurance needs, we will provide you with the most comprehensive plan based on your individual or group\'s current or future financial needs.',
      informationCards: [
        {image: this.coveragesPath + 'life/card1.png', description: 'Whole Life'},
        {image: this.coveragesPath + 'life/card2.png', description: 'Term Life'},
      ]
    },
    {
      id: 'recreational',
      coverageTitle: 'Recreational Insurance',
      coverageImage: this.coveragesPath + 'recreational/recreational2.png',
      description: 'Needs filled in.',
      informationCards: [
        {image: this.coveragesPath + 'recreational/card1.png', description: 'Protect fun things like motorcycles'},
        {image: this.coveragesPath + 'recreational/card2.png', description: 'or your boats'},
        {image: this.coveragesPath + 'recreational/card3.png', description: 'or even your golf cart'}
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
