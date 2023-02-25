import { Component } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  SvgIcon = SvgIcon;
  contactEmail = environment.contactEmail;
  branches = [
    {
      branchName: 'Arcanum',
      contactMethods: [
        {label: 'Phone: ', value: '937-692-8310'},
        {label: 'Fax: ', value: '937-278-9132'}
      ],
      email: this.contactEmail,
      cardFlipped: false
    },
    {
      branchName: 'Vandalia',
      contactMethods: [
        {label: 'Phone: ', value: '937-890-5426'},
      ],
      email: this.contactEmail,
      cardFlipped: false
    }
  ]
}
