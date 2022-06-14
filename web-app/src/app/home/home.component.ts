import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { TransfereService } from '../transfer-service.service';

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
    private transfereService:TransfereService,
    private router:Router
  ) {}

  public get getProduct():any{
    return this.product;
  }

  public addProduct(){
    const currentItem:any = {
        name: this.product.name,
        description: this.product.description,
        quantity: this.product.description,
        price: this.product.price
    };

   this.transfereService.setData(currentItem);
  }

  addToCart(cartId: Number, product: Object): void {
    this.dataService.addToCart(cartId, product).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(res => {
      console.log(res.products);
      this.products = res.products;
    });
  }

}
