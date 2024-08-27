import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { DeveloperCardComponent } from '../../components/developer-card/developer-card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ServiceCardComponent, DeveloperCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutImg = 'assets/images/about.jpg';
  dashboard: any[] = [{
    logo: 'shop',
    amount: '10.5K',
    title: 'Sallers active our site'
  }, {
    logo: 'coin',
    amount: '33K',
    title: 'Mopnthly Produduct Sales'
  }, {
    logo: 'handbag',
    amount: '45.5K',
    title: 'Customer active in our site'
  }, {
    logo: 'cash-stack',
    amount: '10.5K',
    title: 'Sallers active our site'
  }]

  services: any[] = [{
    logo: 'truck',
    amount: '10.5K',
    title: 'Sallers active our site'
  }, {
    logo: 'headset',
    amount: '33K',
    title: 'Mopnthly Produduct Sales'
  }, {
    logo: 'shield-check',
    amount: '45.5K',
    title: 'Customer active in our site'
  }]
}
