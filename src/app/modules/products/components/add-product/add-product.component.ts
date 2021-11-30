import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  fileName = '';
  constructor(private fb: FormBuilder, private productService: ProductsService, private router: Router) { }
  productForm = this.fb.group({
    title: ['', [Validators.required]],
    desc: ['', [Validators.required]],
    price: ['', [Validators.required]],
    category: ['', [Validators.required]],
    image: ['']
  });
  ngOnInit(): void {
  }
  addProduct() {
    console.log('form', this.productForm.value);
    this.productService.createProduct(this.productForm.value).subscribe((res:any)=>{
      this.router.navigateByUrl(`products`)
    })
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);
      console.log('image', file, formData);
      
      this.productForm.value.image = formData
    }
  }
}
