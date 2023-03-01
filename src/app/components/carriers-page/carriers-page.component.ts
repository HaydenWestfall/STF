import { Component } from '@angular/core';
import { fade, itemAnim } from 'src/animations';
import { Carrier } from 'src/app/models/Carrier';
import { StfService } from 'src/app/services/stf.service';
import { SvgIcon } from 'src/app/utility/svg-icons/svg-icons.component';

@Component({
  selector: 'app-carriers-page',
  templateUrl: './carriers-page.component.html',
  styleUrls: ['./carriers-page.component.scss'],
  animations: [fade, itemAnim]
})
export class CarriersPageComponent {
  SvgIcon = SvgIcon;
  basePath = '../../../assets/img/';
  carriersPath = this.basePath + 'carriers/';
  searchText = '';

  carriers: Carrier[] = [
    {
      name: 'Auto Owners Insurance',
      logo: this.carriersPath + 'auto-owners.png',
      phone: '800-346-0346',
      claims: '1-888-252-4626',
      payments: 'https://customercenter.auto-owners.com/cp/ui/login',
      claimsLink: 'https://www.auto-owners.com/claims/report-a-claim'
    },
    {
      name: 'Buckeye Insurance Group',
      logo: this.carriersPath + 'buckeye.png',
      phone: '937-778-5000',
      claims: '1-937-778-5022',
      payments: 'https://consumer.buckeye-ins.com/account/login?ReturnUrl=%2F%3Futm_source%3Dbuckeye-ins.com%26utm_medium%3DcovidMakePayment%26utm_campaign%3Dpublic',
      claimsLink: 'https://www.buckeye-ins.com/claims'
    },
    {
      name: 'Celina Insurance Group',
      logo: this.carriersPath + 'celina.png',
      phone: '800-552-5181',
      claims: '800-231-2318',
      payments: 'https://mypolicy.celinainsurance.com/MyPolicy.nsf',
      claimsLink: 'https://www2.celinainsurance.com/claims/'
    },
    {
      name: 'CNA Insurance',
      logo: this.carriersPath + 'cna.png',
      phone: '1-800-262-2000',
      claims: '877-262-2727',
      payments: 'https://billing.cna.com/#/login',
      claimsLink: 'https://www.cna.com/web/guest/cna/claims-center'
    },
    {
      name: 'Commonwealth Insurance',
      logo: this.carriersPath + 'commonwealth.png',
      phone: '(877) 603 1310',
      claims: '877-603-1310',
      payments: 'https://customer.commonwealthcasualty.com/',
      claimsLink: 'https://www.commonwealthcasualty.com/file-a-claim'
    },
    {
      name: 'Dairyland Insurance',
      logo: this.carriersPath + 'dairyland.png',
      phone: '800-334-0090',
      claims: '800-334-0090',
      payments: 'https://my.dairylandinsurance.com/web/login',
      claimsLink: 'https://www.dairylandinsurance.com/auto/claims'
    },
    {
      name: 'Donegal Insurance Group',
      logo: this.carriersPath + 'donegal.png',
      phone: '(800) 877-0600',
      claims: '(800) 877-9006',
      payments: 'https://www.donegalgroup.com/search-payment',
      claimsLink: 'https://www.donegalgroup.com/customer-services/claim-services'
    },
    {
      name: 'Encova Insurance',
      logo: this.carriersPath + 'encova.png',
      phone: '800-876-6642',
      claims: '800-876-8766',
      payments: 'https://www.encova.com/submit-claim/',
      claimsLink: 'https://www.encova.com/pay-bill/'
    },
    {
      name: 'Foremost Insurance Group',
      logo: this.carriersPath + 'foremost.png',
      phone: '800-527-3907',
      claims: '800-274-7865',
      payments: 'https://www.myforemostaccount.com/PrimaryAuthn/?ref=fpo',
      claimsLink: 'https://claims.foremost.com/cmp/s/filealoss?SO=03'
    },
    {
      name: 'German Farmers Insurance',
      logo: this.carriersPath + 'german-farmers.png',
      phone: '(419) 753-2575',
      claims: '',
      payments: 'https://www.invoicecloud.com/portal/(S(dnnsum4a0hofd1jvbc43pdak))/2/Site2.aspx?G=d0076aa7-6ba4-436b-a555-4314c09deeed',
      claimsLink: 'https://gfmic.com/file-a-claim/'
    },
    {
      name: 'Grinnell Mutual Insurance Group',
      logo: this.carriersPath + 'grinnell.png',
      phone: '800-362-2041',
      claims: '877-467-2252',
      payments: 'https://www.grinnellmutual.com/account-login',
      claimsLink: 'https://www.grinnellmutual.com/claims/report-a-claim'
    },
    {
      name: 'Hagerty Insurance',
      logo: this.carriersPath + 'hagerty.png',
      phone: '877-922-9701',
      claims: '800-385-0274',
      payments: 'https://login.hagerty.com/TemporaryAccess?purpose=PayBill',
      claimsLink: 'https://login.hagerty.com/identity/Login?ReturnUrl=%2Fidentity%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DProd%2520Usa%2520Direct%257CTransactional%26redirect_uri%3Dhttps%253A%252F%252Fwww.hagerty.com%252Foidc%252Fcallback%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520email%2520offline_access%2520ProcessApi%2520PartialTrust%2520Customer%2520FullTrust%26state%3DOpenIdConnect.AuthenticationProperties%253DcCNMDa0BJ_2VlX_0LEp4Tlp5LFuq1NAw3FrkrDpVRlmzlfQKiBTaTxTmDn6PT7eI32VJJoFr0K_XD6JE8kHrbG_mbHOXksHGphzl6lq7P6XBrc3KCe3usWWbFjlO3vUw4e1Pp5XybbF6-yK5MPfXhfi8vHhdeqzkqdbmkz8kkqik3ucu39Un7zmMptnbSj88nL4zq58YWnCWJWF1t1xsLTIk5IpRa8pE1_hsqYqjTkfMQBIXyDUc9O3eZYfUjTN6IQ-hAAorG6_QWosc7qFARDY9h_iSmVBQKMmaZQHOKF39QPwi%26response_mode%3Dform_post%26nonce%3D638127173158879980.YzVlN2E2Y2ItNWNiOS00YTQ4LWI0OTItNWE0ZDg5Yzg0OTVkNmE4Njc5MDEtMDdjYS00MzQ0LTk0ZmQtYjY5YTIxZGU3YTE3%26acr_values%3DFullTrust%2520Customer%26prompt%3Dlogin%26Hagerty.ct%3D9IY5Oe6u0kyy9B0LWEz5wA%26x-client-SKU%3DID_NET45%26x-client-ver%3D5.3.0.0%26suppressed_prompt%3Dlogin'
    },
    {
      name: 'Hastings Mutual Insurance Company',
      logo: this.carriersPath + 'hastings-mutual.png',
      phone: '(800) 442-8277',
      claims: '(800) 442-8277',
      payments: 'https://services.hastingsmutual.com//Authentication/Login?ReturnUrl=https://www.hastingsmutual.com/policyholder-dashboard/make-a-payment',
      claimsLink: 'https://www.hastingsmutual.com/report-a-claim'
    },
    {
      name: 'Pekin Insurance',
      logo: this.carriersPath + 'pekin.png',
      phone: '800-322-0160',
      claims: '888-735-4611',
      payments: 'https://webpay.1tech.net/PayMyBill/Account/Login',
      claimsLink: 'https://www.pekininsurance.com/client-service/customer-center/file-a-claim'
    },
    {
      name: 'Progressive Insurance',
      logo: this.carriersPath + 'progressive.png',
      phone: '1-855-347-3939',
      claims: '1-888-671-4405',
      payments: 'https://account.apps.progressive.com/access/ez-payment/policy-info',
      claimsLink: 'https://www.progressive.com/'
    },
    {
      name: 'Safeco Insurance',
      logo: this.carriersPath + 'safeco.png',
      phone: '1-800-332-3226',
      claims: '1-800-332-3226',
      payments: 'https://customer.safeco.com/accountmanager/account/login',
      claimsLink: 'https://customer.safeco.com/accountmanager/account/login'
    },
    {
      name: 'Trexis Insurance',
      logo: this.carriersPath + 'trexis.png',
      phone: '1-877-384-7466',
      claims: '',
      payments: 'https://www.trexis.com/',
      claimsLink: 'https://www.trexis.com/#LoginReportClaim'
    },
    {
      name: 'Utica National Insurance Group',
      logo: this.carriersPath + 'utica.png',
      phone: '800-598-8422',
      claims: '800-216-1420',
      payments: 'https://www.uticanational.com/make-a-payment/',
      claimsLink: 'https://www.uticanational.com/claimsresourcecenter/'
    },
    {
      name: 'Wayne Insurance Group',
      logo: this.carriersPath + 'wayne.png',
      phone: '330-345-8100',
      claims: '800-680-9111',
      payments: 'https://www.wayneinsgroup.com/wayne-quick-pay',
      claimsLink: 'https://www.wayneinsgroup.com/submit-a-claim'
    }
  ];
  foundCarriers: Carrier[] = structuredClone(this.carriers);

  constructor(public stf: StfService) { }

  clearSearch(): void {
    this.searchText = '';
    this.foundCarriers = structuredClone(this.carriers);
  }

  searchCarriers(key: KeyboardEvent): void {
    if (key.key === 'Enter')
      this.foundCarriers = this.carriers.filter(x => x.name.includes(this.searchText.toLowerCase()))
  }
}
