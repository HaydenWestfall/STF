import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: false,
})
export class HeroSectionComponent {
  env = environment;

  assurances = [
    'Free, no-obligation quotes',
    'One agent for home, auto, farm & business',
    'Local claims help when you need it most',
  ];

  stats = [
    { value: '60+', label: 'Years serving the Miami Valley' },
    { value: '3,000+', label: 'Families & businesses protected' },
    { value: '20+', label: 'Top-rated carriers compared' },
    { value: '3', label: 'Ohio offices near you' },
  ];
}
