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
      description: `Hi, I'm Victoria Bowman and I'm proud to say that I've been a part of the STF Insurance team since 2019. As the office manager, I take pride in keeping things organized and running smoothly. In addition to my work at STF, I also serve as the event coordinator for our non-profit organization, Give Thanks Foundation. I was born and raised in Greenville, and still call Darke County home today. I have a deep connection to my community and strive to make a positive impact in any way I can. In my free time, I love spending time with my family and creating new memories with them. Being open-minded is a big part of who I am, and I'm always excited to try new things and learn from new experiences. I am fortunate to get to work with such a great team here at STF Insurance and strive to provide the best service possible to our clients.`
    },
    {
      id: 'lane',
      name: 'Lane Byrne',
      position: 'AGENT',
      img: '/lane.webp',
      description: `Hi there, I'm Lane Byrne and I'm proud to have been a part of this company since 2021. I was born and raised in Arcanum, my hometown, and I have a deep appreciation for the community and its people. In my free time, I enjoy watching my favorite sports teams, the Dayton Flyers and the Cincinnati Bengals. I also have a passion for coaching high school baseball for Arcanum, helping to develop young athletes and pass on my love for the game. When it's time to relax, I love to vacation in Florida, soaking up the sun and enjoying the beautiful scenery. I'm committed to working hard and contributing to the success of this company, and I'm grateful to be a part of such a great team.`
    },
    {
      id: 'emily',
      name: 'Emily Wagner',
      position: 'AGENT',
      img: '/emily.webp',
      description: `Hi, my name is Emily Wagner and I am proud to be a part of the STF team since the beginning of 2023. As a mother of five, I understand the value of hard work and dedication and bring those values to everything I do. Along with my work at STF, I am also heavily involved in the local community of Arcanum and the school. I love watching my kids' sports and activities and being a part of their growth and development. As the Youth Wrestling Director for Arcanum, I am committed to helping young athletes develop their skills and reach their full potential. I am also heavily involved in the junior high and high school programs, where I support the wrestlers and coaches in any way I can. Overall, I am passionate about being a positive force in the community and helping young people grow and thrive.`
    },
    {
      id: 'cole',
      name: 'Cole Burrell',
      position: 'AGENT',
      img: '/cole.webp',
      description: `Hi I'm Cole Burrell and I have been the group for almost 3 years now. I graduated from Earlham college with a degree in business. In my free time I enjoy spending time with my wife Cami and our dog. I look forward to helping you however possible.`
    },
    {
      id: 'trevor',
      name: 'Trevor Fry',
      position: 'AGENT',
      img: '/trevor.webp',
      description: `Hi I'm Trevor Fry. I am working to finish my business degree at IU East. I started with the Spieles Troutwine Fout Insurance Group in 2022. As I finish my schooling I look forward to serving our community in 2023 and beyond.`
    },
    {
      id: 'karen',
      name: 'Karen Bratton',
      position: 'AGENT',
      img: '/karen.webp',
      description: `Hi, I'm Karen Bratton (Spieles) and I have been in the insurance business for 38 years. I have 2 great daughters, 2 grandsons, and 2 son-in-laws that I am very proud of. I have lived in the Vandalia/Butler area my entire life and can say that it has been a great place to raise my family.`
    },
    {
      id: 'jessy',
      name: 'Jessy Short',
      position: 'AGENT',
      img: '/jessy.webp',
      description: `My name is Jessy Short and I am an Independent Medicare Agent. As an Agent since 2016, I have assisted seniors make sense of Medicare and help make sure they are taken care of while on Medicare. In my spare time I enjoy the outdoors, all sports and spending time with my family.`
    }
  ];

  constructor() {
    this.mediaQuery = window.matchMedia('(max-width: 768px)');
  }

  scrollEmployeeIntoView(element: string): void {
    document.getElementById(element).scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
  }
}
