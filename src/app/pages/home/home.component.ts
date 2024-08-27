import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import { MkBtnComponent } from "../../components/mk-btn/mk-btn.component";
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
// import { from, Observable, of } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { forkJoin } from 'rxjs';
import { PopUpSearchResultComponent } from '../../components/pop-up-search-result/pop-up-search-result.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopUpSearchResultComponent, NgbCarouselModule, ItemCardComponent, MkBtnComponent, CategoryCardComponent, ServiceCardComponent], //
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ad = "https://f.nooncdn.com/mpcms/EN0003/assets/10681a57-ccad-48b8-bba1-335466dea852.png?format=avif"
  showNavigationArrows = true;
  showNavigationIndicators = true;
  covers: any[] | undefined = [
    "https://f.nooncdn.com/mpcms/EN0003/assets/d0b434cf-d9c9-450c-b99d-e0a534564589.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0003/assets/a5e6e4da-cdb3-4416-84e9-95cda1366580.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0003/assets/0abea396-f92b-4a20-90eb-dd1a48e3869e.png?format=avif",
    "https://f.nooncdn.com/mpcms/EN0003/assets/502678ff-b088-4cdd-bcb8-7b0f5ccb5142.png?format=avif"]

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


  monthSales: any[];
  highProducts: any[];
  categories: any[];

  constructor(config: NgbCarouselConfig, private productService: ProductsService) {

  }

  ngOnInit(): void {
    const laptops$ = this.productService.getProducts('/search?q=laptop');
    const category$ = this.productService.getProducts('/category-list');
    const monthSales$ = this.productService.getProducts('/search?q=phone');

    // Fork Join
    // Parallelism: forkJoin allows all requests to run simultaneously rather than sequentially.
    // Error Handling: It's easier to manage errors when all requests are done together.
    // Maintainability: Reduces duplication in your code.


    forkJoin([laptops$, category$, monthSales$]).subscribe((data) => {
      console.log();
      this.highProducts = data[0]['products']
      this.categories = data[1].slice(0, 6)
      this.monthSales = data[2]['products']
    }, (err) => {
      console.error('Error fetching data', err);
    })
    //   this.productService.getProducts('/search?q=laptop').subscribe((res: any) => {
    //     this.highProducts = res.products.slice(0, 6)
    //     // console.log(this.highProducts);
    //   })
    //   this.productService.getProducts('/search?q=phone').subscribe((res: any) => {
    //     this.products = res.products
    //     // console.log(this.products);
    //   })

    //   this.productService.getProducts('/category-list').subscribe((res: any) => {
    //     this.categories = res.slice(0, 7)
    //   })
  }


}


// myObservable = new Observable((observer) => {
//   setTimeout(() => observer.next('first Category'), 1000);
//   setTimeout(() => observer.next('5 Category'), 5000);
//   setTimeout(() => observer.complete(), 3000);
//   setTimeout(() => observer.error(new Error('Error during data uploading')), 3000);
//   observer.next('Second Category');
//   observer.next('Third Category');
//   observer.next('Ramy Category');
//   observer.next('Ahmed Category');
//   // observer.complete();
// })

// myObservable = of(this.categories)   // Prints the array at one shoot
// myObservable = from(this.categories) // Prints the elements 1 by 1


// watch() {
// this.myObservable.subscribe(value => {
//   this.categories.push(value)
// },
//   (err: any) => { alert(err.message); }
//   , () => {
//     alert("Done")
//   }
// )

// this.myObservable.subscribe({
//   next: (value) => {
//     // this.categories.push(value)
//     console.log(value);
//   },
//   error: (err: any) => { alert(err.message); },
//   complete: () => {
//     alert("Done")
//   }
// })
// }