import { Component } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-teams-page2',
  templateUrl: './teams-page2.component.html',
  styleUrls: ['./teams-page2.component.scss'],
})
export class TeamsPage2Component {
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
    // {
    //   id: 'hannah',
    //   name: 'Hannah Smith',
    //   position: 'AGENT',
    //   img: '/jessy.webp',
    //   description: `Hi, my name is Hannah Smith. I am proud to be a part of the STF Insurance Group since the beginning of 2024. I was born and raised in the Arcanum area and now reside here with my fiancé, Cody. I am an Arcanum and Wright State University graduate, I found my passion for insurance shortly after graduating from Wright State. I came to STF as a licensed agent with 2 years of prior experience specializing in auto, home and life insurance. I am passionate about educating clients on the importance of insurance and helping them make informed decisions that bring peace of mind and protect what matters most. I look forward to serving our community for many years.`,
    // },
    // ,
    // {
    //   id: 'heather',
    //   name: 'Heather Macy',
    //   position: 'AGENT',
    //   img: '/jessy.webp',
    //   description: `Hello, I'm Heather Macy, and I joined the STF team in November of 2023. Arcanum is my hometown, and I'm proud to have graduated from both Arcanum High School and Miami University. Previously, I worked in a non-profit leadership role, but I decided to shift my focus to my family, which led me to STF. I live in Arcanum with my husband and our four children. In my free time, I enjoy working out, gardening, and most of all, spending quality time with my family. I'm excited to be part of the STF team and look forward to contributing to our success.`,
    // },
  ];
}
