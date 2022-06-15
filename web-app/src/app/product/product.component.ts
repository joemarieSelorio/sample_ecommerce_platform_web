import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  addToCart(cartId: Number, product: Object): void {
    this.dataService.addToCart(cartId, product).subscribe(res => {
      window.alert( `Success adding to cart!`);
    });
  }

  ngOnInit(): void {
    this.product = this.productService.getProduct();
  }
}
