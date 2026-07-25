import { Component, HostListener } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../directives/reveal.directive';
import { BannerComponent } from '../banner/banner.component';

@Component({
    selector: 'app-teams-page',
    templateUrl: './teams-page.component.html',
    styleUrls: ['./teams-page.component.scss'],
    imports: [
    RouterLink,
    RevealDirective,
    BannerComponent
],
})
export class TeamsPageComponent {
  basePath = 'assets/img/meetTheTeam';
  teamMembers: Employee[] = [
    {
      id: 'tracy',
      name: 'Tracy Fout',
      position: 'OWNER',
      img: '/tracy-fout.jpg',
      description: [
        `Hi there, my name is Tracy Fout, and I am the owner of STF Insurance Group and Dobrozsi Insurance Agency. I have been working in the insurance industry for over 10 years. I was born and raised in Arcanum, which is where I still live today. When I'm not working in the office, you can catch me in the field farming. On the rare occasion I have some free time, I enjoy spending it with my family while soaking up the sun in Florida.`,
        `As the owner of both STF Insurance Group and Dobrozsi Insurance Agency, I am committed to providing the best possible service to my clients. I take great pride in helping people find the right insurance policies to meet their needs and protect the things that matter most to them. It's a job that I truly love, and I look forward to continuing to serve my community for many years to come.`,
      ],
    },
    {
      id: 'cole',
      name: 'Cole Burrell',
      position: 'AGENT',
      img: '/cole-burrell.jpg',
      description: [
        `Hi I'm Cole Burrell and I have been the group for almost 3 years now. I graduated from Earlham college with a degree in business. In my free time I enjoy spending time with my wife Cami and our dog. I look forward to helping you however possible.`,
      ],
    },
    {
      id: 'trevor',
      name: 'Trevor Fry',
      position: 'AGENT',
      img: '/trevor-fry.jpg',
      description: [
        `Hi, Im Trevor Fry. I started with STF Insurance Group in 2022. I graduated college from IU East with a degree in business administration. I enjoy spending my spare time with my family and friends. I also enjoy watching the Cincinnati Bengals and Reds. I look forward to helping you with all of your insurance needs.`,
      ],
    },
    {
      id: 'jason',
      name: 'Jason North',
      position: 'AGENT',
      img: '/jason-north.jpg',
      description: [
        `Jason grew up in Darke County and now lives with his wife and three children. He joined STF Insurance Group in 2025 and is dedicated to helping clients find the right coverage for their needs. Outside of work, Jason has a passion for horses and enjoys spending time with his friends and family.`,
      ],
    },
    {
      id: 'hannah',
      name: 'Hannah Ruby',
      position: 'AGENT',
      img: '/hannah-smith.jpg',
      description: [
        `Hi, my name is Hannah Ruby. I am proud to be a part of the STF Insurance Group since the beginning of 2024. I was born and raised in the Arcanum area and now reside here with my husband, Cody. I am an Arcanum and Wright State University graduate, I found my passion for insurance shortly after graduating from Wright State. I came to STF as a licensed agent with 2 years of prior experience specializing in auto, home and life insurance. I am passionate about educating clients on the importance of insurance and helping them make informed decisions that bring peace of mind and protect what matters most. I look forward to serving our community for many years.`,
      ],
    },
    {
      id: 'heatherDobrozsi',
      name: 'Heather Dobrozsi',
      position: 'AGENT',
      img: '/heather-debrozsi.jpg',
      description: [
        `Heather was born and raised in the Middletown area.  She is a graduate of Edgewood High School and attended Miami University.  She has worked in the administrative/customer service industry for over 20 years.  She was a real estate agent with HER Realtors for 10 years before transitioning to the insurance industry.  She has been with her husband Patrick Dobrozsi for over 20 years, and they stay busy raising their 2 children together.`,
      ],
    },
    {
      id: 'jessy',
      name: 'Jessy Short',
      position: 'AGENT',
      img: '/jessy-short.jpg',
      description: [
        `My name is Jessy Short and I am an Independent Medicare Agent. As an Agent since 2016, I have assisted seniors make sense of Medicare and help make sure they are taken care of while on Medicare. In my spare time I enjoy the outdoors, all sports and spending time with my family.`,
      ],
    },
    {
      id: 'katie',
      name: 'Katie Fry',
      position: 'AGENT',
      img: '/katie-fry.jpg',
      description: [
        `My name is Katie Fry. I am happy to be working alongside Jessy Short since 2023. I graduated from Indiana University East with a bachelors in Business Administration. In my free time, I enjoy spending time with my family and friends.`,
      ],
    },
    {
      id: 'shawn',
      name: 'Shawn Smith',
      position: 'AGENT',
      img: '/shawn-smith.jpg',
      description: [
        `I am a lifelong resident of Darke County with a deep-rooted family history in farming. I live in Arcanum with my wife and three daughters. I joined STF Insurance Group to work with our farming community, specializing in crop insurance. In my free time, I enjoy watching my daughters' sporting events and spending time with friends and family.`,
      ],
    },
    {
      id: 'emilie',
      name: 'Emilie Fout',
      position: 'AGENT',
      description: [
        `Hello, my name is Emilie Fout. I joined the STF team in 2025 after spending a year at Cedarville University studying communication. I was born and raised in Arcanum and plan to continue building my life right here in this community. Outside of work, I enjoy coaching and spending time with my family and friends. I’m passionate about creating meaningful connections and helping others whenever I can. I look forward to serving this community for many years to come.`,
      ],
    },
    {
      id: 'kayla',
      name: 'Kayla Godown',
      position: 'AGENT',
      description: [
        `Hey there, I'm Kayla Godown! I was born and raised in Darke County and currently live in New Madison with my husband. I graduated from Ansonia High School and earned a degree in Agricultural Business from North East Iowa Community College. I grew up on a cow-calf and show cattle operation, and agriculture continues to be a big part of my life. Being involved in farming has given me a strong understanding of the needs of local families and farmers. At STF Insurance Group, I enjoy helping customers find the right coverage for their farm, home, auto, and business. My goal is to make insurance simple, provide great service, and help protect what matters most to you.`,
      ],
    },
  ];
  selectedMember: Employee = null;

  openMember(member: Employee): void {
    this.selectedMember = member;
    this.setBodyLock(true);
  }

  closeMember(): void {
    this.selectedMember = null;
    this.setBodyLock(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedMember) this.closeMember();
  }

  photoFor(member: Employee): string {
    return this.basePath + (member.img ?? '/stock-user.png');
  }

  private setBodyLock(locked: boolean): void {
    if (typeof document === 'undefined') return;
    document.body.classList.toggle('nav-open', locked);
  }
}
