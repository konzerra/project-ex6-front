import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import {AngularMaterialModule} from "../../angular.material/angular.material.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductsComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        AngularMaterialModule,
        MatPaginatorModule,
        FormsModule
    ]
})
export class ProductModule { }
