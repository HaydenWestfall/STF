import { AfterViewInit, Component, inject } from '@angular/core';
import { StfService } from 'src/app/services/stf.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
  standalone: false,
})
export class AboutSectionComponent implements AfterViewInit {
  stfService = inject(StfService);

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.stfService.animateText('#about-section-header');
      this.stfService.animateText('#about-section-description');
      this.stfService.animateText('#about-section-action');
    }, 250);
  }
}
