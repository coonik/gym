import { Component, Input, OnInit } from '@angular/core';
import IProduct from 'src/assets/interface/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input()
  public products!: IProduct[];

  constructor() { }

  ngOnInit(): void {
  }

}
