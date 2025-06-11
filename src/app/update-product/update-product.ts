import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  imports: [FormsModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.scss'
})
export class UpdateProduct {
  routeParams = inject(ActivatedRoute);
  id?: number;
  name: String = "";
  message: String = "";
  price: Number = 0;
  category: String = "";
  route = inject(Router);
  description: String = "";

  image: string = "";
  focusNextInput(e: Event, input: HTMLInputElement | HTMLTextAreaElement) {
    e.preventDefault();
    input.focus()
  }
  async onSubmit(event: Event) {
    event.preventDefault()
    const data = {
      name: this.name,
      price: this.price,
      category: this.category,
      description: this.description,
      image: this.image
    }
    this.service.edit(this.id, data).subscribe((v) => { if (v) { this.message = "Created Successfully!"; this.route.navigate(['']) } else { this.message = "Not created" } });


  }
  constructor(private service: ProductService) {
    this.routeParams.paramMap.subscribe((p) => this.id = parseInt(p.get("id") ?? ""))
  }
}
