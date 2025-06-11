import { Component } from '@angular/core';
import { Product } from "../product/product";
import { httpResource, HttpResourceRef } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  products: HttpResourceRef<any[] | undefined>;
  constructor() {
    this.products = httpResource(() => "https://fakestoreapi.com/products");
  }
}
