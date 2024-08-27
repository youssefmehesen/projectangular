import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { MkBtnComponent } from '../mk-btn/mk-btn.component';
import { Product } from '../../dto/product.dto';
import { ProductsService } from '../../services/products.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-pop-up-search-result',
  standalone: true,
  imports: [ItemCardComponent, MkBtnComponent],
  templateUrl: './pop-up-search-result.component.html',
  styleUrl: './pop-up-search-result.component.css'
})
export class PopUpSearchResultComponent {
  searchResult: number = 15;
  searchText: string = '';

  itemResult: Product[] = [];
  constructor(private searchValue: SharedService, private productService: ProductsService) {

  }
  ngOnInit(): void {
    this.searchValue.currentSearch$.subscribe((value: any) => {
      this.searchText = value;
      if (this.searchText) {
        this.itemResult = []

        this.seach(this.searchText);
      } else {
        this.itemResult = []
      }
    })

  }


  seach(query: string) {
    this.productService.getProducts(`/search?q=${query}`).subscribe((res: any) => {
      this.itemResult = res.products;
    });

  }
}
