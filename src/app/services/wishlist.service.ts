import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../dto/product.dto';
import { runPostSignalSetFn } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist = new BehaviorSubject<Product[]>([]);
  currentWisList$ = this.wishlist.asObservable()

  constructor() { }
  getWishlist(): Product[] {
    return this.wishlist.getValue();
  }

  addToWishList(product: Product) {
    const wishlist = this.getWishlist()

    const isFavorite = wishlist.find(item => item.id === product.id)

    if (isFavorite) {
      console.log('Product is already in the wishlist')
    } else {
      this.wishlist.next([...wishlist, product])
    }

  }
}
