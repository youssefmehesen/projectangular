import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { RatingModule } from 'primeng/rating';
import { MkIconComponent } from '../mk-icon/mk-icon.component';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { CartService } from '../../services/cart-service.service';
import { WishlistService } from '../../services/wishlist.service';
import { Product } from '../../dto/product.dto';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [RatingModule, FormsModule, ColorPickerModule, CommonModule, MkIconComponent, DiscountPipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  cardImg: string = '/assets/images/prod1.jpg';
  value: number = 5;
  color: string = 'red';
  iconStatus: boolean = false
  // rating: any[] = [1, 2, 3, 4, 5]
  // myRatingArray = [];
  @Input() hideTrash: boolean = false;
  @Input() hideFavorite: boolean = false;
  @Input() hideCart: boolean = false;
  @Input() hideOldPrice: boolean = false;
  @Input() hideColor: boolean = false;
  @Input() newItem: boolean = false;
  @Input() product: any;

  constructor(private cartService: CartService, private wishlistService: WishlistService) { }

  getClass() {
    return this.iconStatus ? 'active' : 'inactive'
  }

  calculateRating(productRate: number): string[] {
    const rating = [1, 2, 3, 4, 5]; // Define the possible rating values
    const myRatingArray: string[] = [];

    rating.forEach(ele => {
      if (ele <= productRate) {
        myRatingArray.push("bi-star-fill");
      } else if (ele - productRate < 1 && ele - productRate > 0) {
        myRatingArray.push("bi-star-half");
      } else {
        myRatingArray.push("bi-star");
      }
    });
    return myRatingArray;
  }

  addToCart(product: any) {
    this.cartService.addToCart(product)
  }

  addToWishlist(product: Product) {
    this.wishlistService.addToWishList(product)
  }
}
