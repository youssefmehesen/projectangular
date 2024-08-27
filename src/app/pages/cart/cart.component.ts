import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service.service';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DiscountPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: any[] = [];
  // imageThumbnail: string = 'assets/images/prod1.jpg';

  constructor(private cartService: CartService) { }
  // constructor(private sharedDataService: SharedDataService) {
  // this.sharedDataService.currentCartItems.subscribe(cartItems => {
  // this.cartItems = cartItems;
  // });
  // }
  // ngOnInit(): void {
  // console.log(this.cartItems);
  // 
  // }

  ngOnInit(): void {
    this.cartService.currentItems$.subscribe(items => {
      this.cartItems = items;
      console.log(this.cartItems);
    })
  }

  onSubmit(e: any) {
    // e.preventDefault();
  }
  callMe() {
    // console.log('lol')

  }

}
