import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId:any
  product: Product = {
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
    id: undefined
  }
  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    this.route.params.subscribe((res:any) => {
      this.productId = res.id
      this.getProductInfo()
    })
   }

  ngOnInit(): void {
  }

  getProductInfo() {
    this.productsService.getProductInfo(this.productId).subscribe((res: Product)=> {
      this.product = res
    })
  }
}
