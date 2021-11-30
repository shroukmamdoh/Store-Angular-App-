import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts(limit: number) {
    return this.http.get<any>(
      `https://fakestoreapi.com/products/?limit=${limit}`
    )
  }
  getProductInfo(productId: any) {
    return this.http.get<any>(
      `https://fakestoreapi.com/products/${productId}`
    )
  }
  createProduct(product:any) {
    return this.http.post<any>(
      `https://fakestoreapi.com/products/`, product
    )
  }
}
