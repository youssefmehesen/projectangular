import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../dto/product.dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<Product[]>([]);
  currentItems$ = this.cartItems.asObservable();


  constructor() { }


  getCartItems(): Product[] {
    return this.cartItems.getValue();
  }

  addToCart(product: Product) {
    const cart = this.getCartItems();
    const isAdded = cart.some(item => item.id === product.id);

    if (!isAdded) {
      this.cartItems.next([...cart, product]);
      console.log('Product added to the cart');
    } else {
      console.log('Product is already in the cart');
    }
  }
}
