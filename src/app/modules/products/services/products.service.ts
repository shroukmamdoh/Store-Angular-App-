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
      `${environment.api}?limit=${limit}`
    )
  }
  getProductInfo(productId: any) {
    return this.http.get<any>(
      `${environment.api}${productId}`
    )
  }
  createProduct(product:any) {
    return this.http.post<any>(
      `${environment.api}`, product
    )
  }
}
