import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StfService } from 'src/app/services/stf.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-quote-redirect',
  templateUrl: './quote-redirect.component.html',
  styleUrls: ['./quote-redirect.component.scss']
})
export class QuoteRedirectComponent implements OnInit{

  constructor(public router: Router, public stfService: StfService) { }

  ngOnInit() {
    window.open(environment.quoteLink, "_blank");
    const route = (this.stfService.history.length < 1) ? '' : this.stfService.history[1];
    this.router.navigate([route]);
  }
}
