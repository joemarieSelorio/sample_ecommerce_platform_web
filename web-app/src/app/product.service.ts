import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: any;

  setProduct(product: any) {
    return this.product = product;
  }

  getProduct() {
    return this.product;
  }
  /* . . . */
}