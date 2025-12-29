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
      name: 'Hannah Smith',
      position: 'AGENT',
      img: '/hannah-smith.jpg',
      description: [
        `Hi, my name is Hannah Smith. I am proud to be a part of the STF Insurance Group since the beginning of 2024. I was born and raised in the Arcanum area and now reside here with my fiancé, Cody. I am an Arcanum and Wright State University graduate, I found my passion for insurance shortly after graduating from Wright State. I came to STF as a licensed agent with 2 years of prior experience specializing in auto, home and life insurance. I am passionate about educating clients on the importance of insurance and helping them make informed decisions that bring peace of mind and protect what matters most. I look forward to serving our community for many years.`,
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
      name: 'Kayla Marker',
      position: 'AGENT',
      description: [
        `Hello everyone, my name is Kayla Marker. I joined the STF team in 2025 after working as a licensed Crop Claims Field Adjuster. I am a graduate of Ansonia High School and Northeast Iowa Community College, where I earned a degree in Agricultural Business. Outside of work, you can usually find me with my family in the cattle barn or enjoying time with friends. I’m passionate about helping others feel confident and protected, and my goal as your agent is to provide coverage that is clear, affordable, and tailored to your specific needs.`,
      ],
    },
    {
      id: 'chasta',
      name: 'Chasta Driskell',
      position: 'AGENT',
      description: [
        `Hi, my name is Chasta Driskell. I have been with STF Insurance Group since the end of 2025. I was born and raised in Indiana and now live in Arcanum with my fiancé, and my daughter. I came to STF Insurance Group after a few months of experience in insurance specializing in auto and home insurance. I look forward to helping you with any need you may have in the future. Reach out if you ever need any assistance. `,
      ],
    },
  ];
  selectedMember: Employee = null;

  ngOnInit(): void {
    this.stfService.setLoadState('#team-header', 50);
    this.stfService.setLoadState('#team-description', 50);
    this.stfService.setLoadState('#team', 50);

    setTimeout(() => {
      this.stfService.animateText('#team-header', 0);
      this.stfService.animateText('#team-description', 0.4);
      this.stfService.animateText('#team', 0.8);
    }, 250);
  }
}
