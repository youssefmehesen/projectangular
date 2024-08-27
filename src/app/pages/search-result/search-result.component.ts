import { Component } from '@angular/core';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [ItemCardComponent, CommonModule],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  items: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

}
