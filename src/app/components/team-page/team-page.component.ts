import { Component } from '@angular/core';
import { fade } from 'src/animations';
import { Employee } from 'src/app/models/Employee';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss'],
  animations: [fade]
})
export class TeamPageComponent {
  SvgIcon = SvgIcon
  basePath = '../../../assets/img/meetTheTeam';
  mediaQuery: MediaQueryList;
  team: Employee[] = [
    {
      id: 'tracy',
      name: 'Tracy Fout',
      position: 'OWNER',
      img: '/tracy.webp',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'victoria',
      name: 'Victoria Bowman',
      position: 'AGENT',
      img: '/victoria.webp',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'lane',
      name: 'Lane Byrne',
      position: 'AGENT',
      img: '/lane.webp',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'emily',
      name: 'Emily Wagner',
      position: 'AGENT',
      img: '/emily.webp',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'cole',
      name: 'Cole Burrell',
      position: 'AGENT',
      img: '/cole.webp',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'trevor',
      name: 'Trevor Fry',
      position: 'AGENT',
      img: '/trevor.webp',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'karen',
      name: 'Karen Bratton',
      position: 'AGENT',
      img: '/karen.webp',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'jessy',
      name: 'Jessy Short',
      position: 'AGENT',
      img: '/jessy.webp',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    }
  ];

  constructor() {
    this.mediaQuery = window.matchMedia('(max-width: 768px)');
  }

  scrollEmployeeIntoView(element: string): void {
    document.getElementById(element).scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
  }
}
