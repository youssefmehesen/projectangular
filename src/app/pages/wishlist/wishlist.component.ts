import { Component } from '@angular/core';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { WishlistService } from '../../services/wishlist.service';
import { Product } from '../../dto/product.dto';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  myWishlist: Product[];

  constructor(private wisbhlsit: WishlistService) {
  }

  ngOnInit() {
    this.wisbhlsit.currentWisList$.subscribe((items) => {
      this.myWishlist = items
    })
  }





}
