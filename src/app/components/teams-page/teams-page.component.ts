import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { StfService } from 'src/app/services/stf.service';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss'],
  standalone: false,
})
export class TeamsPageComponent implements OnInit {
  stfService = inject(StfService);
  basePath = '../../../assets/img/meetTheTeam';
  teamMembers: Employee[] = [
    {
      id: 'tracy',
      name: 'Tracy Fout',
      position: 'OWNER',
      img: '/tracy.webp',
      description: `Hi there, my name is Tracy Fout, and I am the owner of STF Insurance Group. I have been working in the insurance industry for over 10 years. I was born and raised in Arcanum, which is where I still live today. When I'm not working in the office, you can catch me in the field farming. On the rare occasion I have some free time, I enjoy spending it with my family while soaking up the sun in Florida.  
        As the owner of STF Insurance Group, I am committed to providing the best possible service to my clients. I take great pride in helping people find the right insurance policies to meet their needs and protect the things that matter most to them. It's a job that I truly love, and I look forward to continuing to serve my community for many years to come.`,
    },
    {
      id: 'emily',
      name: 'Emily Wagner',
      position: 'AGENT',
      img: '/emily.webp',
      description: `Hi, my name is Emily Wagner and I am proud to be a part of the STF team since the beginning of 2023. As a mother of five, I understand the value of hard work and dedication and bring those values to everything I do. Along with my work at STF, I am also heavily involved in the local community of Arcanum and the school. I love watching my kids' sports and activities and being a part of their growth and development. As the Youth Wrestling Director for Arcanum, I am committed to helping young athletes develop their skills and reach their full potential. I am also heavily involved in the junior high and high school programs, where I support the wrestlers and coaches in any way I can. Overall, I am passionate about being a positive force in the community and helping young people grow and thrive.`,
    },
    {
      id: 'cole',
      name: 'Cole Burrell',
      position: 'AGENT',
      img: '/cole.webp',
      description: `Hi I'm Cole Burrell and I have been the group for almost 3 years now. I graduated from Earlham college with a degree in business. In my free time I enjoy spending time with my wife Cami and our dog. I look forward to helping you however possible.`,
    },
    {
      id: 'trevor',
      name: 'Trevor Fry',
      position: 'AGENT',
      img: '/trevor.webp',
      description: `Hi I'm Trevor Fry. I am working to finish my business degree at IU East. I started with the Spieles Troutwine Fout Insurance Group in 2022. As I finish my schooling I look forward to serving our community in 2023 and beyond.`,
    },
    {
      id: 'karen',
      name: 'Karen Bratton',
      position: 'AGENT',
      img: '/karen.webp',
      description: `Hi, I'm Karen Bratton (Spieles) and I have been in the insurance business for 38 years. I have 2 great daughters, 2 grandsons, and 2 son-in-laws that I am very proud of. I have lived in the Vandalia/Butler area my entire life and can say that it has been a great place to raise my family.`,
    },
    {
      id: 'jessy',
      name: 'Jessy Short',
      position: 'AGENT',
      img: '/jessy.webp',
      description: `My name is Jessy Short and I am an Independent Medicare Agent. As an Agent since 2016, I have assisted seniors make sense of Medicare and help make sure they are taken care of while on Medicare. In my spare time I enjoy the outdoors, all sports and spending time with my family.`,
    },
  ];

  ngOnInit(): void {
    this.stfService.setLoadState('#team-header', 50);
    this.stfService.setLoadState('#team-description', 50);
    this.stfService.setLoadState('#team', 50);

    this.stfService.animateBackground('#dot-bg', 0);
    this.stfService.animateBackground('#gradients', 0);
    setTimeout(() => {
      this.stfService.animateText('#team-header', 0);
      this.stfService.animateText('#team-description', 0.5);
      this.stfService.animateText('#team', 1);
    }, 250);
  }
}
