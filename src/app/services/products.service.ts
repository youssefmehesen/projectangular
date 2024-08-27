import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = 'https://dummyjson.com/products'

  constructor(private httpClient: HttpClient) { }

  getProducts(endPoint: string = '/', params?: any) {
    return this.httpClient.get<any[]>(`${this.url}${endPoint}`);
  }

}
