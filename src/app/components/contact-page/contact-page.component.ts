import { Component, ChangeDetectionStrategy } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
    RouterLink,
    RevealDirective,
    FormsModule
],
})
export class ContactPageComponent {
  env = environment;
  contactEmail = environment.contactEmail;

  topics = [
    'A new quote',
    'A change to my policy',
    'A billing or payment question',
    'Reporting a claim',
    'Something else',
  ];

  form = {
    name: '',
    email: '',
    phone: '',
    topic: this.topics[0],
    message: '',
  };

  branches = [
    {
      branchName: 'Arcanum',
      address: '21 W George St, Arcanum, OH 45304',
      phone: environment.arcanumPhoneNumber,
      hours: 'Mon – Fri, 8:30 AM – 4:30 PM',
    },
    {
      branchName: 'Vandalia',
      address: '415 S Dixie Dr, Vandalia, OH 45377',
      phone: environment.vandaliaPhoneNumber,
      hours: 'Mon – Fri, 8:30 AM – 4:30 PM',
    },
    {
      branchName: 'Middletown',
      address: '1820 1st Ave, Middletown, OH 45044',
      phone: environment.middletownPhoneNumber,
      hours: 'Mon – Fri, 8:30 AM – 4:00 PM',
    },
  ];

  /** Opens the visitor's email client with the message pre-filled. */
  sendMessage(): void {
    const subject = `Website enquiry — ${this.form.topic}`;
    const body = [
      `Name: ${this.form.name}`,
      `Email: ${this.form.email}`,
      `Phone: ${this.form.phone}`,
      `Topic: ${this.form.topic}`,
      '',
      this.form.message,
    ].join('\n');

    window.location.href = `mailto:${this.contactEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }
}
