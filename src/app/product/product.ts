import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, NgOptimizedImage, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product {
  @Input() product: any;
  constructor(private service: ProductService) { }
  @Input() isHome: boolean = false;
  deleteClick(e: Event, id: number) {

    e.preventDefault();
    this.service.delete(id);
  }
}
