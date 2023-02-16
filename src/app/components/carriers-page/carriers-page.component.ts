import { Component } from '@angular/core';
import { fade, itemAnim, listAnim } from 'src/animations';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-carriers-page',
  templateUrl: './carriers-page.component.html',
  styleUrls: ['./carriers-page.component.scss'],
  animations: [fade, itemAnim, listAnim]
})
export class CarriersPageComponent {

  SvgIcon = SvgIcon;

  basePath = '../../../assets/img/';
  carriersPath = this.basePath + 'carriers/';
  searchText = '';

  carriers: any[] = [
    {
      name: 'auto owners',
      logo: this.carriersPath + 'auto-owners.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'buckeye',
      logo: this.carriersPath + 'buckeye.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'celina',
      logo: this.carriersPath + 'celina.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'cna',
      logo: this.carriersPath + 'cna.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'commonwealth',
      logo: this.carriersPath + 'commonwealth.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'dairyland',
      logo: this.carriersPath + 'dairyland.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'donegal',
      logo: this.carriersPath + 'donegal.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'encova',
      logo: this.carriersPath + 'encova.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'foremost',
      logo: this.carriersPath + 'foremost.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'german farmers',
      logo: this.carriersPath + 'german-farmers.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'grinnell',
      logo: this.carriersPath + 'grinnell.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'hagerty',
      logo: this.carriersPath + 'hagerty.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'hastings mutual',
      logo: this.carriersPath + 'hastings-mutual.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'pekin',
      logo: this.carriersPath + 'pekin.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'progressive',
      logo: this.carriersPath + 'progressive.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'safeco',
      logo: this.carriersPath + 'safeco.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'trexis',
      logo: this.carriersPath + 'trexis.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'utica',
      logo: this.carriersPath + 'utica.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    },
    {
      name: 'wayne',
      logo: this.carriersPath + 'wayne.png',
      phone: '(937) 467-9825',
      claims: '(800) 243-7564',
      payments: 'https://www.auto-owners.com',
      claimsLink: 'https://www.auto-owners.com'
    }
  ];
  foundCarriers: any[] = structuredClone(this.carriers);

  clearSearch(): void {
    this.searchText = '';
    this.searchCarriers();
  }

  searchCarriers(): void {
    this.foundCarriers = this.carriers.filter(x => x.name.includes(this.searchText))
  }
}
