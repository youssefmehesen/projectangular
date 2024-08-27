import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { TopHeaderComponent } from './layout/top-header/top-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { MkBtnComponent } from './components/mk-btn/mk-btn.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopHeaderComponent, HeaderComponent, FooterComponent,
    ItemCardComponent, MkBtnComponent, CategoryCardComponent, ServiceCardComponent,
    DeveloperCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
