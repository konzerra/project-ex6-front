import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ProductsComponent} from "./products/products.component";
import {ProductDetailsComponent} from "./product.details/product.details.component";

const routes: Routes = [
  {
    path: 'category', component: ProductsComponent,
  },
  {
    path: 'details', component: ProductDetailsComponent,
  },
  { path: '**', redirectTo: 'category', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
