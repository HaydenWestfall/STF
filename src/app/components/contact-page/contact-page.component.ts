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
    this.stfService.setLoadState('#contact-header', 50);
    this.stfService.setLoadState('#contact-description', 50);
    this.stfService.setLoadState('#scroll-indicator', 50);
    this.stfService.setLoadState('#contact-body', 50);

    setTimeout(() => {
      this.stfService.animateText('#contact-header', 0);
      this.stfService.animateText('#contact-description', 0.3, true);
      this.stfService.animateText('#scroll-indicator', 0.6, true);
      this.stfService.animateText('#contact-body', 0.9, true);
    }, 250);
  }
}
