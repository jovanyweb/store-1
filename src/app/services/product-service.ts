import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }
  create(product: any): Observable<Object> {
    return this.httpClient.post("https://fakestoreapi.com/products", product)
  }
  edit(id?: number, product?: any): Observable<Object> {
    return this.httpClient.put(`https://fakestoreapi.com/products/${id}`, product)
  }
  delete(id?: number): Observable<Object> {
    return this.httpClient.delete(`https://fakestoreapi.com/products/${id}`)
  }
}
