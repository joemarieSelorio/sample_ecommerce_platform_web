import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

 addedProducts: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCart().subscribe(res => {
      this.addedProducts = res.result.products;
    });
  }

}
