import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ProductService } from '../services/product-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss'
})
export class CreateProduct {
  name: String = "";
  message: String = "";
  price: Number = 0;
  category: String = "";

  image: string = "";
  route = inject(Router);
  description: String = "";
  constructor(private service: ProductService) {
  }
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
    this.service.create(data).subscribe((v) => { if (v) { this.message = "Created Successfully!"; this.route.navigate(['']) } else { this.message = "Not created" } });


  }
}
