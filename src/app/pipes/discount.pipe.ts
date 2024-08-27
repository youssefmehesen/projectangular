import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, discountPercentage: number): number {
    const discount = (value * discountPercentage) / 100;
    const discountPrice = value - discount
    return discountPrice;
  }

}
