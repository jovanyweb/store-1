import { Component, inject } from '@angular/core';
import { Product } from "../product/product";
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [Product],
  templateUrl: './product-page.html',
  styleUrl: './product-page.scss'
})
export class ProductPage {
  product: HttpResourceRef<any>;

  routeParams?: ParamMap;
  id?: number;
  private route = inject(ActivatedRoute)

  constructor() {

    this.route.paramMap.subscribe(p => { this.id = parseInt(p.get("id") ?? "") });
    this.product = httpResource(() => `https://fakestoreapi.com/products/${this.id}`)
  }
}
