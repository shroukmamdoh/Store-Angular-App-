import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts(10).subscribe((res: Product[])=>{
      this.products = res
    })
  }

  navigateToPageDetails(id: any) {
    this.router.navigateByUrl(`products/details/${id}`)
  }

}
