import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getProduct(id: Number) {
    return this.httpClient.get<any>(`http://localhost:5050/products/${id}`);
  }

  getProducts() {
    return this.httpClient.get<any>('http://localhost:5050/products');
  }

  getCart() {
    return this.httpClient.get<any>(`http://localhost:5050/carts/1`);
  }

  addToCart(cartId: Number, product: Object){
    return this.httpClient.patch(`http://localhost:5050/carts/${cartId}/products/`, product) ;
  }
}
