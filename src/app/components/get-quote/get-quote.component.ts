import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { animatePanel } from 'src/animations';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss'],
  animations: [animatePanel]
})
export class GetQuoteComponent {

  SvgIcon = SvgIcon;
  inputPrompt = 'Get An Instant Quote By Giving Us Some Information';
  formInput: string = '';
  isOpen = false;
  showGetQuote = true;
  
  hideAnimation;

  constructor(public location: Location) { }

  closeQuote(): void {
    this.showGetQuote = false;
    setTimeout(() => {
      this.location.back();
    }, 1100);
  }
}
