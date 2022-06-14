import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product:any;

  addToCart(cartId: Number, product: Object): void {
    this.dataService.addToCart(cartId, product).subscribe(res => {
      console.log(res);
    });
  }

  constructor(private dataService: DataService,  private route: ActivatedRoute) { }

  ngOnInit(): void {

   
  }

}
