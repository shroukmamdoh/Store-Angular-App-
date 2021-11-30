import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AddProductComponent } from './components/add-product/add-product.component'
import { ProductDetailsComponent } from './components/product-details/product-details.component'
import { ProductsListComponent } from './components/products-list/products-list.component'

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path:'add',
    component: AddProductComponent
  },
  {
    path:'details/:id',
    component: ProductDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
