import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OtpFormComponent } from "../../components/otp-form/otp-form.component";
import { CartService } from '../../services/cart-service.service';
import { WishlistService } from '../../services/wishlist.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, OtpFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartItems: number;
  favoriteItems: number;

  constructor(private searchValue: SharedService, private cartService: CartService, private wishhlistService: WishlistService) { }

  ngOnInit(): void {
    this.cartService.currentItems$.subscribe(items => {
      this.cartItems = items.length;
    })

    this.wishhlistService.currentWisList$.subscribe(items => {
      this.favoriteItems = items.length
    })
  }

  searching(e: any) {
    this.searchValue.setSearch(e.target.value);
  }

}
