import { AfterViewInit, Component, inject } from '@angular/core';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';
import { environment } from 'src/environments/environment.development';
import { StfService } from 'src/app/services/stf.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  standalone: false,
})
export class ContactPageComponent implements AfterViewInit {
  stfService = inject(StfService);
  SvgIcon = SvgIcon;
  contactEmail = environment.contactEmail;
  branches = [
    {
      branchName: 'Arcanum',
      contactMethods: [{ label: 'Phone: ', value: '937-692-8310' }],
      email: this.contactEmail,
      cardFlipped: false,
    },
    {
      branchName: 'Vandalia',
      contactMethods: [{ label: 'Phone: ', value: '937-890-5426' }],
      email: this.contactEmail,
      cardFlipped: false,
    },
  ];

  ngAfterViewInit(): void {
    this.stfService.animateText('#contact-header', 0);
    this.stfService.animateText('#contact-description', 0.4, true);
    this.stfService.animateText('#scroll-indicator', 0.8, true);
    this.stfService.animateText('#contact-body', 1.2, true);
  }
}
