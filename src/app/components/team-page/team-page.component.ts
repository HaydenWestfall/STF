import { Component } from '@angular/core';
import { fade } from 'src/animations';
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
  team: any[] = [
    {
      id: 'tracy',
      name: 'Tracy Fout',
      postiion: 'OWNER',
      img: '/tracyFout.png',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'victoria',
      name: 'Victoria Bowman',
      postiion: 'AGENT',
      img: '/victoriaBowman.png',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'lane',
      name: 'Lane Byrne',
      postiion: 'AGENT',
      img: '/laneByrne.png',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'emily',
      name: 'Emily Wagner',
      postiion: 'AGENT',
      img: '/emilyWagner.png',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'cole',
      name: 'Cole Burrell',
      postiion: 'AGENT',
      img: '/coleBurrell.png',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'trevor',
      name: 'Trevor Fry',
      postiion: 'AGENT',
      img: '/trevorFry.png',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    },
    {
      id: 'karen',
      name: 'Karen Bratton',
      postiion: 'AGENT',
      img: '/karenBratton.png',
      description: `Tracy is the other half of the co-owning duo here at SRL. Tracy’s outgoing
      and ambitious personality has been his motivation to pursue sales and marketing for the
      last 18 years. In 2018, He and James chose to take on the new adventure of SRL-Troutwine
      by combining Shockey, Ryan, Long Insurance with Keith Troutwine Insurance.`
    }
  ];

  scrollEmployeeIntoView(element: string): void {
    document.getElementById(element).scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
  }
}
