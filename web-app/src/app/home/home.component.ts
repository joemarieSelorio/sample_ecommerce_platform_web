import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products:any[]= [];
  product: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  setProduct(product: any): any {
    this.productService.setProduct(product);
  }

  addToCart(cartId: Number, product: Object): void {
    this.dataService.addToCart(cartId, product).subscribe(res => {
      window.alert( `Success adding to cart!`);
    });
  }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(res => {
      this.products = res.products;
    });
  }

}
